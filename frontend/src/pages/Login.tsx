import { useState } from "react";
import { logIn } from "../services/authService";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      alert("Login successful!");
    } catch (error: any) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 bg-white">
        <div className="flex flex-col justify-center items-center w-1/2">
          <form
            onSubmit={handleLogin}
            className="bg-cream p-8 rounded-xl shadow-md w-80"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-2 mb-3 border rounded"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-matcha text-cream py-2 rounded hover:bg-green-600 transition"
            >
              Log In
            </button>
            <p className="mt-4 text-sm text-center text-gray-600">
              Don't have an account yet?{" "}
              <Link to="/signup" className="text-matcha font-semibold underline">
                Sign up here
              </Link>
            </p>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center w-1/2 bg-white p-12">
          <h1 className="text-4xl font-bold text-charcoal mb-4 text-center">
            Welcome to NutriVision
          </h1>
          <p className="text-lg text-charcoal text-center">
            Track ingredients, learn about allergens, and make smarter food choices!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
