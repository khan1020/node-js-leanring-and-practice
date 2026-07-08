// ==========================
// Node.js OS Module Example
// ==========================

// The OS module gives info about your computer.  
// Think of it as Node checking “What kind of beast am I running on?” 🖥️
const os = require('os');

// Helper function to print OS info neatly
// value  -> the data from OS module
// str    -> description of what the data is
let myOsData = (value, str) => {
    console.log(`${str} of my system is/are `, value);
};

// --------------------------
// Getting system info
// --------------------------

// Total memory in GB
myOsData(os.totalmem() / 1024 / 1024 / 1024, "Total memory in GB");

// Free memory in GB
myOsData(os.freemem() / 1024 / 1024 / 1024, "Free memory in GB");

// CPU details (array of objects, one per CPU)

myOsData(os.cpus(), "Total CPUs & details");

// OS type (e.g., 'Windows_NT', 'Linux', 'Darwin')
myOsData(os.type(), "OS Type");

// Hostname of the system
myOsData(os.hostname(), "Host Name");

// Platform (e.g., 'win32', 'linux', 'darwin')
myOsData(os.platform(), "Platform");

// OS release version
myOsData(os.release(), "Release Version");

// System uptime in seconds (how long the system has been awake)
myOsData(os.uptime(), "Up Time (seconds)");

// Info about current user
myOsData(os.userInfo(), "User Info");

// ==========================
// Notes & Humour
// ==========================
// - os.totalmem() and os.freemem() are in bytes, so we divide by 1024^3 for GB
// - os.cpus() gives an array; don't panic, Node is just showing off its cores 😅
// - Everything else is self-explanatory; Node likes to brag about your system
