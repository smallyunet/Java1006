/* 演示网络I/O和回调，程序一共做了四件事情，内容返回的顺序是随机的
 * 读取本地文件往往先要返回，而访问网络，服务器响应的次序会有差异
 */

var fs = require('fs'),
    http = require('http');

http.get({host: 'shapeshed.com'}, function(res) {   // 当服务器返回响应时，触发回调函数
    console.log("Got a response from shapeshed.com");
}).on('error', function(e) {
    console.log("There was an error from shapeshed.com");
});

fs.readFile('file01.txt', 'utf8', function(err, data) {
    if(err) throw err;
    console.log('File 01 read!');
});

http.get({host: 'www.bbc.co.uk'}, function(res) {   // 当服务器返回响应时，触发回调函数
    console.log("Got a response from www.bbc.co.uk");
}).on('error', function(e) {
    console.log("There was an error from www.bbc.co.uk");
});

fs.readFile('file02.txt', 'utf8', function(err, data) {
    if(err) throw err;
    console.log('File 02 read!');
});