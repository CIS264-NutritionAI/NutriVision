import express from 'express';
import { processLabel } from '../controllers/ocrController.js';

const router = express.Router();

router.post('/analyze-label', processLabel);

export default router;
