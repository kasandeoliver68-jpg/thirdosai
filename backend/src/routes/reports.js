import { Router } from "express";
import { listCollectionItems, getCollectionItem } from "../controllers/systemController.js";

const router = Router();

router.get("/", listCollectionItems("reports"));
router.get("/:id", getCollectionItem("reports"));

export default router;
