const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // extended true allows us to parse nested objects

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send('The result of that calculation is ' + result);
});

app.get('/bmicalculator', function (req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', function (req, res) {
  var weightInput = parseFloat(req.body.weightInput);
  var heightInput = parseFloat(req.body.heightInput);
  var heightInputSquared = Math.pow(heightInput, 2);
  var result = weightInput / heightInputSquared;
  res.send('Your BMI is ' + result);
});

app.listen(3000, function () {
  console.log('Server is currently listening on port 3000');
});
