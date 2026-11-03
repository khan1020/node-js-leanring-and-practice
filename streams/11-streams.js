const express = require("express");
const fs = require("fs");
const status = require("express-status-monitor");

const app = express();
app.use(status());

// Route for serving the file
app.get("/", (req, res) => {

    /*
      ==========================
      Avoid reading huge files directly into memory
      ==========================
      The commented-out approach below is BAD for large files:
      
      fs.readFile("100mb-examplefile.txt", "utf-8", (err, data) => {
          if(err){
              console.log(err);
              return res.status(500).send("Error reading file");
          }
          res.send(data); // sends the whole file at once
      });
      
      Why it’s bad: 
      - The entire file is loaded into RAM first → memory inefficient for huge files
      - Can block the event loop → server becomes unresponsive
      - Can crash server for very large files
    */

    /*
      ==========================
      Best approach: use streams
      ==========================
      fs.createReadStream() reads the file in chunks.
      Each chunk can be sent immediately to the client with res.write() or via .pipe().
      This is memory-efficient and keeps the server responsive.
    */

    // ----------------------
    // Simplest, optimal way:
    // ----------------------
    // Using .pipe() sends the file directly to the response
    // - Automatically writes chunks
    // - Automatically ends the response when done
    // - Handles backpressure (client slow/fast) automatically
    // - Most recommended for production
    fs.createReadStream("100mb-examplefile.txt").pipe(res);

    /*
      ----------------------
      Other options explained:
      ----------------------
      
      1. res.send(data)
        - High-level Express method
        - Sends entire response at once
        - Automatically sets headers and ends the response
        - Good for small files, APIs, HTML, JSON
        - NOT suitable for huge files
      
      2. res.write(chunk)
        - Low-level method
        - Sends a chunk of data immediately
        - Does NOT end the response
        - Useful for streaming large files or real-time updates
      
      3. res.end([chunk])
        - Ends the response
        - Can optionally send the last chunk
        - Must be called after res.write() when streaming
        - If using res.send(), you don't need res.end()
      
      4. Using .pipe() (as above)
        - Combines res.write + res.end automatically
        - Handles backpressure automatically
        - Cleanest way to stream files
    */

    /*
      ----------------------
      Optional: manual chunk handling
      ----------------------
      If you want to add headers or extra formatting per chunk:
      let i = 1;
      const stream = fs.createReadStream("100mb-examplefile.txt", { encoding: "utf-8" });
      stream.on("data", chunk => {
          res.write(`<h1 style="color: red"> chunk ${i}</h1>`);
          res.write(chunk);
          i++;
      });
      stream.on("end", () => res.end());
      // Note: this is fine for learning, but .pipe() is simpler for production
    */

});

app.listen(5000, () => {
    console.log("server listening on port 5000");
});
