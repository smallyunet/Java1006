
/* 体会网络I/O交互的不可预测性，程序打印了不同网站的响应时间 */

var http = require('http'),
    urls = ['www.qq.com', 'www.baidu.com', 'www.163.com'];

function fetchPage(url) {
    var start = new Date();
    http.get({host: url}, function(res) {
        console.log("Got response from: " + url);
        console.log('Request took: ', new Date() - start, 'ms');
    });
}

for(var i = 0; i < urls.length; i++) {
    fetchPage(urls[i]);
}