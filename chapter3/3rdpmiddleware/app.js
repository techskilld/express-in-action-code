const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger("short"));
// using morgan as a logger. 3rd party middleware

app.get('/', function(req, res){
  res.end('hello, world');
});

app.listen(3000, function() {
  console.log('App is up');
})
