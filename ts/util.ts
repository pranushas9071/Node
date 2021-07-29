import util from "util";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

//format...........................................................
let aString = "Hello,  I am %s";
let res = util.format(aString, "Pranusha");
console.log(`Using util format : ${res}`);

let str = "The object is %o";
let res2 = util.formatWithOptions({ colors: true }, str, { foo: 72 });
console.log(`Using util formatwithoption : ${res2}`);

//inspect with colors..............................................
console.log(util.inspect({ x: 100, y: "y" }, false, 2, true));

//callbackify......................................................
const fn = async () => "hello world";

const callbackFunction = util.callbackify(fn);
callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});

//debuglog...........................................................
const dbug = util.debuglog("foo1");
const dbug2 = util.debuglog("foo2");
dbug("Good morning1!!");
dbug("Good morning2!!");
dbug2("welcome1..");
dbug2("welcome2..");
util.debuglog("foo")

console.log("Env : ",process.env.NODE_DEBUG);

//debuglog().enabled..................................................
// const d=util.debuglog("foo").enabled;//??

//deprecate..........................................................
const myfunc = () => {
  console.log("Inside Deprecated function!!");
};
const fn1 = util.deprecate(myfunc, "Using a Deprecated function", "DEP0012");
fn1();

//SystemErrorName and map .....................................................
fs.access("file/that/does/not/exist", (err) => {
    // util.getSystemErrorName(err.errno);
  const errorMap = util.getSystemErrorMap();
  console.log("Inside SystemErrorMap : ", err?.errno);
  const name = errorMap.get(err?.errno || 0);
  console.error(name);
});
