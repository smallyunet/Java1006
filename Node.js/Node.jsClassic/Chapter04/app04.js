/**
 * 异步（非阻塞）代码
 * Node的异步风格,使用回调
 * 程序从真实的网络环境中分别请求两个页面的数据
 * 请求会很快发出，而响应会在一段时间后返回，并且顺序无法保证
 */

var http = require('http')

function fetchPage() {
    console.log('fetching page');
    http.get({host:'trafficjamapp.herokuapp.com', path:'/?delay=2000'},
        function(res) {
            console.log('data returned from requesting page');
        }).on('error', function() {
            console.log('There was an error' + e);
    });
}

function fetchApi() {
    console.log('fetching api');
    http.get({host:'trafficjamapp.herokuapp.com', path:'/?delay=2000'},
        function(res) {
            console.log('data returned from the api');
        }).on('error', function() {
        console.log('There was an error' + e);
    });
}

fetchPage();
fetchApi();