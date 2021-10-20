import { spawn } from "child_process";
import dotenv from "dotenv";

dotenv.config();

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
// process.on("SIGHUP",(sig)=>{
//     console.log("Inside sighup : ",sig);
// })

// grep.kill("SIGINT");

console.log("KILLED?? ", grep.killed);

process.on("beforeExit", (code) => {
  console.log("Before exit..", code);
});

// process.on("exit", (code) => {
//   console.log("Exit..", code);
// });

console.log("Starting..");

//revision
//arch
console.log(`arch : ${process.arch}`);

//argv
process.argv.forEach((val, ind) => {
  console.log(`argv : ${ind} : ${val}`);
});

//argv0
console.log(`argv0 : ${process.argv0}`);

//channel
console.log(`channel : ${grep.channel}`); //-----> undefined

//chdir
console.log(`Starting directory: ${process.cwd()}`);
try {
  process.chdir("/tmp");
  console.log(`New directory: ${process.cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}

//config
console.log(
  `config target-default default-configuration : ${process.config.target_defaults.default_configuration}`
);
console.log(
  `config variables host-arch : ${process.config.variables.host_arch}`
);

//connected
console.log(`connected : ${grep.connected}`); // ------>undefined

//cpu usage
console.log(`CPU usage system: ${process.cpuUsage().system}
CPU usage user: ${process.cpuUsage().user}`);

//cwd
console.log(`cwd - current working directory : ${process.cwd()}`);

//emitWarning
console.log(`It is a warning --->`);
process.emitWarning("Something happened", {
  code: "My-warning!!",
  detail: "I have created a warning",
});

//env
console.log(`env : ${process.env.ENV}`);

//execArgv
console.log(`execArgv : ${process.execArgv}`);

//execPath
console.log(`execPath : ${process.execPath}`);

//memory usage
console.log(`Memory usage : ${process.memoryUsage}`);

//pid
console.log(`pid : ${process.pid}`);

//platform
console.log(`platform : ${process.platform}`);

//ppid
console.log(`ppid : ${process.ppid}`);

//release
console.log(`release headersUrl: ${process.release.headersUrl}
release libUrl: ${process.release.libUrl}
release lts: ${process.release.lts}
release name: ${process.release.name}`);

//title
console.log(`title : ${process.title}`);

//uptime
console.log(`uptime : ${process.uptime()}`);

//version
console.log(`version : ${process.version}`);







