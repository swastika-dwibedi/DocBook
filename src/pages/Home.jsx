import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../assets/logo.png";

const specializations = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Dermatology",
  "ENT",
  "Ophthalmology",
  "Dentistry",
  "Gynecology",
  "Psychiatry",
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="welcome-section">
        <img src={logo} alt="DocBook Logo" className="home-logo" />
        <h1>Welcome to DocBook</h1>
        <p>Your one-stop solution for online doctor appointments</p>
      </section>

      <section id="specializations" className="specialization-section">
        <h2>Our Specializations</h2>
        <div className="specialization-grid">
          {specializations.map((spec) => (
            <div
              key={spec}
              className="specialization-card"
              onClick={() => navigate(`/doctors/${spec.toLowerCase()}`)}
            >
              {spec}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: support@docbook.com | Phone: +91 98765 43210</p>
      </section>
    </div>
  );
};

export default Home;
