const http = require('http');
const server = http.createServer();

server.on('request', function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end('Hello, World');
});

server.listen(3000, function(){
  console.log('server is listening to port 3000');
});
