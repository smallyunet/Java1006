
var spawn = require('child_process').spawn;
var ping = spawn('ping', ['baidu.com'])

ping.stdout.setEncoding('utf8');
ping.stdout.on('data', function(data) {
	console.log(data);
});

ping.on('exit', function (code, signal) {
	console.log('child process was killed with a  ' + signal + 'signal');
});

ping.kill('SIGINT');