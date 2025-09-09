import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to NutriVision!</h1>
      <p className="text-xl mb-6 text-center max-w-lg">
        Discover nutritional insights, track your meals, and make healthier choices every day.
      </p>
      <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
        Get Started
      </button>
    </div>
  );
}
