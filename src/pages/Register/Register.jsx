import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useAuth } from "../../context/auth-context";
import { Link, useNavigate } from "react-router-dom";
import RegisterPic from "../../assets/register.svg";
import Navbar from "../../Components/Navbar/Navbar";

const Register = () => {
  const { setUser, setToken } = useAuth();
  const navigate = useNavigate();
  const registerHandler = async () => {
    try {
      const res = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      if (res.status === 201 && res.data.encodedToken) {
        setToken(res.data);
        setUser(res.data.foundUser);
        navigate("/mynotes");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("john@gmail.com");
  const [password, setPassword] = useState("john123");

  return (
    <>
      <Navbar />
      <div className="register">
        <p className="lg-title">Register</p>
        <div className="grid-col-2 register-container">
          <div className="grid-item form-container ">
            <div className="input-label">
              <label htmlFor="name">First Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your first name"
                className="input-box"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-label">
              <label htmlFor="name">Last Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your last name"
                className="input-box"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input-label">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your cheesy email"
                className="input-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-label">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your mixed password"
                className="input-box input-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="action">
              <button
                onClick={registerHandler}
                className="btn btn-outline btn-primary"
              >
                <p> Register </p>
              </button>
              <Link to="/login" className="cta-text">
                Already a user? Login
              </Link>
            </div>
          </div>
          <div className="grid-item image-container">
            <img src={RegisterPic} alt="register" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
