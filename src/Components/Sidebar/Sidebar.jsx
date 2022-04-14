import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <section className="sidebar-menu list">
        <Link to="/mynotes" className="list-item">
          Home
        </Link>
        <Link to="/labels" className="list-item">
          Label
        </Link>
        <Link to="/archive" className="list-item">
          Archive
        </Link>
        <Link to="/deleted" className="list-item">
          Deleted
        </Link>
        <Link to="/profile" className="list-item">
          Profile
        </Link>
        <Link to="/create-note" className="btn btn-primary btn-create">
          Create New Note
        </Link>
      </section>
      <section className="sidebar-account">
        <p className="avatar-letter avatar-letter-sm">SB</p>

        <button className="btn btn-icon">
          <i className="fas fa-hamburger"></i>Logout
        </button>
      </section>
    </div>
  );
};

export default Sidebar;
