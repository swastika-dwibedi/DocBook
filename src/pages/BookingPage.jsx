import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './BookingPage.css';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="booking-page">
      <h2>Book Appointment</h2>
      {!submitted ? (
        <form className="booking-form" onSubmit={handleSubmit}>
          <label>Patient Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Select Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Select Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <button type="submit">Generate Payment QR</button>
        </form>
      ) : (
        <div className="payment-section">
          <h3>Payment QR Code</h3>
          <p>Scan this code to complete your appointment payment.</p>
          <div className="qr-container">
            <QRCodeCanvas
              value={`Payment for ${formData.name} on ${formData.date} at ${formData.time}`}
              size={200}
              bgColor="#ffffff"
              fgColor="#0b5ed7"
              level="Q"
              includeMargin={true}
            />
          </div>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.time}</p>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
