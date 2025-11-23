import React, { useState } from "react";
import axios from "axios";
import "./Booking.css";   // <-- IMPORTANT: add this

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    sqFeet: "",
    date: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/bookings/create`,
        form
      );

      setSuccess(res.data.message);

      setForm({
        name: "",
        email: "",
        address: "",
        sqFeet: "",
        date: ""
      });

    } catch (err) {
      console.error("Booking error:", err);
      alert("Failed to submit booking");
    }

    setLoading(false);
  };

  return (
    <div className="booking-container">
      <h1>Book a 3D Scan</h1>

      {success && <div className="success-message">{success}</div>}

      <form onSubmit={handleSubmit} className="booking-form">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Property Address"
          value={form.address}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="sqFeet"
          placeholder="Square Feet"
          value={form.sqFeet}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Booking"}
        </button>

      </form>
    </div>
  );
}
