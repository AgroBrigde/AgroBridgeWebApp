import React from "react";
import "../CSS/Header.css";
import logo from "../assets/logo.png";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleSectionNavigation = (sectionId) => {
    if (isHomePage) {
      scrollToSection(sectionId);
      return;
    }

    navigate("/", { state: { scrollToSection: sectionId } });
  };

  return (
    <header className="header">
      <button
        type="button"
        className="logo-container"
        onClick={() => navigate("/")}
        aria-label="Go to home"
      >
        <img src={logo} alt="Logo" className="logo" />
      </button>

      <nav className="nav-links">
        <button
          onClick={() => handleSectionNavigation("how-it-works")}
          className="nav-link-btn"
        >
          How It Works
        </button>
        <button
          onClick={() => handleSectionNavigation("solutions")}
          className="nav-link-btn"
        >
          Solution
        </button>
        <button
          onClick={() => handleSectionNavigation("traction")}
          className="nav-link-btn"
        >
          Traction
        </button>
        <button
          onClick={() => handleSectionNavigation("partners")}
          className="nav-link-btn"
        >
          Partners
        </button>
      </nav>

      <div className="button-container">
        <Button
          onClick={() => navigate(isHomePage ? "/waitlist" : "/")}
          text={isHomePage ? "Join Waitlist" : "Home"}
        />
      </div>
    </header>
  );
};

export default Header;
