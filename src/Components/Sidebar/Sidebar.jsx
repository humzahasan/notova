import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { useAuth } from "../../context/auth-context";
const Sidebar = () => {
  const navigate = useNavigate();
  let activeStyle = {
    backgroundColor: "var(--primary-color-light)",
    fontWeight: "500",
  };
  const { getUser } = useAuth();
  const getFullName = `${getUser().firstName} ${getUser().lastName}`;
  const avatarName = `${getUser().firstName[0]}${getUser().lastName[0]}`;

  const logoutHandler = () => {
    console.info("User Logged out!");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div className="sidebar-container">
      <section className="sidebar-menu list">
        <NavLink
          to="/mynotes"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="list-item"
        >
          Home
        </NavLink>
        <NavLink
          to="/labels"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="list-item"
        >
          Label
        </NavLink>
        <NavLink
          to="/archived"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="list-item"
        >
          Archive
        </NavLink>
        <NavLink
          to="/deleted"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="list-item"
        >
          Deleted
        </NavLink>
        {getUser && (
          <NavLink
            to="/profile"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="list-item"
          >
            Profile
          </NavLink>
        )}
        <NavLink to="/create-note" className="btn btn-primary btn-create">
          Create New Note
        </NavLink>
      </section>
      {getUser && (
        <section className="sidebar-account">
          <p className="avatar-letter avatar-letter-sm" title={getFullName}>
            {avatarName}
          </p>

          <button className="btn btn-icon" onClick={logoutHandler}>
            <i className="fas fa-hamburger"></i>Logout
          </button>
        </section>
      )}
    </div>
  );
};

export default Sidebar;
