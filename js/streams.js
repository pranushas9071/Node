import stream from "stream";
import { Transform } from "stream";

//readable stream.........................................
const readStream = new stream.Readable();
readStream._read = () => {
  console.log("Reading...");
};

readStream.push("Hello ");
readStream.push("World\n");
readStream.pipe(process.stdout);

//writable stream.........................................
const writeStream = new stream.Writable();
writeStream._write = (chunk, encoding, callback) => {
  console.log("This is a chunk : ", chunk.toString());
  callback();
};
process.stdin.pipe(writeStream);

//reading a readable stream using writable stream...........
const read1 = new stream.Readable({ read() {} });
const write1 = new stream.Writable();
write1._write = (chunk, encoding, callback) => {
  console.log("write stream chunk : ", chunk.toString());
  callback();
};
read1.pipe(write1);
read1.push("Good ");
read1.push("Morning!!");

//transform stream..................................
const tStream = new Transform();
tStream._transform = (chunk, encoding, callback) => {
  console.log("Tranform chunk : ", chunk.toString().toUpperCase());
  callback();
};
process.stdin.pipe(tStream);
tStream.pipe(process.stdout);

//duplex streams...................................................
const dStream = new stream.Duplex();
dStream._write = (chunk, encoding, next) => {
  console.log(`Duplex chunk : ${chunk}`);
  next();
};
dStream._read = () => {};
dStream.push("Good evening");
process.stdin.pipe(dStream);
dStream.pipe(process.stdout);

// const duplex = new stream.Duplex({
//   write: (chunk, encoding, next) => {
//     console.log("Chunk added : ", chunk);
//     next();
//   },
//   read: (size) => {
//     this.push("some data");
//   },
// });
