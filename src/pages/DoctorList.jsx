// src/pages/DoctorList.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DoctorList.css";

const doctorData = {
  Cardiology: [
    { name: "Dr. Aditi Sharma", rating: 4.8, experience: 10 },
    { name: "Dr. Rajeev Mehta", rating: 4.6, experience: 8 },
    { name: "Dr. Sneha Rao", rating: 4.9, experience: 12 },
  ],
  Neurology: [
    { name: "Dr. Aryan Bose", rating: 4.7, experience: 9 },
    { name: "Dr. Kavita Iyer", rating: 4.5, experience: 7 },
    { name: "Dr. Rohit Das", rating: 4.8, experience: 11 },
  ],
  Orthopedics: [
    { name: "Dr. Priya Singh", rating: 4.6, experience: 10 },
    { name: "Dr. Suresh Nair", rating: 4.7, experience: 9 },
    { name: "Dr. Tania Paul", rating: 4.9, experience: 12 },
  ],
  Pediatrics: [
    { name: "Dr. Rahul Jain", rating: 4.8, experience: 8 },
    { name: "Dr. Nisha Verma", rating: 4.7, experience: 9 },
    { name: "Dr. Arun Dey", rating: 4.9, experience: 11 },
  ],
  Dermatology: [
    { name: "Dr. Sakshi Kapoor", rating: 4.9, experience: 7 },
    { name: "Dr. Manav Taneja", rating: 4.8, experience: 8 },
    { name: "Dr. Isha Khanna", rating: 4.7, experience: 9 },
  ],
  Ophthalmology: [
    { name: "Dr. Sunita Agarwal", rating: 4.7, experience: 11 },
    { name: "Dr. Piyush Sen", rating: 4.6, experience: 10 },
    { name: "Dr. Veena Shah", rating: 4.8, experience: 13 },
  ],
  ENT: [
    { name: "Dr. Vikram Ghosh", rating: 4.8, experience: 12 },
    { name: "Dr. Kiran Malik", rating: 4.7, experience: 10 },
    { name: "Dr. Meena Das", rating: 4.9, experience: 15 },
  ],
  Psychiatry: [
    { name: "Dr. Ankit Roy", rating: 4.9, experience: 10 },
    { name: "Dr. Deepika Sharma", rating: 4.7, experience: 8 },
    { name: "Dr. Rahul Bose", rating: 4.8, experience: 9 },
  ],
  Dental: [
    { name: "Dr. Riya Mehta", rating: 4.8, experience: 8 },
    { name: "Dr. Aditya Rao", rating: 4.6, experience: 7 },
    { name: "Dr. Kalyani Sen", rating: 4.9, experience: 9 },
  ],
  Urology: [
    { name: "Dr. Harshit Das", rating: 4.7, experience: 10 },
    { name: "Dr. Tanya Ghosh", rating: 4.8, experience: 11 },
    { name: "Dr. Neil Kapoor", rating: 4.9, experience: 13 },
  ],
};

const DoctorList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const specialization = location.state?.specialization;

  if (!specialization) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>No specialization selected</h2>;
  }

  const doctors = doctorData[specialization] || [];

  const handleBook = (doctor) => {
    navigate("/booking", { state: { doctorName: doctor.name, specialization } });
  };

  return (
    <div className="doctorlist-container">
      <h2>{specialization} Doctors</h2>
      <div className="doctorlist-grid">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <h3>{doc.name}</h3>
            <p>⭐ Rating: {doc.rating}</p>
            <p>🏅 Experience: {doc.experience} years</p>
            <button onClick={() => handleBook(doc)}>Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
