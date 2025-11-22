import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-outer-box">

        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">Affordable 3D solutions for all industries</p>

        <div className="services-grid">

          {/* SERVICE 1 */}
          <div className="service-card">
            <h3 className="service-name">Real Estate 3D Tour</h3>
            <p className="service-desc">High-quality 3D virtual walkthroughs.</p>
            <p className="service-price">$99 – $149</p>
          </div>

          {/* SERVICE 2 */}
          <div className="service-card">
            <h3 className="service-name">Airbnb / Rental Tour</h3>
            <p className="service-desc">Boost bookings with immersive previews.</p>
            <p className="service-price">$99 + $10 per room</p>
          </div>

          {/* SERVICE 3 */}
          <div className="service-card">
            <h3 className="service-name">Retail / Store Tour</h3>
            <p className="service-desc">Showcase stores online & on Google.</p>
            <p className="service-price">$89 – $120</p>
          </div>

          {/* SERVICE 4 */}
          <div className="service-card">
            <h3 className="service-name">Floor Plans</h3>
            <p className="service-desc">Accurate layout floor plans included.</p>
            <p className="service-price">Free</p>
          </div>

        </div>

      </div>
    </section>
  );
}
