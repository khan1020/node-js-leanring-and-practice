// ==========================
// Node.js Globals & Module Exports (Short Version)
// ==========================

/*
  __dirname   - Current folder path
  __filename  - This file's full path
  require     - Import modules (CommonJS)
  module      - Info about this module, attach exports here
  process     - Environment info (OS, Node version, etc.)
*/

var name = "Afzal";
// console.log(process); // Spy on environment if curious 😎

// --------------------------
// Arrow Function Example
// --------------------------
const students = (student) => console.log("Hello, dear " + student);
students("Asad"); // Test run

// --------------------------
// Module Exports
// --------------------------
const animal = "Lion";

// Multiple exports via object
module.exports = { students, animal };

// Usage in another file:
// const { students, animal } = require('./thisFile');
// students("Afzal");  // Hello, dear Afzal
// console.log(animal); // Lion

// Reviewed Node runtime event loop architecture on v20 LTS

// Node globals: __dirname and __filename provide absolute paths
