const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('short'));

app.get('/', function(req, res){
  res.render('index', {
    message: "Hello World. From ejs and express"
  });
});

app.listen(3000, function(){
  console.log('App is up!');
});
