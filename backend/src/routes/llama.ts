import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const router = express.Router();

router.post("/llama", async (req, res) => {
    try {
        const { text } = req.body;

        const hfRes = await fetch("https://router.huggingface.co/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.LLAMA_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "meta-llama/Llama-3.1-8B-Instruct:novita",
                messages: [{ role: "user", content: text }]
            })
        });

        const data = await hfRes.json();
        res.json(data);
    } catch (err) {
    if (err instanceof Error) {
        res.status(500).json({ error: err.message });
    } else {
        res.status(500).json({ error: String(err) });
    }
}

});

export default router;
