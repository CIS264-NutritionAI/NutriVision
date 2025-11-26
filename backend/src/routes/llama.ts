// backend/src/llama.ts
import express from "express";
import fetch from "node-fetch"; // or global fetch if Node >= 18
const router = express.Router();

interface LlamaRequest {
  text: string;
}

router.post("/", async (req, res) => {
  const { text } = req.body as LlamaRequest;
  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  try {
    const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/Llama-3.1-8B-Instruct:novita",
        messages: [{ role: "user", content: text }],
      }),
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch from Hugging Face" });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
