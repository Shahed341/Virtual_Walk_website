import React from "react";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-outer-box">

        <h2 className="why-title">Why Choose Us</h2>
        <p className="why-subtitle">Trusted 3D experts delivering high-quality, fast, and affordable virtual tours.</p>

        <div className="why-grid">

          <div className="why-item">
            <div className="why-icon">⚡</div>
            <h3>Fast Delivery</h3>
            <p>Standard delivery within 4 days, express options available.</p>
          </div>

          <div className="why-item">
            <div className="why-icon">🎯</div>
            <h3>High Accuracy</h3>
            <p>Crystal-clear 3D scans with precise measurement data.</p>
          </div>

          <div className="why-item">
            <div className="why-icon">💼</div>
            <h3>Business Ready</h3>
            <p>Perfect for real estate, Airbnb, retail, and contractors.</p>
          </div>

          <div className="why-item">
            <div className="why-icon">📍</div>
            <h3>Local in Saskatoon</h3>
            <p>Reliable local support with zero travel fees inside the city.</p>
          </div>

          <div className="why-item">
            <div className="why-icon">💵</div>
            <h3>Affordable Pricing</h3>
            <p>Clear, upfront pricing starting at just $89.</p>
          </div>

          <div className="why-item">
            <div className="why-icon">⭐</div>
            <h3>Client Satisfaction</h3>
            <p>Highly rated service backed by quality and professionalism.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
