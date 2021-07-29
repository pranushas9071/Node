import * as os from "os";
console.log(os.arch()); // architcture--> x64
console.log(os.cpus()); //cpu info
console.log(os.freemem()); // no of bytes in free memory
console.log(os.homedir()); // home directory
console.log(os.hostname()); // host name-->asplapr225
console.log(os.loadavg()); // meaningful value only in linux and mac
console.log(os.networkInterfaces()); // network -- wifi....
console.log(os.platform()); // in which node.js has been compiled--> win32
console.log(os.release()); //release of od
console.log(os.tmpdir()); // ??
console.log(os.totalmem()); // no of bytes in total memory
console.log(os.type()); // linux or windows...
console.log(os.uptime()); // no of seconds that the system is running from the last reboot
console.log(os.userInfo()); // info f user
console.log(os.endianness()); // LE or BE --> LE  ????
