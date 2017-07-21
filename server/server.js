var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('assets'));

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
  res.render('pages/index');
});

// developers page
app.get('/desarrolladores', function (req, res) {
  res.render('pages/desarrolladores');
});

// about us page
app.get('/empresa', function (req, res) {
  res.render('pages/empresa');
});

// contact page
app.get('/contacto', function (req, res) {
  res.render('pages/contacto');
});

// payments page
app.get('/pagos', function (req, res) {
  res.render('pages/pagos');
});

// pricing page
app.get('/precios', function (req, res) {
  res.render('pages/precios');
});

// subscriptions page
app.get('/suscripciones', function (req, res) {
  res.render('pages/suscripciones');
});

app.listen(8080);
console.log('8080 is the magic port');