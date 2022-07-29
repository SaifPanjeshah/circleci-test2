const http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World!'); 
  res.end(); 
}).listen(8085, '0.0.0.0');
