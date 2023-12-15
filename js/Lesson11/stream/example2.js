const fs = require('fs');
const path = require('path');

// const readable = fs.createReadStream(path.join(__dirname, 'card.jpg'));
// const writable = fs.createWriteStream(path.join(__dirname, 'destinationFile.jpg'));

// readable.pipe(writable);
const writable = fs.createWriteStream(path.join(__dirname, 'some.txt'));
writable.write('Hello.....');
writable.on('error', (err) => { console.log(err) });