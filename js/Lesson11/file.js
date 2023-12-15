var fs = require('fs');

// fs.writeFileSync('./input.txt', 'it is writing'); // sync

// console.log('start');//sync
// let text = fs.readFileSync('./input.txt', "utf8");  //sync
// console.log(text);//sync
// fs.readFile('./input.txt', "utf8", (err, data) => {//async
//     console.log(data);
// });
// console.log('end');//sync


// // let content = `Data from input.txt ${text}`;


// console.log("Reading file...");
// fs.writeFileSync('./output.txt', "hello world");//sync
// fs.writeFile('./output.txt', "hello world 1", () => {//async
//     console.log('file is written');
// });