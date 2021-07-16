const fs = require("fs");
fs.readFile("./js/events.js", "utf8", (err, data) => {
  console.log(data);
});

fs.writeFile("./js/newfile.js", 'console.log("hello world");', (err) => {
  console.log("File saved");
});

fs.appendFile("./js/newfile.js", 'console.log("welcome....");', (err) => {
  console.log("File appended");
});

// deleting a file.............................................................
// fs.unlink("some file name..",(err)=>{
//     console.log("deleted");
// })

//file stat.............................................................
fs.stat("./js/basic.js", (err, stats) => {
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isSocket());
  console.log(stats.size);
});


//folders.....................................................................

fs.mkdir("stuff", () => {
  console.log("created folder...");
});

const fdname = "./js";

console.log(fs.readdirSync(fdname));

// fs.readdir(fdname,(er,files)=>{
//     console.log(files);
//     console.log("read successfully....");
// })
