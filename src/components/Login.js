import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Login.css";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import axios from "axios";
import { useForm } from "react-hook-form";
import {Loader} from "./Loader";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginSchema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
  password: yup.string().required("This field is required"),
});

function Login() {
  let history = useHistory();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit } = useForm({
    resolver:yupResolver(LoginSchema)
  });

      useEffect(() => {
 document.title = "E-learning | Login"
  }, [])

  function handlePasswordVisibility() {
    setPasswordVisibility(!passwordVisibility);
  }

 const header = {
  "Accept":"application/json",
  "Content-Type": "application/json"
  }

  const onSubmit = (data) => {
    console.log(data);
    setError("");
    setIsSubmitting(true)
    axios.post("http://elearning.havicrm.tk/api/auth/login", data, {headers:header})
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        history.push("/u");
      })
      .catch((err) => {
        setError(err.message);
    setIsSubmitting(false);
      });
  };

  return (
    <>
      <Navbar />
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h5>
            <b>Welcome Back</b>
          </h5>
          <div className="border-bottom"></div>
          <div className="mb-2 mt-3">
            {error ? (
              <p
                style={{
                  color: "red",
                  backgroundColor: "pink",
                  textAlign: "center",
                }}
              >
                {error}
              </p>
            ) : (
              <p>&nbsp;</p>
            )}
          </div>
          <label className="mt-1">
            <b>Email</b>
          </label>
          <input
            className="input-field mb-2"
            type="text"
            name="email"
            ref={register}
          />
          <br />
          <label>
            <b>Password</b>
          </label>
          <div style={{ position: "relative" }}>
            <input
              className="input-field mb-2"
              style={{ fontSize: "14px" }}
              type={passwordVisibility ? "text" : "password"}
              name="password"
              ref={register}
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
          <div className="d-flex justify-content-end">
            <Link to="/login/forgot-password">
              <div style={{ cursor: "pointer" }}>
                <small>Forgot Password?</small>
              </div>
            </Link>
          </div>
          <br />
          <button
            type="submit"
            className="login-btn mb-4"
            style={{ padding: "0px 20px" }}
          >
           {isSubmitting ? <div className="centering"><Loader/></div>:"Login" }
          </button>
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
