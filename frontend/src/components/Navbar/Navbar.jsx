import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">VirtualWalk3D</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Tours</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div
        className="nav-menu-icon"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        ☰
      </div>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <a onClick={() => setMobileOpen(false)} href="#">Home</a>
        <a onClick={() => setMobileOpen(false)} href="#">Tours</a>
        <a onClick={() => setMobileOpen(false)} href="#">Services</a>
        <a onClick={() => setMobileOpen(false)} href="#">Contact</a>
      </div>
    </nav>
  );
}
