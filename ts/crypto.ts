import crypto from "crypto";

const secret = "abcdefg";
//hmac........................................................................
const res = crypto
  .createHmac("sha256", secret)
  .update("Hello world")
  .digest("hex");
console.log(`Result for Hmac : ${res}`);

//hash........................................................................
const hash = crypto.createHash("sha256").update("Hello world").digest("hex");
console.log(`Result for hash : ${hash}`);

//cipher.......................................................................
const buff = Buffer.from("Hello");
let cipher = crypto.createCipher("aes-192-gcm", secret);
cipher.setAAD(buff);
let encrypted = cipher.update("Hello world".toString(), "utf-8", "hex");
cipher.setAutoPadding();
encrypted += cipher.final("hex");
console.log(`Result for cipher : ${encrypted}`);
console.log(cipher.getAuthTag());

//decipher..........................................................................
let decipher = crypto.createDecipher("aes192", secret);
const encrypt = "0e30f802c8f5ef09ca0f834674f61695";
let decrypted = decipher.update(encrypt, "hex", "utf-8");
decrypted += decipher.final("utf-8");
console.log(`Result for decryption : ${decrypted}`);

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

const key = crypto.scryptSync("Pass", "salt", 24);
let iv = Buffer.alloc(16, 0);
let e = crypto.createCipheriv("aes-192-cbc", key, iv);
let res1 = e.update("Hello world", "utf-8", "hex");
res1 += e.final("hex");
console.log(`Result for cipheriv : ${res1}`);
//DiffieHellman....................................................................
// const hellman = crypto.createDiffieHellman(2048);
// const hellmanKey = hellman.generateKeys();

// const bob=crypto.createDiffieHellman(hellman.getPrime(),hellman.getGenerator())

// let k = crypto.createPublicKey("Pranusha");
// console.log(`Public key : ${k}`);
