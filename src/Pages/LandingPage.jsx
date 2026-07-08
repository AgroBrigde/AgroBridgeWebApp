import React from "react";
import Platform from "../Components/Platform";
import Works from "../Components/Works";
import WhoIt from "../Components/WhoIt";
import Traction from "../Components/Traction";
import Cta from "../Components/Cta";

const LandingPage = () => {
  return (
    <section>
      <div>
        <h1>welcome to landing page</h1>
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
