import { spawn } from "child_process";

const grep = spawn("dir");

grep.stdout.on("data", (data) => {
  console.log("Received chunk : ", data.toString());
});

grep.stderr.on("data", (data) => {
  console.log(`stderr : ${data}`);
});

grep.on("close", (code, sig) => {
  if (sig) {
    console.log(`The child_process has been terminated because of ${sig}`);
    console.log("Signal received : ", grep.signalCode);
  } else {
    console.log("Done..");
  }
});

grep.on("error", (err) => {
  console.log(`Child process is not terminated!! with ${err.message}`);
});

console.log("PID : ", grep.pid);

console.log("args : ", grep.spawnargs);

console.log("files : ", grep.spawnfile);

// console.log("stream : ", grep.stderr);//???
process.on("SIGHUP",(sig)=>{
    console.log("Inside sighup : ",sig);
})

// grep.kill("SIGINT");

console.log("KILLED?? ", grep.killed);

process.on("beforeExit", (code) => {
  console.log("Before exit..", code);
});

// process.on("exit", (code) => {
//   console.log("Exit..", code);
// });

console.log("Starting..");
