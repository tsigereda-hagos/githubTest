const fs = require('fs');
const path = require('path');

// // Stream will read the file in chunks
// // if file size is bigger than the chunk then it will read a chunk and emit a 'data' event.
// // Use encoding to convert data to String of hex
// // Use highWaterMark to set the size of the chunk. Default is 64 kb

const readable = fs.createReadStream(path.join(__dirname, 'source.txt'),
    { highWaterMark: 1200, encoding: "utf-8" });
const writable = fs.createWriteStream(path.join(__dirname, 'destinationFile.txt'));

readable.on('data', function (chunk) {
    console.log("readable: ", chunk.length);
    console.log(chunk);
    writable.write(chunk);
});



