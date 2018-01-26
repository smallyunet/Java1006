
var fs = require('fs');
var stream = fs.ReadStream('names.txt');
stream.setEncoding('utf-8');

stream.on('data', function(chunk) {
	console.log('read some data');
});
stream.on('close', function() {
	console.log('all the data is read');
});