// src/pages/BookingPage.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./BookingPage.css";

const BookingPage = () => {
  const location = useLocation();
  const doctorName = location.state?.doctorName || "Selected Doctor";
  const specialization = location.state?.specialization || "Specialization";

  const [formData, setFormData] = useState({
    patientName: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Booked Successfully!");
  };

  return (
    <div className="booking-container">
      <h2>Book Appointment</h2>
      <p>
        <strong>Doctor:</strong> {doctorName} <br />
        <strong>Specialization:</strong> {specialization}
      </p>

      <form onSubmit={handleSubmit} className="booking-form">
        <label>Patient Name:</label>
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <button type="submit">Confirm & Pay</button>
      </form>

      <div className="qr-section">
        <p>Scan to Pay</p>
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?data=DoctorBookingPayment&size=150x150"
          alt="QR Code"
        />
      </div>
    </div>
  );
};

export default BookingPage;
