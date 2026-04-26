import { Router } from "express";
import { listCollectionItems, getCollectionItem } from "../controllers/systemController.js";

const router = Router();

router.get("/", listCollectionItems("notifications"));
router.get("/:id", getCollectionItem("notifications"));

export default router;
