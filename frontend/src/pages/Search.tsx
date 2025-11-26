import React, { useState } from "react";
import { callAPI } from "../components/searchAPI";

const Search: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter a valid food name");
      return;
    }

    const result = await callAPI(name);
    setOutput(result);
  };

  const renderOutput = () => {
    if (!output) return <p className="text-gray-400">(output)</p>;

    return output.split("\n").map((line, idx) => {
      if (line.startsWith("1.") || line.startsWith("**") || line.includes("**")) {
        return (
          <p key={idx} className="font-bold">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      }
      return <p key={idx}>{line}</p>;
    });
  };

  return (
    <div className="relative w-full overflow-hidden tracking-wide font-peppermint bg-cream min-h-screen flex flex-col items-center pt-12 px-2">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl pt-12 text-center">
        Search a food
      </h1>
      <h3 className="text-sm sm:text-md md:text-lg lg:text-xl text-center justify-center py-12 mx-6 sm:mx-20">
        Don't have a food label to scan? No problem. Search for it below:
      </h3>
      <div className="flex flex-col justify-center items-center w-full">
        <form
          className="bg-cream p-8 rounded-xl shadow-md w-full max-w-3xl mx-2"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Search</h2>
          <input
            type="text"
            placeholder="Enter a food item..."
            className="w-full p-2 mb-3 border rounded"
            value={name}
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

        <div className="mt-6 mx-2 w-full bg-white rounded shadow-md px-4 py-4 text-left">
          {renderOutput()}
        </div>
      </div>
    </div>
  );
};

export default Search;
