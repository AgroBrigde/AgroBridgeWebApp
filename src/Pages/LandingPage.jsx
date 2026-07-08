import React from "react";
import "../CSS/Landing.css";
import Platform from "../Components/Platform";
import Works from "../Components/Works";
import WhoIt from "../Components/WhoIt";
import Traction from "../Components/Traction";
import Cta from "../Components/Cta";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <div className="container">
        <Platform />
        <Works />
        <WhoIt />
        <Traction />
        <Cta />
      </div>
    </section>
  );
};

export default LandingPage;
