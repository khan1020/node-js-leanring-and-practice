// EventEmitter pattern practice: File processing & upload notification pipeline

const EventEmitter = require("events");

class FileProcessor extends EventEmitter {
  constructor() {
    super();
  }

  process(fileName, fileSizeKb) {
    this.emit("start", { fileName, fileSizeKb, initiatedAt: new Date() });

    let progress = 0;
    const interval = setInterval(() => {
      progress += 25;
      this.emit("progress", { fileName, percent: progress });

      if (progress >= 100) {
        clearInterval(interval);
        this.emit("completed", {
          fileName,
          status: "SUCCESS",
          completedAt: new Date()
        });
      }
    }, 200);
  }
}

// Handler demonstration
const processor = new FileProcessor();

processor.on("start", (data) => {
  console.log(`[Task Started] Processing file '${data.fileName}' (${data.fileSizeKb} KB)...`);
});

processor.on("progress", (data) => {
  console.log(`[Processing] ${data.fileName}: ${data.percent}%`);
});

processor.on("completed", (data) => {
  console.log(`[Task Finished] File '${data.fileName}' successfully processed.`);
});

processor.process("student_records_export.csv", 480);

module.exports = FileProcessor;
