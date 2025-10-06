import { Request, Response } from 'express';
import { analyzeIngredients } from '../services/huggingFaceServices.js';

export const processLabel = async (req: Request, res: Response): Promise<void> => {
  try {
    const ocrText: string = req.body.text; 
    const analysis = await analyzeIngredients(ocrText);
    res.json({ text: ocrText, analysis });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to analyze ingredients' });
  }
};
