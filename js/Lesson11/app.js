let http = require("http");

//create a server
let server = http.createServer(function (req, res) {

    console.log(req.url);
    console.log(req.method);
    // console.log(req.headers);
    res.setHeader("Content-Type", "text/plain")
    res.write("Hello From Server");
    res.write(req.url);
    res.end();
});


//start the server
server.listen(3000, () => {
    console.log('The server is started and listening port: 3000');
})