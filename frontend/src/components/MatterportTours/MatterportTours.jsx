import React, { useState, useRef } from "react";
import "./MatterportTours.css";

export default function MatterportTours() {
  const viewerRef = useRef(null);

  const [activeTour, setActiveTour] = useState(
    "https://my.matterport.com/show/?m=ru6A87ZCB1L"
  );

  const projectList = [
    {
      id: 1,
      title: "Project 1",
      model: "ru6A87ZCB1L"
    },
    {
      id: 2,
      title: "Project 2",
      model: "ru6A87ZCB1L"
    },
    {
      id: 3,
      title: "Project 3",
      model: "ru6A87ZCB1L"
    },
    {
      id: 4,
      title: "Project 4",
      model: "ru6A87ZCB1L"
    }
  ];

  const handleProjectClick = (model) => {
    const newTour = `https://my.matterport.com/show/?m=${model}`;

    // Slide up animation
    const frame = document.querySelector(".matterport-frame");
    frame.classList.add("slide-up");

    setTimeout(() => {
      setActiveTour(newTour);
      frame.classList.remove("slide-up");

      // Auto-scroll to top of viewer after loading new project
      viewerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }, 600);
  };

  return (
    <section className="matterport-section">

      <div className="matterport-outer-box">

        <h2 className="matterport-title">Virtual Tour Demo</h2>
        <p className="matterport-subtitle">
          Experience an interactive 3D walkthrough powered by Matterport.
        </p>

        {/* MAIN VIEWER (Ref added) */}
        <div ref={viewerRef} className="matterport-frame">
          <iframe
            src={activeTour}
            allow="autoplay; fullscreen; web-share; xr-spatial-tracking"
            allowFullScreen
          ></iframe>
        </div>

        <h3 className="more-projects-title">More Projects</h3>

        {/* PROJECT PREVIEW BOXES */}
        <div className="projects-container">
          {projectList.map((p) => (
            <div
              key={p.id}
              className="project-box"
              onClick={() => handleProjectClick(p.model)}
            >
              <img
                src={`https://my.matterport.com/api/v1/models/${p.model}/thumb`}
                alt={p.title}
                className="project-thumb"
              />
              <p className="project-title">{p.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
