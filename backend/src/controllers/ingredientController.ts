import { Request, Response } from 'express';
import { Ingredient } from '../models/Ingredient';
import { analyzeIngredients } from '../services/huggingFaceServices';

export const createIngredient = async (req: Request, res: Response) => {
    try {
        const { name, ocrText } = req.body;

        const hfResult = await analyzeIngredients(ocrText);
        const topLabel = hfResult?.[0]?.label || 'unknown';

        const ingredient = await Ingredient.create({
            name,
            ocrText,
            category: topLabel.toLowerCase()
        });

        res.status(201).json(ingredient);
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ error: err.message || 'Failed to create ingredient' });
    }
};

export const getIngredients = async (_req: Request, res: Response) => {
    try {
        const ingredients = await Ingredient.findAll();
        res.json(ingredients);
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ error: err.message || 'Failed to fetch ingredients' });
    }
};
