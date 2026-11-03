const maths =require("./1-math/mathie")
// console.log(maths.square(2));
console.log(maths.divide())


const os = require('os');
const path = require('path');

// Get command-line argument (e.g., a file path)
const inputPath = process.argv[2] || './snapshot.txt';
console.log(inputPath);

// Normalize and resolve the path
const normalizedPath = path.normalize(inputPath);
console.log(normalizedPath);

const absolutePath = path.resolve(normalizedPath);
console.log(absolutePath);

// Gather system info
const systemInfo = {
  username: os.userInfo().username,
  platform: os.platform(),
  architecture: os.arch(),
  cpuCount: os.cpus().length,
  totalMemoryMB: (os.totalmem() / (1024 * 1024)).toFixed(2),
  uptimeMinutes: (os.uptime() / 60).toFixed(2),
};

// Display snapshot
console.log(`🖥️ System Snapshot for ${systemInfo.username}`);
console.log(`----------------------------------------`);
console.log(`Platform       : ${systemInfo.platform}`);
console.log(`Architecture   : ${systemInfo.architecture}`);
console.log(`CPU Cores      : ${systemInfo.cpuCount}`);
console.log(`Total Memory   : ${systemInfo.totalMemoryMB} MB`);
console.log(`Uptime         : ${systemInfo.uptimeMinutes} minutes`);
console.log(`Resolved Path  : ${absolutePath}`);
