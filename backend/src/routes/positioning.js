import { Router } from "express";
import { listCollectionItems, getCollectionItem } from "../controllers/systemController.js";

const router = Router();

router.get("/", listCollectionItems("positioningDocuments"));
router.get("/:id", getCollectionItem("positioningDocuments"));

export default router;
