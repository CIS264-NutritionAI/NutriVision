/*
import dotenv from 'dotenv';
dotenv.config();
*/

export const callAPI = () => {
    console.log("callAPI. Hello World!");
/*
    const paragraph = document.getElementById('text-input') as HTMLInputElement | null;
	const output = document.getElementById('text-output') as HTMLParagraphElement | null;
	if(paragraph){
		const text: string = "Identify potential toxic ingredients and allergens:" + paragraph.value ;
		console.log('=========================================')
    	console.log("text",text);
    	console.log('=========================================')


		async function query(data) {
		const response = await fetch(
			"https://router.huggingface.co/v1/chat/completions",
			{
				headers: {
					Authorization: `Bearer {API_KEY}`,
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(data),
			}
		);
		const result = await response.json();
		return result;
		}

		query({ 
			messages: [
				{
					role: "user",
					content: text,
				},
			],
			model: "meta-llama/Llama-3.1-8B-Instruct:novita",
		}).then((response) => {
			console.log(JSON.stringify(response));
			
			//if(output){
			//	output.innerHTML = response[0]?.generated_text ?? "";
			//}
				
			output.innerHTML = JSON.stringify(response, null, 2);
		});


}

*/


   


}
