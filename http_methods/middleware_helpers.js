// Custom Logging and Performance Measurement Middleware for Express.js

const requestLogger = (req, res, next) => {
  const startTime = Date.now();
  const timestamp = new Date().toISOString();

  // Hook into response finish event to calculate elapsed processing time
  res.on("finish", () => {
    const duration = Date.now() - startTime;
    const statusCode = res.statusCode;
    const color = statusCode >= 400 ? "\x1b[31m" : "\x1b[32m";
    const reset = "\x1b[0m";

    console.log(
      `[${timestamp}] ${req.method} ${req.originalUrl || req.url} - ${color}${statusCode}${reset} (${duration}ms)`
    );
  });

  next();
};

const apiKeyAuth = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.SERVICE_API_KEY) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid or missing API key header."
    });
  }
  next();
};

module.exports = { requestLogger, apiKeyAuth };
