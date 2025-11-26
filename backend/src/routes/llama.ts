import express, { Request, Response } from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    const { text } = req.body;

    try {
        const response = await fetch(
            "https://router.huggingface.co/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.LLAMA_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: [{ role: "user", content: text }],
                    model: "meta-llama/Llama-3.1-8B-Instruct:novita",
                }),
            }
        );

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "API error" });
    }
});

export default router;
