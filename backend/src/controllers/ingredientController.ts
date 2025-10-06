import { Request, Response } from "express";
import { analyzeIngredients } from "../services/huggingFaceServices.js";
import { allergens } from "../utils/allergenList.js";
import { NERItem } from "../types/ner.js";

export const processLabel = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    const nerResults: NERItem[] = await analyzeIngredients(text);

    const ingredients: string[] = nerResults.map(item => item.entity);

    const flaggedAllergens = ingredients.filter(ing =>
      allergens.includes(ing.toLowerCase())
    );

    res.json({ ingredients, flaggedAllergens });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to analyze ingredients" });
  }
};
