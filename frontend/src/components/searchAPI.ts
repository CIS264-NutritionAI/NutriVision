export const callAPI = async (): Promise<string> => {
	return "callAPI function is disabled until you add your own API key";
//   const paragraph = document.getElementById("text-input") as HTMLInputElement | null;
//   const output = document.getElementById("text-output") as HTMLParagraphElement | null;


//   if (!paragraph) return "No input found";


//   const text = `Identify potential toxic ingredients and allergens for: ${paragraph.value}`;


//   try {
//     const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer <api-key>>`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         messages: [{ role: "user", content: text }],
//         model: "meta-llama/Llama-3.1-8B-Instruct:novita",
//       }),
//     });


//     if (!response.ok) throw new Error(`API error: ${response.status}`);


//     const data = await response.json();


//     const assistantContent =
//       data?.choices?.[0]?.message?.content ?? "No response from assistant";


//     if (output) output.innerText = assistantContent;


//     return assistantContent;
//   } catch (err: any) {
//     console.error(err);
//     if (output) output.innerText = "Error contacting API. Check console.";
//     return "Error contacting API";
//   }
};


