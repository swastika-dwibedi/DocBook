import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-left" onClick={() => navigate(user ? "/home" : "/")}>
        <img src={logo} alt="DocBook Logo" className="nav-logo" />
        <h2 className="nav-title">DocBook</h2>
      </div>

      <div className="nav-right">
        <Link to="/home">Home</Link>
        <a href="#specializations">Specializations</a>
        <a href="#contact">Contact</a>
        {!user ? (
          <Link to="/">Login / Register</Link>
        ) : (
          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
