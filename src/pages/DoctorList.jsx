import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DoctorList.css";

function DoctorList() {
  const { specialization } = useParams();
  const navigate = useNavigate();

  // Doctor data (3 per specialization)
  const doctors = [
    // Cardiology
    { name: "Dr. A. Sharma", spec: "Cardiology", rating: 4.8, exp: 12 },
    { name: "Dr. B. Mehta", spec: "Cardiology", rating: 4.7, exp: 10 },
    { name: "Dr. C. Rao", spec: "Cardiology", rating: 4.6, exp: 9 },

    // Neurology
    { name: "Dr. D. Nair", spec: "Neurology", rating: 4.9, exp: 15 },
    { name: "Dr. E. Patel", spec: "Neurology", rating: 4.7, exp: 11 },
    { name: "Dr. F. Kapoor", spec: "Neurology", rating: 4.8, exp: 13 },

    // Dermatology
    { name: "Dr. G. Iyer", spec: "Dermatology", rating: 4.7, exp: 10 },
    { name: "Dr. H. Banerjee", spec: "Dermatology", rating: 4.6, exp: 8 },
    { name: "Dr. I. Sen", spec: "Dermatology", rating: 4.8, exp: 12 },

    // Orthopedics
    { name: "Dr. J. Gupta", spec: "Orthopedics", rating: 4.8, exp: 11 },
    { name: "Dr. K. Roy", spec: "Orthopedics", rating: 4.5, exp: 9 },
    { name: "Dr. L. Das", spec: "Orthopedics", rating: 4.7, exp: 10 },

    // Pediatrics
    { name: "Dr. M. Singh", spec: "Pediatrics", rating: 4.9, exp: 13 },
    { name: "Dr. N. Paul", spec: "Pediatrics", rating: 4.8, exp: 12 },
    { name: "Dr. O. Bose", spec: "Pediatrics", rating: 4.7, exp: 8 },

    // Ophthalmology
    { name: "Dr. P. Rao", spec: "Ophthalmology", rating: 4.8, exp: 10 },
    { name: "Dr. Q. Chatterjee", spec: "Ophthalmology", rating: 4.6, exp: 9 },
    { name: "Dr. R. Sinha", spec: "Ophthalmology", rating: 4.9, exp: 14 },

    // Psychiatry
    { name: "Dr. S. Verma", spec: "Psychiatry", rating: 4.8, exp: 12 },
    { name: "Dr. T. Pandey", spec: "Psychiatry", rating: 4.7, exp: 10 },
    { name: "Dr. U. Ahmed", spec: "Psychiatry", rating: 4.9, exp: 13 },

    // Oncology
    { name: "Dr. V. Reddy", spec: "Oncology", rating: 4.8, exp: 15 },
    { name: "Dr. W. Jain", spec: "Oncology", rating: 4.6, exp: 10 },
    { name: "Dr. X. Mishra", spec: "Oncology", rating: 4.9, exp: 14 },

    // Dentistry
    { name: "Dr. Y. Thomas", spec: "Dentistry", rating: 4.7, exp: 9 },
    { name: "Dr. Z. Joshi", spec: "Dentistry", rating: 4.8, exp: 10 },
    { name: "Dr. A1. Lal", spec: "Dentistry", rating: 4.6, exp: 8 },

    // General Medicine
    { name: "Dr. B1. Nanda", spec: "General Medicine", rating: 4.8, exp: 11 },
    { name: "Dr. C1. Dutta", spec: "General Medicine", rating: 4.7, exp: 9 },
    { name: "Dr. D1. Mukherjee", spec: "General Medicine", rating: 4.9, exp: 13 },
  ];

  // Filter doctors by specialization
  const filteredDoctors = doctors.filter(
    (doc) => doc.spec.toLowerCase() === specialization.toLowerCase()
  );

  return (
    <div className="doctorlist-container">
      <h2>{specialization} Specialists</h2>
      <div className="doctor-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc, index) => (
            <div key={index} className="doctor-card">
              <h3>{doc.name}</h3>
              <p>⭐ Rating: {doc.rating}</p>
              <p>🩺 Experience: {doc.exp} years</p>
              <button onClick={() => navigate(`/booking/${doc.name}`)}>
                Book Appointment
              </button>
            </div>
          ))
        ) : (
          <p className="no-doctors">No doctors found for {specialization}.</p>
        )}
      </div>
    </div>
  );
}

export default DoctorList;
