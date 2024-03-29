const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  const query = req.body.cityName;
  const apiKey = '2ebc69fbf3a59862b6284d9cb2355b44';
  const units = 'metric';
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    query +
    '&appid=' +
    apiKey +
    '&units=' +
    units;

  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on('data', function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDataDescription = weatherData.weather[0].description;
      const weatherIcon = weatherData.weather[0].icon;
      const imageURL =
        'https://openweathermap.org/img/wn/' + weatherIcon + '@2x.png';
      res.write(
        '<p> The weather is curerntly ' + weatherDataDescription + '</p>'
      );
      res.write(
        '<h1> The temperature is' +
          query +
          ' is ' +
          temp +
          ' degree Celcius </h1>'
      );
      res.write('<img src=' + imageURL + '>');
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});
