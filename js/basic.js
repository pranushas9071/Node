import { createServer } from "http";

// process.exitCode = 1;
console.log("let'see....");

const server = createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Type", "text/html");
    
    // res.write(JSON.stringify({"name":"pranusha"}));
    res.write(req.url);
    res.end();
  })
  .listen(8090, () => console.log("server started..."));
process.exit(); //terminates the node.js

//reading environmental variables.........................................

require("dotenv").config();
console.log(process.env.ENV);

