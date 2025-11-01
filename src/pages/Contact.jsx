import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions or need help with booking?</p>
      <div className="contact-card">
        <p>📧 Email: <a href="mailto:support@docbookcare.com">support@docbookcare.com</a></p>
        <p>📞 Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
        <p>🕒 Working Hours: 9:00 AM - 8:00 PM (Mon - Sat)</p>
      </div>
    </div>
  );
}

export default Contact;
