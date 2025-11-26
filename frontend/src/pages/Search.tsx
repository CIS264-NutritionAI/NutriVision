import React, { useState } from "react";
import { callAPI } from "../components/searchAPI";

const Search = () => {
    const [name, setName] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name.trim() === "") {
            alert("Please enter a valid food name");
            return;
        }
        callAPI(name);
    };

    return (
        <div className="relative w-full overflow-hidden tracking-wide font-peppermint bg-cream">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl pt-12 text-center">
                search a food.
            </h1>
            <h3 className="text-sm sm:text-md md:text-lg lg:text-xl text-center justify-center py-12 mx-6 sm:mx-20">
                don't have a food label to scan? no problem. search for it below:
            </h3>

            <div className="flex flex-col justify-center items-center">
                <form
                    className="bg-cream p-8 rounded-xl shadow-md w-80"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Search</h2>

                    <input
                        id="text-input"
                        type="text"
                        placeholder="Enter a food item..."
                        className="w-full p-2 mb-3 border rounded"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-matcha text-cream py-2 rounded hover:bg-green-600 transition"
                    >
                        Search
                    </button>
                </form>

                <p id="text-output">(output)</p>
            </div>
        </div>
    );
};

export default Search;
