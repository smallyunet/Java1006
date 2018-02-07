
var fs = require('fs');
var readableStream = fs.ReadStream('names.txt');
var writeableStream = fs.WriteStream('out2.txt');

readableStream.pipe(writeableStream);