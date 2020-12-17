import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { NavLink, Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Login.css";
import CustomModal from "./Modal";
import { BsEyeSlash, BsEye } from "react-icons/bs";

function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  function handlePasswordVisibility() {
    setPasswordVisibility(!passwordVisibility);
  }

  function handleOpenModal() {
    setIsOpen(!isOpen);
  }
  const ForgotPasswordForm = () => {
    return (
      <div className="p-4" style={{ fontSize: "14px" }}>
        <h5 className="mb-4">Forgot Password?</h5>
        <div className="mb-2">
          Insert your email address, so we can give you a recovery password
        </div>
        <input
          className="input-field mb-2"
          placeholder="user@mail.com"
          type="text"
        />
        <button className="button mb-4">Submit</button>
        <div onClick={handleOpenModal} className="dark-link" style={{ cursor: "pointer" }}>
          Never mind, I remember now.
        </div>
      </div>
    );
  };
  return (
    <>
      <Navbar />
      <div className="form-wrapper">
        <div className="form" style={{ fontSize: "14px" }}>
          <h5>Welcome Back</h5>
          <div className="border-bottom mb-4"></div>
          <label>
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
              <small onClick={handleOpenModal}>Forgot Password?</small>
            </div>
          </div>
          <br />
          <Link to="/u">
            <button type="submit" className="login-btn mb-4">
              Login
            </button>
          </Link>
          <Link to="/register">
            <small>
              Don't have an account? <b>Sign Up</b>
            </small>
          </Link>
        </div>
      </div>
      <CustomModal
        isOpen={isOpen}
        onRequestClose={handleOpenModal}
        componentToPass={<ForgotPasswordForm />}
      />
    </>
  );
}

export default Login;
