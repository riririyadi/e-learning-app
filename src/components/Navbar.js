import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Navbar.css";

export default function Navbar() {
const isLoggedIn = localStorage.getItem('token');
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white shadow-sm">
      <div className="container">
        <NavLink to="/" className="navbar-brand" href="#">
          E-learning
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto centering">
            <li className="nav-item pl-2 pr-2">
              <NavLink to="/" className="nav-link" href="#" exact={true}>
                Home
              </NavLink>
            </li>
            <li className="nav-item pl-2 pr-2">
              <NavLink to="/about" className="nav-link dark-link" href="#">
                About
              </NavLink>
            </li>
            <li className="nav-item pl-2 pr-2">
              <NavLink to="/help" className="nav-link dark-link" href="#">
                Help
              </NavLink>
            </li>
    {isLoggedIn     ?       <li className="nav-item pl-2 pr-2">
              <NavLink to="/u" className="nav-link" href="#">
                <span className="login-btn">Go to Dashboard</span>
              </NavLink>
            </li>:<>
            <li className="nav-item pl-2 pr-2">
              <NavLink to="/login" className="nav-link dark-link" href="#">
                <span>Login</span>
              </NavLink>
            </li>
            <li className="nav-item pl-2 pr-2">
              <NavLink to="/register" className="nav-link" href="#">
                <span className="login-btn">Sign Up</span>
              </NavLink>
            </li></>}
          </ul>
        </div>
      </div>
    </nav>
  );
}
