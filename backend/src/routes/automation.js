import { Router } from "express";
import { listCollectionItems, getCollectionItem, dashboardSummary } from "../controllers/systemController.js";

const router = Router();

router.get("/", listCollectionItems("automationRuns"));
router.get("/summary", dashboardSummary);
router.get("/:id", getCollectionItem("automationRuns"));

export default router;
