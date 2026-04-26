import { Router } from "express";
import { submitIntake } from "../controllers/intakeController.js";

const router = Router();

router.post("/", submitIntake);

export default router;
