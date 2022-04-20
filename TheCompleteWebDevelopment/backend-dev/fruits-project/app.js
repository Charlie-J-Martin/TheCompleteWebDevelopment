const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name of the fruit"],
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit.",
});

// fruit.save();

// const pineapple = new Fruit({
//   name: "Pineapple",
//   rating: 9,
//   review: "Great fruit.",
// });

// pineapple.save();

const mango = new Fruit({
  name: "Mango",
  rating: 8,
  review: "I love my Mangos.",
});

mango.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

Person.updateOne({ name: "John" }, { favouriteFruit: mango }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Sucessfully updated the person");
  }
});

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple,
// });

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit!",
// });

// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me",
// });

// const banana = new Fruit({
//   name: "Banana",
//   score: 3,
//   review: "Weird texture",
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Sucessfully saved all the fruits to fruitsDB");
//   }
// });

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // mongoose.connection.close();
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne(
//   { _id: "625d3986a000980c2c53a5cc" },
//   { name: "Peach" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Sucesffuly updated the document");
//     }
//   }
// );

// Fruit.deleteOne({ _id: "625d3986a000980c2c53a5cc" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Sucesfully deleted");
//   }
// });

// Person.deleteMany({ name: "John" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Sucessfully deleted many");
//   }
// });
