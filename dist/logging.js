"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var console_1 = require("console");
var output = fs_1.default.createWriteStream("C:/Users/pranusha.sivasamy/Documents/GitHub/Node/stuff/stdout.log");
var errorOutput = fs_1.default.createWriteStream("C:/Users/pranusha.sivasamy/Documents/GitHub/Node/stuff/stderr.log");
var logger = new console_1.Console({ stdout: output, stderr: errorOutput });
var num = 5;
logger.log("The number is " + num);
console.assert(true, "Does nothing!!");
console.assert(false, "Assert with false condition"); //Assertion failed: Assert with false condition
console.assert(); //Assertion failde
console.log("\nCOUNT\n      ");
console.count("Hello world");
console.count("Hello world");
console.log("\nCOUNT RESET\n");
console.count("Hello");
console.countReset("Hello");
console.count("Hello");
console.log("\nDEBUG\n      ");
console.debug("Hello world");
console.log("\nDIR\n      ");
var Student = /** @class */ (function () {
    function Student() {
        this.name = "Pranusha";
        this.id = 72;
    }
    return Student;
}());
var student = new Student();
console.dir(student);
console.log("\nERROR\n");
console.error("Error code : 401");
console.log("\nGROUP\n");
console.log("level 1");
console.group();
console.log("level 2");
console.group();
console.log("level 3");
console.groupEnd();
console.log("level 3 end");
console.groupEnd();
console.log("level 2 end");
console.log("\nTABLE\n");
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);
console.log("\nTIME\n");
console.time('100-elements');
for (var i = 0; i < 100; i++) { }
console.timeEnd('100-elements');
console.time("process");
var test = function (x, y) {
    return x + y;
};
var res = test(4, 5);
console.timeLog("process", res);
console.log("\nTRACE\n");
console.trace('Show me');
