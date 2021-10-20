"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zlib_1 = __importDefault(require("zlib"));
var fs_1 = __importDefault(require("fs"));
//gZip - compression
var gZip = zlib_1.default.createGzip();
var input = fs_1.default.createReadStream("Node/" + "../stuff/data.txt");
var output = fs_1.default.createWriteStream("Node/" + "../stuff/data.txt.gz");
input.pipe(gZip).pipe(output);
console.log("Compressed successfully");
//gZip - decompression
var unZip = zlib_1.default.createUnzip();
var input1 = fs_1.default.createReadStream("Node/" + "../stuff/data.txt.gz");
var output1 = fs_1.default.createWriteStream("Node/" + "../stuff/decompressed.txt");
var input3 = fs_1.default.readFileSync("Node/" + "../stuff/testing.gz");
zlib_1.default.gunzip(input3, function (err, res) {
    if (err)
        console.log(err);
    else {
        console.log("Try deflate : " + res);
        fs_1.default.writeFileSync("Node/" + "../stuff/testing.txt", res, { encoding: "utf-8" });
    }
});
// input1
//   .pipe(unZip)
//   .on("error", (err) => {
//     console.log(err);
//   })
//   .pipe(output1);
// console.log("Decompressed successfully");
//compression and decompression using gzip
zlib_1.default.gzip("Pranusha", function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log("gzip compressed data : " + data.toString("base64"));
    zlib_1.default.gunzip(data, function (err, res) {
        console.log("gunzip decompressed data : " + res.toString());
    });
    var unzip = zlib_1.default.createUnzip();
    unzip.write(data);
    unzip.on("data", function (chunk) {
        console.log("unzip decompressed data : " + chunk.toString());
    });
});
//defleat and inflate
zlib_1.default.deflate("Pranusha", function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("defleat compression : " + data.toString("base64"));
        zlib_1.default.inflate(data, function (err, res) {
            if (!err)
                console.log("Inflate decompression : " + res.toString());
            else
                console.log(err);
        });
    }
});
//deflateSync and inflateSync
var inp = "Good morning";
var deflate = zlib_1.default.deflateSync(inp);
console.log("DeflateSync compression : " + deflate.toString("base64"));
var inflate = zlib_1.default.inflateSync(deflate);
console.log("InflateSync decompression : " + inflate.toString());
//Brotli compression and decompression
var inp2 = "Good evening";
zlib_1.default.brotliCompress(inp2, function (err, res) {
    if (err)
        console.log(err);
    else {
        console.log("Brotli compression : " + res.toString("base64"));
        zlib_1.default.brotliDecompress(res, function (err, res) {
            console.log("Brotli decompression : " + res.toString());
        });
    }
});
//Brotli sync compression and decompression
var brotliC = zlib_1.default.brotliCompressSync(inp2);
console.log("Brotli sync compression : " + brotliC.toString("base64"));
var brotliD = zlib_1.default.brotliDecompressSync(brotliC);
console.log("Brotli sync decompression : " + brotliD.toString());
