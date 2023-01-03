const os = require('os');

//1KB= 1024 bytes
//1MB= 1024 KB
//1GB=1024 MB

console.log("Total memory", os.totalmem());
console.log("Free memory", os.freemem());
console.log("version", os.version());
console.log("CPU", os.cpus());