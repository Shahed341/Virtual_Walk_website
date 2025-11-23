import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">VirtualWalk3D</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#tours">Tours</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link className="book-btn" to="/booking">Book now</Link></li>
      </ul>

      <div
        className="nav-menu-icon"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        ☰
      </div>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <a href="#tours" onClick={closeMenu}>Tours</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <Link to="/booking" onClick={closeMenu}>Book now</Link>
      </div>
    </nav>
  );
}
