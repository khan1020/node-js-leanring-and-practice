// ==========================
// Node.js Module Import Example
// ==========================

// --------------------------
// Purpose of this module
// --------------------------
// This file demonstrates importing another module (./intro#1) 
// and using its exported functions and variables.
// Main goal: share only what’s necessary and keep other data safe.
// Basically, don’t show your secret cookie recipe to everyone 🍪

// Importing the module we exported earlier
// Use the relative path (dot notation) to reach the file
const moduules = require('./1-intro.js'); // make sure the path matches your file structure exactly

// Calling the students function from the imported module
// The function was exported, so we can now greet students without rewriting the function
moduules.students("Afzal");
moduules.students("Yameen");
moduules.students("Sajid");
moduules.students("Javed");

// Accessing other exported data from the module
// The 'animal' variable was exported, so we can now use it here
console.log(moduules.animal); // Lion (yes, we are still in the jungle 🦁)

