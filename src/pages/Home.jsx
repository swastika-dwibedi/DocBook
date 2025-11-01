import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../assets/logo.png";

function Home() {
  const navigate = useNavigate();

  const specializations = [
    "Cardiology",
    "Neurology",
    "Dermatology",
    "Orthopedics",
    "Pediatrics",
    "Ophthalmology",
    "Psychiatry",
    "Oncology",
    "Dentistry",
    "General Medicine",
  ];

  return (
    <div className="home-container">
      <section className="welcome-section">
        <img src={logo} alt="DocBook Logo" className="home-logo" />
        <h1>Welcome to DocBook</h1>
        <p>Your trusted place to book doctor appointments easily.</p>
      </section>

      <section className="specialization-section">
        <h1>Specializations</h1>
        <div className="specialization-grid">
          {specializations.map((spec) => (
            <div
              key={spec}
              className="specialization-card"
              onClick={() => navigate(`/doctors/${spec}`)}
            >
              <h3>{spec}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
