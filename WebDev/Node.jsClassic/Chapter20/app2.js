
var fs = require('fs');
var stream = fs.ReadStream('names.txt');
var data = '';

stream.setEncoding('utf8');
stream.on('data', function(chunk) {
	data += chunk;
});
stream.on('close', function () {
	console.log('all the data is read');
	console.log(data);
});