import { Router } from "express";
import { listApprovals, updateApproval } from "../controllers/approvalController.js";

const router = Router();

router.get("/", listApprovals);
router.patch("/:id", updateApproval);

export default router;
