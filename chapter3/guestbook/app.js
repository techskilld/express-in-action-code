const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

let entries = []; // this array will hold our entries
app.locals.entries = entries; // make this array available in all views

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
// populate a variable req.body if the user is submitting a form. the extended option is required.

app.get('/', function(req, res){
  res.render('index');
});

app.get('/new-entry', function(req, res){
  res.render('new-entry');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.post('/new-entry', function(req, res){
  if (!req.body.title || !req.body.body) {
    res.status(400).send('Entries Must Be Filled');
    return;
  }
  entries.push({
    title: req.body.title,
    body: req.body.body,
    publised: new Date
  });
  res.redirect('/');
});

app.use(function(req, res){
  res.status(404).render('404');
});

app.listen(3000, function(){
  console.log('App is up visit -> http://localhost:3000');
});
