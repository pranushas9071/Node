"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var grep = child_process_1.spawn("dir");
grep.stdout.on("data", function (data) {
    console.log("Received chunk : ", data.toString());
});
grep.stderr.on("data", function (data) {
    console.log("stderr : " + data);
});
grep.on("close", function (code, sig) {
    if (sig) {
        console.log("The child_process has been terminated because of " + sig);
        console.log("Signal received : ", grep.signalCode);
    }
    else {
        console.log("Done..");
    }
});
grep.on("error", function (err) {
    console.log("Child process is not terminated!! with " + err.message);
});
console.log("PID : ", grep.pid);
console.log("args : ", grep.spawnargs);
console.log("files : ", grep.spawnfile);
// console.log("stream : ", grep.stderr);//???
process.on("SIGHUP", function (sig) {
    console.log("Inside sighup : ", sig);
});
// grep.kill("SIGINT");
console.log("KILLED?? ", grep.killed);
process.on("beforeExit", function (code) {
    console.log("Before exit..", code);
});
// process.on("exit", (code) => {
//   console.log("Exit..", code);
// });
console.log("Starting..");
