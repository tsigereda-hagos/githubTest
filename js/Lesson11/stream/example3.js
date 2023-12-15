const fs = require('fs');
const zlib = require('zlib');
const path = require('path');



const readable = fs.createReadStream(path.join(__dirname, 'source.txt'));
const writeable = fs.createWriteStream(path.join(__dirname, 'destination.txt'));
console.log(readable);
readable.pipe(writeable);