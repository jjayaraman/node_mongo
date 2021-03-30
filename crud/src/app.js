var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { mongoClient } = require('../src/data/utils/connect')

var customerRouter = require('./routes/customer')
var listingsRouter = require('./routes/listings')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use("/styles/css", express.static(path.join(__dirname, "./../node_modules/bootstrap/dist/css")));

// Routes
app.use('/customer', customerRouter);
app.use('/listings', listingsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Connect to mongoDB and add the db to locals for reuse in all needed routes later
mongoClient.then(client => {
  app.locals.db_mns = client.db('mns')
  app.locals.db_airbnb = client.db('airbnb')
}).catch(err => {
  res.render('error');
})

module.exports = app;
