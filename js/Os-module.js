import * as os from "os";
console.log(`arch : ${os.arch()}`); // architcture--> x64
console.log(`cpus : ${os.cpus()}`); //cpu info
console.log(`freemem : ${os.freemem()}`); // no of bytes in free memory
console.log(`homedir : ${os.homedir()}`); // home directory
console.log(`hostname : ${os.hostname()}`); // host name-->asplapr225
console.log(`loadavg : ${os.loadavg()}`); // meaningful value only in linux and mac
console.log(`nteworkInterfaces : ${os.networkInterfaces()}`); // network -- wifi....
console.log(`platform : ${os.platform()}`); // in which node.js has been compiled--> win32
console.log(`release : ${os.release()}`); //release of od
console.log(`tmpdir : ${os.tmpdir()}`); // ??
console.log(`totalmem : ${os.totalmem()}`); // no of bytes in total memory
console.log(`type : ${os.type()}`); // linux or windows...
console.log(`uptime : ${os.uptime()}`); // no of seconds that the system is running from the last reboot
console.log(`userInfo : ${os.userInfo()}`); // info f user
console.log(`endianness : ${os.endianness()}`); // LE or BE --> LE  ????
