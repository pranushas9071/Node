import zlib from "zlib";
import fs from "fs";

//gZip - compression
const gZip = zlib.createGzip();
const input = fs.createReadStream("Node/" + "../stuff/data.txt");
const output = fs.createWriteStream("Node/" + "../stuff/data.txt.gz");
input.pipe(gZip).pipe(output);
console.log("Compressed successfully");

//gZip - decompression
const unZip = zlib.createUnzip();
const input1 = fs.createReadStream("Node/" + "../stuff/data.txt.gz");
const output1 = fs.createWriteStream("Node/" + "../stuff/decompressed.txt");
// input1
//   .pipe(unZip)
//   .on("error", (err) => {
//     console.log(err);
//   })
//   .pipe(output1);
// console.log("Decompressed successfully");

//compression and decompression using gzip
zlib.gzip("Pranusha", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(`gzip compressed data : ${data.toString("base64")}`);
  zlib.gunzip(data, (err, res) => {
    console.log(`gunzip decompressed data : ${res.toString()}`);
  });
  const unzip = zlib.createUnzip();
  unzip.write(data);
  unzip.on("data", (chunk) => {
    console.log(`unzip decompressed data : ${chunk.toString()}`);
  });
});

//defleat and inflate
zlib.deflate("Pranusha", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`defleat compression : ${data.toString("base64")}`);
    zlib.inflate(data, (err, res) => {
      if (!err) console.log(`Inflate decompression : ${res.toString()}`);
      else console.log(err);
    });
  }
});

//deflateSync and inflateSync
const inp = "Good morning";
const deflate = zlib.deflateSync(inp);
console.log(`DeflateSync compression : ${deflate.toString("base64")}`);
const inflate = zlib.inflateSync(deflate);
console.log(`InflateSync decompression : ${inflate.toString()}`);

//Brotli compression and decompression
const inp2 = "Good evening";
zlib.brotliCompress(inp2, (err, res) => {
  if (err) console.log(err);
  else {
    console.log(`Brotli compression : ${res.toString("base64")}`);
    zlib.brotliDecompress(res, (err, res) => {
      console.log(`Brotli decompression : ${res.toString()}`);
    });
  }
});

//Brotli sync compression and decompression
const brotliC = zlib.brotliCompressSync(inp2);
console.log(`Brotli sync compression : ${brotliC.toString("base64")}`);
const brotliD = zlib.brotliDecompressSync(brotliC);
console.log(`Brotli sync decompression : ${brotliD.toString()}`);
