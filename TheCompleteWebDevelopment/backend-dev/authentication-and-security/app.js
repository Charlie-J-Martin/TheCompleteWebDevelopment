require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Session - Is a period of time when a browser interacts with a server.
// Usually when you log into a website thats when your session starts and that when your cookie gets created. In terms of a login cookie we'd have user credentials that
// say this user is logged in and authenticated; meaning that the user won't need to be asked for authentication as they are browser the website. This session is persistent
// until the user logouts where the cookie then gets destroyed.

// Setting up the express-session
// https://www.npmjs.com/package/express-session
// secret: This is used to sign the session ID cookie.
// resave: Forces the session to be saved back to the session store, even if the session was never modified during the request.
// saveUninitialized: Forces a session that is uninitialised to be saved to the store. A session is uninitialised when it is new but not modified.
app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

// Intialise passport
// And set passport to manage our sessions.
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
  secret: String,
});

// Setting up passport local mongoose as a plugin for mongoose.
// https://www.npmjs.com/package/passport-local-mongoose.
userSchema.plugin(passportLocalMongoose);

// Setting up the findOrCreate method within the Google Auth setup.
// Package to make the code work rather than adding in our own code.
// https://www.npmjs.com/package/mongoose-findorcreate
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

// Setup a local strategy to authenticate users using their username and password.
passport.use(User.createStrategy());
// Serialise and Deserialise are only utilised when using sessions.
// Serialise creates the fortune cookie and stuffs the message with our users identification into the cookie.
// Deserialise allows passport to be able to crumble the cookie and discover the message inside which is who the user is. (So we can authenticate them on our server).
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// Google Authentication strategy setup
// Find or create user is psuedoCode / So it has to be modified.
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/secrets",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    function (accessToken, refreshToken, profile, cb) {
      // console.log(profile);
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

app.get("/", function (req, res) {
  res.render("home");
});

// Setting up google login screen
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/secrets",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect secrets.
    res.redirect("/secrets");
  }
);

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.get("/secrets", function (req, res) {
  User.find({ secret: { $ne: null } }, function (err, foundUsers) {
    if (err) {
      console.log(err);
    } else {
      res.render("secrets", { usersWithSecrets: foundUsers });
    }
  });
});

// We're checking below if the user is authenticated and if so we render the page.
// Checking the cookie that is created with the express-sessions package.
app.get("/submit", function (req, res) {
  if (req.isAuthenticated()) {
    res.render("submit");
  } else {
    res.redirect("/login");
  }
});

app.post("/submit", function (req, res) {
  const submittedSecret = req.body.secret;

  User.findById(req.user.id, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        foundUser.secret = submittedSecret;
        foundUser.save(function () {
          res.redirect("/secrets");
        });
      }
    }
  });
});

// Passport logout method. Deauthenticate user
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

app.post("/register", function (req, res) {
  // passport local mongoose register method.
  // Using passport local mongoose as our middle man to create users.
  // passport.authenticate - With local authentication.
  User.register(
    { username: req.body.username },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, function () {
          res.redirect("/secrets");
        });
      }
    }
  );
});

app.post("/login", function (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  // Passport login function.
  // Passport then authenticates the user.
  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/secrets");
      });
    }
  });
});

app.listen(3000, function (req, res) {
  console.log("Server sucessfully started on port 3000.");
});
