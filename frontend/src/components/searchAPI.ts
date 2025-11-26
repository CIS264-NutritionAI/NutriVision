export const callAPI = async (input: string): Promise<string> => {
  const text = `Identify potential toxic ingredients and allergens for: ${input}`;

  try {
    const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.LLAMA_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: text }],
        model: "meta-llama/Llama-3.1-8B-Instruct:novita",
      }),
    });

    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    const assistantContent = data?.choices?.[0]?.message?.content ?? "No response from assistant";
    return assistantContent;
  } catch (err: any) {
    console.error(err);
    return "Error contacting API";
  }
};
