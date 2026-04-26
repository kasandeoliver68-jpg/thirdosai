import { Router } from "express";
import { listCollectionItems, getCollectionItem } from "../controllers/systemController.js";

const router = Router();

router.get("/", listCollectionItems("intelligenceBriefs"));
router.get("/:id", getCollectionItem("intelligenceBriefs"));

export default router;
