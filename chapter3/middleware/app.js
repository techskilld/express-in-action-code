const express = require('express');
const app = express();

app.use(function(req, res, next){
  console.log(req.method);
  next();
  // passive middleware that does not change the responce
});

app.use(function(req, res, next){
  console.log('Will give you pass if you visit this during an even numbered minute.');
  let minutes = (new Date()).getMinutes();
  if (minutes % 2 == 0){
    next();
  } else {
    res.statusCode = 403;
    res.end("not authorized");
  }
  // middleware that changes the responce on a condition.
});

app.get('/', function(req, res){
  res.end('Secret info: the password is "swordfish"!');
});

app.get('/mid', function(req, res){
  res.end('hello, world');
});

app.listen(3000);
