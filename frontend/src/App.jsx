// src/App.jsx
import React from "react";

// Import main layout sections
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import MatterportTours from "./components/MatterportTours/MatterportTours.jsx";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs.jsx";
import Services from "./components/Services/Services.jsx";
import ServiceAreaMap from "./components/ServiceAreaMap/ServiceAreaMap.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <div className="app-root">
      {/* Top navigation */}
      <Navbar demoText="Demo Navbar Loaded" />

      {/* Main scrollable content */}
      <main>

        {/* Hero / landing banner */}
        <Hero demoText="This is the demo Hero Section" />

        {/* Matterport virtual tours section */}
        <MatterportTours demoText="Demo Matterport Tours Section" />

        {/* Why choose us section */}
        <WhyChooseUs demoText="Demo Why Choose Us Section" />

        {/* Services & pricing */}
        <Services demoText="Demo Services Section" />

        {/* Service area / Google Map */}
        <ServiceAreaMap demoText="Demo Map Section" />
      </main>

      {/* Footer */}
      <Footer demoText="Demo Footer Loaded" />
    </div>
  );
}
