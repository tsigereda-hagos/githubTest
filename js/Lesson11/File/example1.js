const fs = require('fs');
const path = require('path');

console.log('start');
const greet = fs.readFileSync(path.join(__dirname, 'greet.txt'), 'utf8');
console.log(greet);


// fs.readFileSync(path.join(__dirname, 'students.txt'), 'utf8', //sync operation
//     function (err, data) { console.log(data); });
fs.readFile(path.join(__dirname, 'students.txt'), 'utf8', //async operation
    function (err, data) { console.log(data); });
console.log('End');