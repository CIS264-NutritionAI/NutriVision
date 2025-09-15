import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
import Scan from "./pages/Scan";
import Login from "./pages/Login";
import Signups from "./pages/Signups";
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
            <Route path="/results" element={<Results />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signups" element={<Signups />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
