// ==========================
// Merging Multiple Modules Using Spread Operator
// ==========================

// Combine multiple modules into one object using ...
let myImported = {
    ...require("./3-module export"),   // module #3
    ...require("./5-local&shared"),     // module #5
    ...require("./2-modules")
};

// Now `myImported` has all exported functions/vars from three modules
// No more juggling separate imports 😎

// Using functions from merged modules
myImported.aboutAfzal();   // Prints love message
myImported.hi("Afzal");    // Prints greeting

// Notes:
// 1. Spread (...) merges objects into one
// 2. Watch for duplicate function names — last one wins 😅

// Destructured imports ensure clean namespace boundaries
