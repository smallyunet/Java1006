
var express = require('express'),
    app = module.exports = express.createServer(),
    io = require('socket.io').listen(app);

app.listen(3000);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
    socket.emit('welocome', { text: 'OH HAI! U R CONNECTED!'});
});
