import cors from "cors";
import express from "express";
import authRoutes from "./routes/auth.js";
import intakeRoutes from "./routes/intake.js";
import submissionsRoutes from "./routes/submissions.js";
import signalsRoutes from "./routes/signals.js";
import intelligenceRoutes from "./routes/intelligence.js";
import automationRoutes from "./routes/automation.js";
import venturesRoutes from "./routes/ventures.js";
import positioningRoutes from "./routes/positioning.js";
import capitalRoutes from "./routes/capital.js";
import knowledgeRoutes from "./routes/knowledge.js";
import operatorsRoutes from "./routes/operators.js";
import approvalsRoutes from "./routes/approvals.js";
import reportsRoutes from "./routes/reports.js";
import notificationsRoutes from "./routes/notifications.js";
import { errorHandler } from "./middleware/errorHandler.js";

export function createApp() {
  const app = express();
  const allowedOrigin = process.env.CORS_ORIGIN ?? "http://localhost:5173";

  app.use(cors({ origin: allowedOrigin, credentials: true }));
  app.use(express.json({ limit: "2mb" }));

  app.get("/api/health", (_request, response) => {
    response.json({ ok: true, service: "thirdspace-ai-os-backend" });
  });

  app.use("/api/auth", authRoutes);
  app.use("/api/intake", intakeRoutes);
  app.use("/api/submissions", submissionsRoutes);
  app.use("/api/signals", signalsRoutes);
  app.use("/api/intelligence", intelligenceRoutes);
  app.use("/api/automation", automationRoutes);
  app.use("/api/ventures", venturesRoutes);
  app.use("/api/positioning", positioningRoutes);
  app.use("/api/capital", capitalRoutes);
  app.use("/api/knowledge", knowledgeRoutes);
  app.use("/api/operators", operatorsRoutes);
  app.use("/api/approvals", approvalsRoutes);
  app.use("/api/reports", reportsRoutes);
  app.use("/api/notifications", notificationsRoutes);

  app.use((_request, response) => {
    response.status(404).json({ message: "Route not found" });
  });

  app.use(errorHandler);

  return app;
}
