//import Express.
const express = require("express");
const res = require("express/lib/response");

const server = express();
//creating request from the server
server.listen("3200");


server.get("/",(req,res)=>{
    res.send("Hello from express")


})
console.log("Express is listning on 3200");