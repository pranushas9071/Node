//path.....................................................................
import * as path from "path"
// const path = require("path");
const note = "./js/basic.js";
console.log("base name : " + path.basename(note));
console.log("dirname : " + path.dirname(note));
console.log("extname : " + path.extname(note));
const fname = "js";
const p = path.join("./", fname, "basic.js"); //path.join
console.log(path.basename(p));
console.log(path.resolve("basic.js")); //path.resolve gives absolute path.....
console.log(path.normalize("/users/Pranu/..//test.txt")); //removes the . specifiers........
console.log(path.parse("/users/Pranu/text.txt")); //parse 
console.log(path.format({dir:"C:\\Users",base:"test.txt"}));
console.log(path.format({root:"C:\\Users\\",name:"test",ext:"txt"}));