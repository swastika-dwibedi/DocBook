import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../assets/logo.png";

function Login({ setIsLoggedIn }) {
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isRegister ? "Registration Successful!" : "Login Successful!");
    if (setIsLoggedIn) {
      setIsLoggedIn(true);
      setTimeout(() => navigate("/home"), 100);
    } else {
      console.error("setIsLoggedIn not found");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="DocBook Logo" className="login-logo" />
        <h2>{isRegister ? "Create Account" : "Welcome Back"}</h2>

        <form onSubmit={handleSubmit}>
          {isRegister && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isRegister ? "Register" : "Login"}</button>
        </form>

        <p className="toggle-text">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Login" : "Register"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
