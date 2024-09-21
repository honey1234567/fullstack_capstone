const http = require("http");
const server = http.createServer((req, res) => {
    //handle incoming request and send response
    res.setHeader('Content-Type', "text/plain");//server is telling what kind of output your client can expect
    res.write("hello world");
    res.end();//end stream 

})
const port = 3000;
const host = 'localhost';
server.listen(port, host, () => {
    console.log("server is running on ", host, port);
})