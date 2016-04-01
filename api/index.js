var gpio = require("pi-gpio");
var express = require("express");
var app = express();
app.set('view engine', 'jade');

gpio.open(16, "output");

app.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.get('/on', function (req, res) {
  gpio.write(16, 1);
});

app.get('/off', function (req, res) {
  gpio.write(16, 0);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

