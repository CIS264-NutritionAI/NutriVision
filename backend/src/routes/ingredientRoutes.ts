import { Router } from "express";
import { processLabel } from "../controllers/ingredientController.js";

const router = Router();

router.post("/analyze", processLabel);

export default router;
