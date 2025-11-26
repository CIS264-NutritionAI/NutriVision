import React, { useState } from "react";

const Search = () => {
    const [name, setName] = useState("");
    const [output, setOutput] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return alert("Please enter a valid food name");

        const res = await fetch("http://localhost:5000/api/llama", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                text: `Identify potential toxic ingredients and allergens for: ${name}`
            }),
        });

        const data = await res.json();
        setOutput(JSON.stringify(data, null, 2));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Enter a food item..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <pre>{output}</pre>
        </div>
    );
};

export default Search;
