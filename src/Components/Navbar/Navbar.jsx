import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context";
import "./Navbar.css";

const Navbar = () => {
  const { lightTheme, toggleTheme } = useTheme();

  return (
    <section className="navbar">
      <Link to="/" className="nav-logo lg-title">
        notova
      </Link>
      <p className="theme-icon-container" onClick={toggleTheme}>
        {lightTheme ? (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="theme-icon light-icon"
          >
            <path
              fill="currentColor"
              d="m6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79l1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41l-1.79 1.79l1.41 1.41l1.79-1.79zm-3.21 13.7l1.79 1.8l1.41-1.41l-1.8-1.79l-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41l1.79-1.8l-1.41-1.41l-1.79 1.8z"
            ></path>
          </svg>
        ) : (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="theme-icon dark-icon"
          >
            <path
              fill="currentColor"
              d="M10 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07C10.9 17.77 12 14.95 12 12s-1.1-5.77-3.01-7.93C9.32 4.02 9.66 4 10 4m0-2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"
            ></path>
          </svg>
        )}
      </p>
    </section>
  );
};

export default Navbar;
