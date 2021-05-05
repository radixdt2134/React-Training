
var createError = require('http-errors');
var express = require('express');

// Database connected.
var mongoosedb =  require('./Database/databaseconnection');
mongoosedb.Connectmongoose();

// Token Generated Algorithm
global.config = require('./public/TokenAlgo/config');

const fileupload = require('express-fileupload');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Customer Model
require('./Model/Cust_FixedDeposit');
require('./Model/CustAccModel');
require('./Model/Cust_Trans');
require('./Model/CustomerModel');


var app = express();
app.use(express.json());
//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Middleware
app.use(fileupload());


// router
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var customerrouter = require('./routes/Customer');


// Token Generated


// api Call
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/Cust', customerrouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
