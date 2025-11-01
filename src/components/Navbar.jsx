import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={() => navigate("/home")}>
        <img src={logo} alt="logo" className="nav-logo" />
        <h2 className="nav-title">DocBook</h2>
      </div>

      <div className="navbar-right">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
