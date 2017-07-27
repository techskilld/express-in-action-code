const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('short'));

app.get('/', function(req, res){
  res.end('home page');
});

app.get('/about', function(req, res){
  res.end('the about page');
});

app.use(function(req, res){
  res.statusCode  = 404;
  res.end('Error 404');
});

app.listen(3000, function(){
  console.log('App is up!');
});
