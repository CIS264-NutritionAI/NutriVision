export const callAPI = (search: string) => {
    const output = document.getElementById('text-output') as HTMLParagraphElement | null;
    if (!output) return;

    async function query(search: string) {
        const response = await fetch("http://localhost:5000/api/llama", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ search }), 
        });

        return response.json();
    }

    query(search).then((response) => {
        output.innerHTML = JSON.stringify(response, null, 2);
    });
};
