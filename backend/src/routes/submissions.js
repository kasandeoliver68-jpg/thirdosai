import { Router } from "express";
import { listCollectionItems, getCollectionItem } from "../controllers/systemController.js";

const router = Router();

router.get("/", listCollectionItems("submissions"));
router.get("/:id", getCollectionItem("submissions"));

export default router;
