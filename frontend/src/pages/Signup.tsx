import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOZ57dtsS1f1XAYC1lSE0Bsb0RdphGiCg",
  authDomain: "nutrivision-11e29.firebaseapp.com",
  projectId: "nutrivision-11e29",
  storageBucket: "nutrivision-11e29.firebasestorage.app",
  messagingSenderId: "1002919080951",
  appId: "1:1002919080951:web:4d17d8f43a86bc947674f2",
  measurementId: "G-WN6HM4GSSC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully! Welcome " + userCredential.user.email);
    } catch (error: any) {
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>

        <input
          type="email"
          placeholder="example@gmail.com"
          className="w-full p-2 mb-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 mb-4 border rounded"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-matcha text-white py-2 rounded hover:bg-matcha transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
