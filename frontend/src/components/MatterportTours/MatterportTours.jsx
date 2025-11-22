import React from "react";
import "./MatterportTours.css";

export default function MatterportTours() {
  const projects = [
    { id: 1, title: "Project Demo 1", model: "ru6A87ZCB1L" },
    { id: 2, title: "Project Demo 2", model: "ru6A87ZCB1L" },
    { id: 3, title: "Project Demo 3", model: "ru6A87ZCB1L" },
    { id: 4, title: "Project Demo 4", model: "ru6A87ZCB1L" },
  ];

  const scrollToTop = () => {
    document.querySelector(".matterport-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="matterport-section">
      <div className="matterport-outer-box">

        {/* MAIN VIEW */}
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

        {/* MORE PROJECTS */}
        <h3 className="matterport-subtitle" style={{ marginTop: "40px" }}>
          More Projects
        </h3>

        <div className="project-list">
          {projects.map((p) => (
            <div key={p.id} className="project-item" onClick={scrollToTop}>

              <div className="project-frame">
                <img
                  className="project-thumb"
                  src={`https://my.matterport.com/api/v1/player/models/${p.model}/thumb`}
                  onError={(e) =>
                    (e.target.src =
                      `https://my.matterport.com/api/v1/models/${p.model}/files/screenshot`)
                  }
                  alt={p.title}
                />
              </div>

              <div className="project-title">{p.title}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
