import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config();

const HF_MODEL_URL = 'https://api-inference.huggingface.co/models/nutrivisioncis264/nutrivision-ai';

export interface HuggingFaceResult {
    label: string;
    score: number;
}

export const analyzeIngredients = async (text: string): Promise<HuggingFaceResult[]> => {
    const response = await fetch(HF_MODEL_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.HF_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: text })
    });

    if (!response.ok) {
        throw new Error(`Hugging Face API error: ${response.statusText}`);
    }

    const result = (await response.json()) as HuggingFaceResult[];
    return result;
};
