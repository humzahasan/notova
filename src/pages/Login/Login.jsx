import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "../../Components";
import "./Login.css";
import { useAuth } from "../../context/auth-context";
import { Link, useNavigate } from "react-router-dom";
import LoginPic from "../../assets/register.svg";

const Login = () => {
  const { setUser, setToken } = useAuth();
  const navigate = useNavigate();
  const loginHandler = async () => {
    try {
      const res = await axios.post("/api/auth/login", { email, password });

      if (res.status === 200 && res.data.encodedToken) {
        setToken(res.data);
        setUser(res.data.foundUser);
        navigate("/mynotes");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const [email, setEmail] = useState("humza@gmail.com");
  const [password, setPassword] = useState("humza123");

  return (
    <>
      <Navbar />
      <div className="login">
        <p className="lg-title">Login</p>
        <div className="grid-col-2 login-container">
          <div className="grid-item image-container">
            <img src={LoginPic} alt="register" />
          </div>
          <div className="grid-item form-container ">
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
                onClick={loginHandler}
                className="btn btn-outline btn-primary"
              >
                <p> Login </p>
              </button>
              <Link to="/register" className="cta-text">
                Create a new Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
