/**
 * 同步（阻塞）代码，请求会根据响应依次返回
 * 程序模拟了从一个page和一个api请求数据
 * sleep函数模拟了请求网络所需一定时间，只是模拟
 */

function sleep(milliseconds) {
    var start = new Date().getTime();
    while((new Date().getTime - start) < milliseconds) {
    }
}

function fetchPage() {
    console.log('fetch page');
    sleep(2000);
    console.log('data returned from requesting page');
}

function fetchApi() {
    console.log('fetch api');
    sleep(2000);
    console.log('data returned from the api');
}

fetchPage();
fetchApi();