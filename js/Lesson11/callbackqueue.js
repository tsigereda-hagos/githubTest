const process = require('process')
let http = require("http");
let fs = require('fs');


// console.log('start');
// setTimeout(function () { console.log("timer"); }, 0);
// setImmediate(function () { console.log('immediate') });
// console.log("hello");

// process.nextTick(function () {
//     console.log('nextTick');
// });


// fs.writeFile('mynewfile.txt', 'Hello world!', function (err) {
//     if (err) throw err;
//     console.log('fs writing file');
// });


// fs.readFile('mynewfile.txt', function (err, data) {
//     console.log("fs reading file");
// });

// setTimeout(function () { console.log('timeout') }, 0);
// console.log('end');




// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => { console.log("this is Promise.resolve 1") });
// Promise.resolve().then(() => { console.log("this is Promise.resolve 2") });
// Promise.resolve().then(() => { console.log("this is Promise.resolve 3") });
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setTimeout(() => console.log("this is setTimeout 2"), 0);
// setImmediate(() => console.log("this is setImmediate 1"));




// setTimeout(() => { console.log('timeout'); }, 0);
// setImmediate(() => { console.log('immediate'); });
// process.nextTick(() => console.log('nexttick'));

// function sum() { console.log("nexTick1") }

// console.log('start');//sync
// process.nextTick(sum);
// setTimeout(() => console.log("this is setTimeout 1"), 15000);
// process.nextTick(() => console.log("this is process.nextTick 2"));
// setImmediate(() => console.log("this is setImmediate"));
// setTimeout(() => console.log("this is setTimeout 2"), 10000);
// process.nextTick(() => console.log("this is process.nextTick 3"));
// console.log('end');//sync

