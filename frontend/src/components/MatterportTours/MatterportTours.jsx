import React from "react";
import "./MatterportTours.css";

export default function MatterportTours() {
  return (
    <section className="matterport-section">
      <div className="matterport-container">
        <h2 className="matterport-title">Featured 3D Showcase</h2>
        <p className="matterport-subtitle">
          Explore an immersive virtual experience powered by Matterport.
        </p>

        {/* Placeholder Frame */}
        <div className="matterport-frame">
          <p>Your Matterport Tour Will Appear Here</p>
        </div>

        <button className="matterport-btn">View Full Tour</button>
      </div>
    </section>
  );
}
