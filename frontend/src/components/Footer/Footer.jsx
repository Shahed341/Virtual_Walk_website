import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">

        {/* FOLLOW US */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <ul className="footer-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>

        {/* VERTICAL LINE */}
        <div className="footer-divider"></div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <ul className="footer-links">
            <li><a href="tel:+15555555555">Phone</a></li>
            <li><a href="mailto:info@virtualwalk3d.com">Email</a></li>
          </ul>
        </div>

        {/* VERTICAL LINE */}
        <div className="footer-divider"></div>

        {/* INDUSTRIES */}
        <div className="footer-section">
          <h3 className="footer-title">Industries</h3>
          <ul className="footer-links">
            <li>Real Estate</li>
            <li>Retail</li>
            <li>Airbnb</li>
            <li>Restaurants</li>
            <li>Construction</li>
            <li>Interior Design</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2025 VirtualWalk3D. All rights reserved.
      </div>
    </footer>
  );
}
