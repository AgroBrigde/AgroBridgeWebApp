import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Hooks/ScrollToTop";
import MainLayout from "./Layout/MainLayout";
import LandingPage from "./Pages/LandingPage";
import Landing from "./Components/Landing";
import WaitlistScreen from "./Pages/WaitListScreen";
import PartnersScreen from "./Pages/PartnershipScreen";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="landing" element={<Landing />} />
          <Route path="waitlist" element={<WaitlistScreen />} />
          <Route path="partnership" element={<PartnersScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
