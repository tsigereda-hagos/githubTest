const fs = require('fs');
const path = require('path');
const readable = fs.createReadStream(path.join(__dirname, 'dog.jpg'));
const writable = fs.createWriteStream(path.join(__dirname, 'destinationFile2.jpg'));
readable.pipe(writable);