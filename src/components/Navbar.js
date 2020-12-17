import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          E-learning
        </NavLink>
        <button
          style={{ border: "none" }}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div
            className="navbar-nav ml-auto centering"
            style={{ fontSize: "14px" }}
          >
            <NavLink
              className="nav-item nav-link mr-2 ml-2"
              to="/"
              exact={true}
            >
              Home
            </NavLink>
            <NavLink
              className="nav-item nav-link mr-2 ml-2"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="nav-item nav-link mr-2 ml-2"
              to="/help"
            >
              Help
            </NavLink>
            <NavLink
              className="nav-item nav-link mr-2 ml-2"
              to="/login"
            >
              Log In
            </NavLink>
            <NavLink className="nav-item nav-link" to="/register">
              <div className="login-btn">Sign Up</div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
