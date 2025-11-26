// frontend/src/components/searchAPI.ts
export interface LlamaResponse {
  id?: string;
  object?: string;
  created?: number;
  choices?: Array<{ message: { role: string; content: string } }>;
}

// src/components/searchAPI.ts
export const callAPI = async () => {
  const prompt = "Identify potential toxic ingredients and allergens for: Oreos";

  try {
    const res = await fetch("http://localhost:3000/api/llama", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: prompt }),
    });

    if (!res.ok) throw new Error(`Backend error: ${res.status}`);

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return "Error contacting backend. Make sure your server is running.";
  }
};
