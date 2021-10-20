"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var secret = "abcdefg";
//hmac........................................................................
var res = crypto_1.default
    .createHmac("sha256", secret)
    .update("Hello world")
    .digest("hex");
console.log("Result of Hmac : " + res);
//hash........................................................................
var hash = crypto_1.default.createHash("sha256").update("Hello world").digest("base64");
console.log("Result of hash : " + hash);
//cipher.......................................................................
var buff = Buffer.from("Hello");
var cipher = crypto_1.default.createCipher("aes-192-gcm", secret);
cipher.setAAD(buff); // sets additional authentication while gcm,ccm,ocb algorithms are used
var encrypted = cipher.update("Hello world", "utf-8", "hex");
// setAutoPadding(false) ---> disables the padding which is done automatically by the cipher class
cipher.setAutoPadding();
encrypted += cipher.final("hex");
console.log("Result of cipher : " + encrypted);
console.log(cipher.getAuthTag());
//decipher..........................................................................
var decipher = crypto_1.default.createDecipher("aes192", secret);
var encrypt = "0e30f802c8f5ef09ca0f834674f61695";
var decrypted = decipher.update(encrypt, "hex", "utf-8");
decrypted += decipher.final("utf-8");
console.log("Result of decryption : " + decrypted);
//cipheriv..........................................................................
// (async function () {
//   console.log(`Inside async function`);
//   const key: any = await new Promise((res, rej) => {
//     crypto.scrypt(secret, "salt", 24, (err, data) => {
//       if (err) rej(err);
//       res(data);
//     });
//   });
//   let iv = Buffer.alloc(16, 0);
//   let e = crypto.createCipheriv("aes-128-gcm", key, iv);
//   let res1 = e.update("Hello world", "utf-8", "hex");
//   res1 += e.final("hex");
//   console.log(`Result for cipherv : ${res1}`);
// })();
var key = crypto_1.default.scryptSync("Pass", "salt", 24);
var iv = Buffer.alloc(16, 0);
var e = crypto_1.default.createCipheriv("aes-192-cbc", key, iv);
var res1 = e.update("Hello world", "utf-8", "hex");
res1 += e.final("hex");
console.log("Result of cipheriv : " + res1);
var d = crypto_1.default.createDecipheriv("aes-192-cbc", key, iv);
var res2 = d.update(res1, "hex", "utf-8");
res2 += d.final("utf-8");
console.log("Result of decipheriv : " + res2);
