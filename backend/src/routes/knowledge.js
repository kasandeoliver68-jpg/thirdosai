import { Router } from "express";
import { searchKnowledge } from "../controllers/systemController.js";
import { listCollectionItems } from "../controllers/systemController.js";

const router = Router();

router.get("/", searchKnowledge);
router.get("/all", listCollectionItems("knowledgeItems"));

export default router;
