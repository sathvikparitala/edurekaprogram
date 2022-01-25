//Types of packags/Libs
// 1. Packages of Core Module
// 2. Package from NPM

const http = require("http");

// create server using http protocol
// Server should have ports
http.createServer((req, res)=>{
     res.end("Hello world from nodejs");
}).listen(3200);

console.log("express is listening on 3200");
