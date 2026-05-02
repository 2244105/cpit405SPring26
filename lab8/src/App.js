import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/about" className="nav-btn">About us</Link>
      </nav>

      <main className="main-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
