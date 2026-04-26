import { Router } from "express";
import { listCollectionItems, getCollectionItem } from "../controllers/systemController.js";

const router = Router();

router.get("/", listCollectionItems("signals"));
router.get("/:id", getCollectionItem("signals"));

export default router;
