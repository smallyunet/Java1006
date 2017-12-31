/**
 * 创建一个简单的Node.js服务器
 * 将Hello World打印到浏览器
 */

var http = require('http');
http.createServer(function(req, res) {
    res.end('Hello World\n');
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000');