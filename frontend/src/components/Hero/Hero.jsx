import React from "react";

export default function Hero({ demoText }) {
  return (
    <section className="p-10 bg-gray-800 text-white">
      <h2>Hero Section</h2>
      <p className="text-gray-400">{demoText}</p>
    </section>
  );
}
