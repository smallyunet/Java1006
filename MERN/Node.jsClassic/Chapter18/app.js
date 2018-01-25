
var EventEmitter = require('events').EventEmitter;
var secretMessage = new EventEmitter();

// 监听事件，接受emit发送过来的数据
secretMessage.on('message', function (data) {
    console.log(data);
});

// 监听事件，打印固定字符串
secretMessage.on('self destruct', function () {
    console.log('BANG! The message is destroyed!');
});

// 触发事件，传递参数过去
secretMessage.emit('message', 'This is a secret message. It will self destruct in 5 seconds..');

// 延时5秒触发事件，使用默认参数
setTimeout(function () {
    secretMessage.emit('self destruct');
}, 5000);