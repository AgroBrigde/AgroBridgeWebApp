import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import heroImage from "../assets/famers.png";

const HeroPage = ({ heroRef }) => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div>
      <section ref={heroRef} id="hero" className="section-wrapper">
        <div className="section-card hero-card">
          <div className="hero-content">
            <h1>
              Connecting Farmers to Markets Using{" "}
              <span className="highlight">Technology</span>
            </h1>
            <p className="hero-description">
              AgroBridge is a tech-driven platform that connects farmers to
              reliable buyers — with a full app experience, or simple USSD
              access for those without a smartphone.
            </p>
            <div className="hero-buttons">
              {/* Navigate to Partnership Screen */}
              <button
                className="btn-primary"
                onClick={() => navigate("/partnership")}
              >
                Partner with Us
              </button>

              {/* Navigate to Waitlist Screen */}
              <button
                className="btn-secondary"
                onClick={() => navigate("/waitlist")}
              >
                Join Waitlist
              </button>
            </div>
          </div>
          <div className="hero-visual">
            {/* The gradient background in Figma is likely this unloaded image. Kept untouched! */}
            <img src={heroImage} alt="AgroBridge Farmers" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
