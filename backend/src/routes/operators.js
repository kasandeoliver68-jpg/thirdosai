import { Router } from "express";
import { listCollectionItems, getCollectionItem } from "../controllers/systemController.js";

const router = Router();

router.get("/", listCollectionItems("operators"));
router.get("/:id", getCollectionItem("operators"));

export default router;
