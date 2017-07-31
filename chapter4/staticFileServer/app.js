const express = require('express');
const path = require('path');
const fs = require('fs');
const logger = require('morgan');
const app = express();

app.use(logger('short'));

let filePath = path.join(__dirname, "static");
app.use(express.static(filePath));

// app.use(function(req, res, next){
//   let filePath = path.join(__dirname, "static", req.url);
//   fs.stat(filePath, function(err, fileInfo){
//     if (err) {
//       next();
//       return;
//     }
//
//     if (fileInfo.isFile()) {
//       res.sendFile(filePath);
//     } else {
//       next();
//     }
//   });
// });

app.use(function(req, res){
  res.status(404);
  res.send("File Not found");
});

app.listen(3000, function(){
  console.log('APP is up at : http://localhost:3000');
});
