import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">Experience Spaces Like Never Before</h1>
        <p className="hero-subtitle">
          High-quality 3D Virtual Tours for Real Estate, Stores, Airbnb, and More.
        </p>

        <button className="hero-btn">View Our Tours</button>
      </div>
    </section>
  );
}
