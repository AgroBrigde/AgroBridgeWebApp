import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
  const location = useLocation();

  // Create refs for sections on the landing page
  const howItWorksRef = useRef(null);
  const solutionsRef = useRef(null);
  const tractionRef = useRef(null);
  const partnersRef = useRef(null);
  const heroRef = useRef(null);
  const gapRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const sectionId = location.state?.scrollToSection;
    if (!sectionId) return;

    const sectionRefs = {
      "how-it-works": howItWorksRef,
      solutions: solutionsRef,
      traction: tractionRef,
      partners: partnersRef,
    };
    const targetRef = sectionRefs[sectionId];

    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState({}, document.title, window.location.href);
    }
  }, [location]);

  // Scroll function
  const scrollToSection = (sectionId) => {
    const sectionRefs = {
      "how-it-works": howItWorksRef,
      solutions: solutionsRef,
      traction: tractionRef,
      partners: partnersRef,
      hero: heroRef,
      gap: gapRef,
      cta: ctaRef,
    };

    const targetRef = sectionRefs[sectionId];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Pass refs and scroll function to children via context or props
  const contextValue = {
    scrollToSection,
    refs: {
      howItWorksRef,
      solutionsRef,
      tractionRef,
      partnersRef,
      heroRef,
      gapRef,
      ctaRef,
    },
  };

  return (
    <main>
      <Header scrollToSection={scrollToSection} />
      <Outlet context={contextValue} />
      <Footer />
    </main>
  );
};

export default MainLayout;
