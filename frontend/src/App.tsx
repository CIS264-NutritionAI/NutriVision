import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Scan from "./pages/Scan";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import History from "./pages/History";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="min-h-screen flex flex-col font-peppermint text-charcoal bg-cream">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
