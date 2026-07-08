import React from "react";
import Platform from "../Components/Platform";
import Works from "../Components/Works";
import WhoIt from "../Components/WhoIt";
import Traction from "../Components/Traction";
import Cta from "../Components/Cta";
import HeroPage from "../Components/HeroPage";
import { useOutletContext } from "react-router-dom";
import Solution from "../Components/Solution";
import Gap from "../Components/Gap";

const LandingPage = () => {
  const { refs } = useOutletContext();
  const {
    heroRef,
    gapRef,
    solutionsRef,
    howItWorksRef,
    partnersRef,
    tractionRef,
    platformRef,
    ctaRef,
  } = refs;

  return (
    <section>
      <div>
        <HeroPage heroRef={heroRef} />
        <Gap gapRef={gapRef} />
        {/* <Platform platformRef={platformRef} /> */}
        <Solution solutionsRef={solutionsRef} />
        <Works worksRef={howItWorksRef} />
        <WhoIt whoItRef={partnersRef} />
        <Traction tractionRef={tractionRef} />
        <Cta ctaRef={ctaRef} />
      </div>
    </section>
  );
};

export default LandingPage;
