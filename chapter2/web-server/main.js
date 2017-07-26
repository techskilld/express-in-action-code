const http = require('http');

function requestHandler(req, res) {
  console.log('Request Coming');
  res.writeHead(200, {'Content-Type' : 'plain/text'});
  res.end('Hello, World');
}

let server = http.createServer(requestHandler);
server.listen(8000);
