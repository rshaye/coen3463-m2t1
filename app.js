var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var aboutus = require('./routes/aboutus');
var contact = require('./routes/contact');
var services = require('./routes/services');
var service1 = require('./routes/service1');
var service2 = require('./routes/service2');
var service3 = require('./routes/service3');


var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/aboutus', aboutus);
app.use('/contact', contact);
app.use('/services', services);
app.use('/service1', service1);
app.use('/service2', service2);
app.use('/service3', service3);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  
  res.status(err.status || 500);
  res.render('error');
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
module.exports = app;
