import "dotenv/config";
import { createApp } from "./app.js";

const port = Number.parseInt(process.env.PORT ?? "4000", 10);
const app = createApp();

// Global handlers to surface uncaught errors in logs (helps diagnose serverless failures)
process.on("unhandledRejection", (reason, promise) => {
  try {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
  } catch (e) {
    /* ignore logging failures */
  }
});

process.on("uncaughtException", (err) => {
  try {
    console.error("Uncaught Exception:", err && err.stack ? err.stack : err);
  } catch (e) {
    /* ignore logging failures */
  }
  // Do not swallow uncaught exceptions in long-running processes; allow process to exit.
  // In Vercel serverless environments each invocation is short-lived; logging helps trace the issue.
});

app.listen(port, () => {
  console.log(`ThirdSpace AI OS backend listening on http://localhost:${port}`);
});
