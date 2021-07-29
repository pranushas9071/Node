import { readFile, writeFile, appendFile, stat, mkdir, readdirSync } from "fs";
readFile("./js/events.js", "utf8", (err, data) => {
  console.log(data);
});

writeFile("./js/newfile.js", 'console.log("hello world");', (err) => {
  console.log("File saved");
});

appendFile("./js/newfile.js", 'console.log("welcome....");', (err) => {
  console.log("File appended");
});

// deleting a file.............................................................
// fs.unlink("some file name..",(err)=>{
//     console.log("deleted");
// })

//file stat.............................................................
stat("./js/basic.js", (err, stats) => {
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isSocket());
  console.log(stats.size);
});


//folders.....................................................................

mkdir("stuff", () => {
  console.log("created folder...");
});

const fdname = "./js";

console.log(readdirSync(fdname));

// fs.readdir(fdname,(er,files)=>{
//     console.log(files);
//     console.log("read successfully....");
// })
