const express = require('express');
const app = express();

// This call back function sets what the request and response should be when the callback gets triggered.
app.get('/', function (req, res) {
  res.send('Hello');
});

app.get('/contact', function (req, res) {
  res.send('Contact me at cjm@gmail.com');
});

app.get('/about', function (req, res) {
  res.send('My name is Charlie, I own this website');
});

app.get('/hobbies', function (req, res) {
  res.send('I like coding');
});

app.listen(3000, function () {
  console.log('Server started on port:3000');
});
