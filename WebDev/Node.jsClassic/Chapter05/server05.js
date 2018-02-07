/**
 * 创建简单的HTML客户端
 * options配置了发送请求的参数
 * 如果状态码为200，则返回up
 */


var http = require('http');

var options = {
    host: 'shapeshed.com',
    port: 80,
    path: '/'
};

http.get(options, function(res) {
    if(res.statusCode == 200) {
        console.log("The site is up!");
    } else {
        console.log("The site is down!");
    }
}).on('error', function(e) {
    console.log("There was an error: " + e.message);
});