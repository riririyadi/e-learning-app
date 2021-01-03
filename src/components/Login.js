import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Login.css";
import { BsEyeSlash, BsEye } from "react-icons/bs";

function Login() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  function handlePasswordVisibility() {
    setPasswordVisibility(!passwordVisibility);
  }

  return (
    <>
      <Navbar />
      <div className="form-wrapper">
        <form className="form">
          <h5>
            <b>Welcome Back</b>
          </h5>
          <div className="border-bottom mb-4"></div>
          <label className="mt-4">
            <b>Email</b>
          </label>
          <input className="input-field mb-2" type="text" />
          <br />
          <label>
            <b>Password</b>
          </label>
          <div style={{ position: "relative" }}>
            <input
              className="input-field mb-2"
              style={{ fontSize: "14px" }}
              type={passwordVisibility ? "text" : "password"}
            />
            <div
              style={{
                position: "absolute",
                top: 2,
                right: 8,
                cursor: "pointer",
              }}
              onClick={handlePasswordVisibility}
            >
              {passwordVisibility ? <BsEye /> : <BsEyeSlash />}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <input type="checkbox" /> <small>Remember me</small>
            </div>
            <div style={{ cursor: "pointer" }}>
              <small onClick={() => {}}>Forgot Password?</small>
            </div>
          </div>
          <br />
          <Link to="/u">
            <button
              type="submit"
              className="login-btn mb-4"
              style={{ padding: "7px 20px" }}
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <small>
              Don't have an account? <b>Sign Up</b>
            </small>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
