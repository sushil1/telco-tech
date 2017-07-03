var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('client-sessions')
var flash = require('connect-flash')
//passport authentication
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy


var index = require('./routes/index')
var api = require('./routes/api')
var account = require('./routes/account')
var admin = require('./routes/admin')

var mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL, function(err, db){
  if(err){
    console.log('DB connection failed')
    return
  }
  console.log('DB connection successful')
})

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hjs')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(session({
    cookieName:'session',
    secret:process.env.SESSION_SECRET,
    duration:24*60*60*1000,
    activeDuration:30*60*1000
  }))
  app.use(flash())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/api', api)
app.use('/account', account)
app.use('/admin', admin)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
