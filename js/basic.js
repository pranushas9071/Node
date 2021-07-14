const http = require("http");

// process.exitCode=1;
console.log("let'see....");

const server = http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("hello world");
    res.end();
  })
  .listen(8090, () => console.log("server started..."));
// process.exit(); //terminates the node.js

//reading encironmental variables.........................................
require('dotenv').config();
console.log(process.env.NODE_ENV);
