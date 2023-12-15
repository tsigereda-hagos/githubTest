let http = require("http");
let fs = require('fs');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-type': 'text/html' })
//     response.end("Hello from the server");
//     console.log('A new request received');
// })



// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     // console.log(req.url, req.method, req.headers);

//     const person = { firstname: 'Josh', lastname: 'Edward' };
//     res.end(JSON.stringify(person));
//     //res.end(person);
// }).listen(3000, '127.0.0.1');





// const server = http.createServer((request, response) => {
//     fs.readFile('./File/dog.jpg', (err, data) => {
//         if (err) {
//             response.writeHead(400, { 'Content-type': 'text/html' })
//             console.log(err);
//             response.end("No such image");
//         } else {
//             response.writeHead(200, { 'Content-type': 'image/jpg' });
//             response.end(data);
//         }
//     })
//     // response.end("Hello from the server");
//     console.log('A new request received');
// }).listen(3000);



const server = http.createServer((request, response) => {
    let path = request.url;

    if (path === '/' || path.toLowerCase() === '/home')
        response.end("You are in home page");
    else if (path.toLowerCase() === '/about')
        response.end("You are in about page");
    else if (path.toLowerCase() === '/contact')
        response.end("You are in contact page");
    else {
        response.writeHead(404);
        response.end("Error 404: Page not found");
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Server has started...');
});