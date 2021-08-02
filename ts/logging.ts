import fs from "fs";
import { Console } from "console";

const output = fs.createWriteStream(
  "C:/Users/pranusha.sivasamy/Documents/GitHub/Node/stuff/stdout.log"
);
const errorOutput = fs.createWriteStream(
  "C:/Users/pranusha.sivasamy/Documents/GitHub/Node/stuff/stderr.log"
);
const logger = new Console({ stdout: output, stderr: errorOutput });

const num = 5;
logger.log(`The number is ${num}`);

console.assert(true, "Does nothing!!");
console.assert(false, "Assert with false condition"); //Assertion failed: Assert with false condition
console.assert(); //Assertion failde

console.log(`
COUNT
      `);

console.count("Hello world");
console.count("Hello world");

console.log(`
COUNT RESET
`);

console.count("Hello");
console.countReset("Hello");
console.count("Hello");

console.log(`
DEBUG
      `);

console.debug("Hello world");

console.log(`
DIR
      `);
class Student {
  name: string = "Pranusha";
  id: number = 72;
}
const student = new Student();
console.dir(student);

console.log(`
ERROR
`);
console.error(`Error code : 401`);

console.log(`
GROUP
`);
console.log("level 1");
console.group();
console.log("level 2");
console.group();
console.log("level 3");
console.groupEnd();
console.log("level 3 end");
console.groupEnd();
console.log("level 2 end");

console.log(`
TABLE
`);
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);

console.log(`
TIME
`);
console.time('100-elements');
for (let i = 0; i < 100; i++) {}
console.timeEnd('100-elements');

console.time("process");
const test=(x:number,y:number)=>{
    return x+y;
}
const res=test(4,5);
console.timeLog("process",res);

console.log(`
TRACE
`);
console.trace('Show me');