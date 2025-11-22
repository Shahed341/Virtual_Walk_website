import React from "react";
import "./MatterportTours.css";

export default function MatterportTours() {
  return (
    <section className="matterport-section">
      <div className="matterport-outer-box">

        <h2 className="matterport-title">Virtual Tour Demo</h2>
        <p className="matterport-subtitle">
          Experience an interactive 3D walkthrough powered by Matterport.
        </p>

        <div className="matterport-frame">
          <iframe
            src="https://my.matterport.com/show/?m=ru6A87ZCB1L"
            frameBorder="0"
            allow="autoplay; fullscreen; web-share; xr-spatial-tracking"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}
