import React from "react";
import "../CSS/Header.css";
import logo from "../assets/logo.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom"; // <-- FIXED: added curly braces

const Header = ({ scrollToSection }) => {
  const navigate = useNavigate(); // Initialize the navigate function
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <nav className="nav-links">
        <button
          onClick={() => scrollToSection("how-it-works")}
          className="nav-link-btn"
        >
          How It Works
        </button>
        <button
          onClick={() => scrollToSection("solutions")}
          className="nav-link-btn"
        >
          Solution
        </button>
        <button
          onClick={() => scrollToSection("traction")}
          className="nav-link-btn"
        >
          Traction
        </button>
        <button
          onClick={() => scrollToSection("partners")}
          className="nav-link-btn"
        >
          Partners
        </button>
      </nav>

      <div className="button-container">
        <Button onClick={() => navigate("/waitlist")} text="Join Waitlist" />
      </div>
    </header>
  );
};

export default Header;
