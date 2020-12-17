import React from "react";
import { NavLink, Link } from "react-router-dom";
import Navbar from "./Navbar";

function SignUp() {
  return (
    <>
      <Navbar />
      <div className="form-wrapper">
        <div className="form" style={{ fontSize: "14px" }}>
          <h5>
            <b>Join Us Today</b>
          </h5>
          <div className="border-bottom mb-4"></div>

          <label>
            <b>Full Name</b>
          </label>
          <input
            className="input-field mb-2"
            style={{ fontSize: "14px" }}
            type="text"
          />
          <br />
          <label>
            <b>Email</b>
          </label>
          <input
            className="input-field mb-2"
            style={{ fontSize: "14px" }}
            type="text"
          />
          <br />
          <label>
            <b>Password</b>
          </label>
          <input
            className="input-field mb-2"
            style={{ fontSize: "14px" }}
            type="password"
          />
          <br />
          <label>
            <b>Confirm Password</b>
          </label>
          <input
            className="input-field mb-2"
            style={{ fontSize: "14px" }}
            type="password"
          />
          <br />
          <label>
            <b>Pick Your Role</b>
          </label>
          <br />
          <select className="mb-4 select-box">
            <option></option>
            <option>Student</option>
            <option>Teacher</option>
          </select>
          <br />
          <button type="submit" className="login-btn mb-4">
            Sign Up
          </button>
          <br />
          <Link to="/login">
            <small>
              Have an account? <b>Sign In</b>
            </small>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
