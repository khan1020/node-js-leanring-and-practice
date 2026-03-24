// ==========================
// Node.js PATH Module Exercises
// ==========================

// First things first, we require the path module.
// It's like the GPS for your files – tells you exactly where everything lives.
const path = require('path');


// --------------------------
// path.basename()
// --------------------------
// Returns the last portion of a path, aka the file name.
// Optional second parameter lets you strip the extension like magic.
console.log(path.basename("C:\\Users\\AfzalTAS\\Desktop\\node js\\6-OS module.js"));        // "6-OS module.js"
console.log(path.basename("C:\\Users\\AfzalTAS\\Desktop\\node js\\6-OS module.js", ".js")); // "6-OS module" (extension politely removed)


// --------------------------
// path.dirname()
// --------------------------
// Returns the directory name of a path. 
// Basically, it’s like asking: "Yo path, where do you live?"
console.log(path.dirname("C:\\Users\\AfzalTas\\Desktop\\node js\\6-OS module.js")); // "\Desktop\node js" (home sweet home)


// --------------------------
// path.extname()
// --------------------------
// Returns the extension of a file, from the last '.' to the end.
// If a file is a wannabe superhero, this tells you its secret identity (extension).
console.log(path.extname("6-OS module.js")); // ".js" (aka the superhero cape)


// --------------------------
// path.format()
// --------------------------
// Converts a path object into a nicely formatted path string.
// The path object can have these keys: root, dir, base, name, ext
// Quick reminders (aka cheat notes):
/*
  root: The root of the path, e.g., '/' or 'C:\'
  dir:  Full directory path, e.g., 'C:\Users\Afzal\Desktop'
  base: File name with extension, e.g., 'index.html'
  name: File name without extension, e.g., 'index'
  ext:  File extension, e.g., '.html'

  ⚠️ Notes:
  - pathObject.root is ignored if dir exists
  - pathObject.ext and name are ignored if base exists
  - PathObject.base is used then name, ext ignored
*/





const myConfiguredFile = path.format({
    root: 'C:\\',                        // Root of the drive, where all roads start
    dir: '\\Users\\AfzalTAS\\Desktop\\node js',  // Directory path, your cozy file neighborhood
    base:'6-OS module.js',               // File name with extension (overrides name & ext)
    ext:'.js',                           // File extension, politely ignored because base exists
    name:"6-OS module"                   // File name without extension, also ignored because base exists
});
console.log(myConfiguredFile);           // Outputs full path nicely formatted


// --------------------------
// path.join()
// --------------------------
// Joins multiple path segments into one string, normalizes it, and ignores zero-length segments.
// It’s like duct-taping your folders together without worrying about messy slashes.
const pathJoin = path.join("C:", "Users", "afzalTasleem", "Desktop", "Node js", "app.js ");
console.log(`path.join is used here ${pathJoin}`);                   // Windows-friendly path string

// path.parse() - breaks a path string into an object with root, dir, base, ext, name (breaks in path.fromat)
console.log("path.parse is used in this", path.parse(pathJoin));

// path.sep - platform-specific path separator, e.g., '\' on Windows, '/' on Linux/Mac
// Splitting a path using path.sep gives all folder segments in an array


console.log(pathJoin.split(path.sep));    // ["C:", "Users", "afzalTasleem", "Desktop", "Node js", "app.js "]


// Note: path.normalize handles inconsistent trailing delimiters
