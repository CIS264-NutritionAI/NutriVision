import axios from "axios";
import dotenv from "dotenv";
import { NERItem } from "../types/ner.js";
dotenv.config();

const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;

export const analyzeIngredients = async (text: string): Promise<NERItem[]> => {
  const response = await axios.post(
    "https://api-inference.huggingface.co/models/Dizex/FoodBaseBERT-NER",
    { inputs: text },
    {
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data as NERItem[];
};
