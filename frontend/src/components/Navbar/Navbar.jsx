import React from "react";

export default function Navbar({ demoText }) {
  return (
    <nav className="p-4 bg-gray-900 text-white">
      <h2>Navbar</h2>
      {demoText && <p className="text-gray-400 text-sm">{demoText}</p>}
    </nav>
  );
}
