import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DoctorList from "./pages/DoctorList";
import BookingPage from "./pages/BookingPage";
import Contact from "./pages/Contact";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        {/* Pass setIsLoggedIn properly here */}
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/" />}
        />

        <Route
          path="/doctors/:specialization"
          element={isLoggedIn ? <DoctorList /> : <Navigate to="/" />}
        />

        <Route
          path="/booking/:doctorName"
          element={isLoggedIn ? <BookingPage /> : <Navigate to="/" />}
        />

        <Route
          path="/contact"
          element={isLoggedIn ? <Contact /> : <Contact />}
        />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
