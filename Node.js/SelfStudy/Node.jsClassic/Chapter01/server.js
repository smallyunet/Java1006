
/* 尝试第一个Node.js程序，程序会在本地3000端口返回Hello World */

var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(3000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/');