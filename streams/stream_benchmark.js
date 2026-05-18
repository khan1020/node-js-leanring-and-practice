// Performance benchmarking utility: Stream Piping vs Buffer memory consumption

const fs = require("fs");
const path = require("path");

function benchmarkMemoryUsage() {
  const mem = process.memoryUsage();
  return {
    rssMb: (mem.rss / 1024 / 1024).toFixed(2),
    heapUsedMb: (mem.heapUsed / 1024 / 1024).toFixed(2),
    heapTotalMb: (mem.heapTotal / 1024 / 1024).toFixed(2)
  };
}

console.log("[Baseline Memory]", benchmarkMemoryUsage());

// Stream transformation demonstration
const inputPath = path.join(__dirname, "100mb-examplefile.txt");
const outputPath = path.join(__dirname, "stream_output_copy.txt");

if (fs.existsSync(inputPath)) {
  const readStream = fs.createReadStream(inputPath, { highWaterMark: 64 * 1024 });
  const writeStream = fs.createWriteStream(outputPath);

  let totalChunks = 0;
  readStream.on("data", (chunk) => {
    totalChunks++;
  });

  readStream.pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(`[Stream Complete] Transferred ${totalChunks} chunks safely.`);
    console.log("[Final Memory]", benchmarkMemoryUsage());

    // Clean up temporary test output
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }
  });
} else {
  console.log("[Notice] Input file not found, skipping benchmark run.");
}
