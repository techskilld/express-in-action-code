const express = require('express');
const app = express();

app.get('/olivia', function(req, res) {
  res.send("Welcome to olivia's homepage");
});

app.get('/users/:userid', function(req, res){
  let userid = parseInt(req.params.userid, 10);
  res.send("userid is " + userid);
});

app.use(function(req, res){
  res.status(404).send("Page Not Found");
});

app.listen(3000, function(){
  console.log("App Is Up to port 3000");
})
