import { Router } from "express";
import { listCollectionItems, getCollectionItem } from "../controllers/systemController.js";

const router = Router();

router.get("/", listCollectionItems("ventures"));
router.get("/:id", getCollectionItem("ventures"));

export default router;
