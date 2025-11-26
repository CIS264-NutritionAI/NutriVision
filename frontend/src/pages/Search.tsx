// frontend/src/components/Search.tsx
import React, { useState, useEffect } from "react";
import { callAPI } from "../components/searchAPI";

const Search: React.FC = () => {
  const [output, setOutput] = useState<string>("");

  // Call API for Oreos on mount
  useEffect(() => {
    callAPI().then((result) => setOutput(result));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form is now just for UI; API always queries Oreos
    alert("Information for Oreos is automatically loaded!");
  };

  return (
    <div className="relative w-full overflow-hidden tracking-wide font-peppermint bg-cream min-h-screen flex flex-col items-center pt-12">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center pt-12">
        Search a food
      </h1>
      <h3 className="text-sm sm:text-md md:text-lg lg:text-xl text-left justify-center py-12 mx-6 sm:mx-20">
        Don't have a food label to scan? No problem. Information for Oreos is displayed below:
      </h3>

      <div className="flex flex-col justify-center items-center w-1/2">
        <form className="bg-cream p-8 rounded-xl shadow-md w-80" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-center">Search</h2>
          <input
            type="text"
            placeholder="Enter a food item..."
            className="w-full p-2 mb-3 border rounded"
            disabled
          />
          <button
            type="submit"
            className="w-full bg-matcha text-cream py-2 rounded hover:bg-green-600 transition"
          >
            Search
          </button>
        </form>

        <pre className="mt-6 p-4 w-80 bg-white rounded shadow-md whitespace-pre-wrap">
          {output || "(loading...)"}
        </pre>
      </div>
    </div>
  );
};

export default Search;
