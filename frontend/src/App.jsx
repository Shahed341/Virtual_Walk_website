import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main layout sections
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import MatterportTours from "./components/MatterportTours/MatterportTours.jsx";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs.jsx";
import Services from "./components/Services/Services.jsx";
import ServiceAreaMap from "./components/ServiceAreaMap/ServiceAreaMap.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Pages
import Booking from "./pages/Booking.jsx";   // <-- NEW PAGE

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        {/* Navbar appears on all pages */}
        <Navbar />

        <Routes>

          {/* Landing page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <MatterportTours />
                <WhyChooseUs />
                <Services />
                <ServiceAreaMap />
              </>
            }
          />

          {/* Booking page */}
          <Route path="/booking" element={<Booking />} />

        </Routes>

        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
