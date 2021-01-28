import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import {Loader} from "./Loader";


const SignupSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  email: yup.string().email().required("This field is required"),
  password: yup.string().required("This field is required").min(8),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("This field is required"),
  role_id: yup.string().required("This field is required"),
});

export default function SignUp() {

  useEffect(() => {
 document.title = "E-learning | Sign Up"
  }, [])

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSucceed, setIsSucceed] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const header = {
    "Accept": "application/json",
    "Content-Type": "application/json",
  };
  const onSubmit = async (data,e) => {
    setError("");
          setIsSucceed(false);

    setIsSubmitting(true);
   try{ const res = await axios.post("http://elearning.havicrm.tk/api/user", data, { headers: header })
          setIsSucceed(true);
      }catch(err){
        setError(err.message);
        setIsSubmitting(false);
      };
        setIsSubmitting(false);
        e.target.reset();
  };

  return (
    <>
      <Navbar />
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h5>
            <b>Join Us Today</b>
          </h5>
          <div className="border-bottom mb-2"></div>
          {error ?
            <p
              style={{
                color: "red",
                backgroundColor: "pink",
                textAlign: "center",
              }}
            >
              {error}
            </p>:<> {isSucceed ?
            <p
              style={{
                color: "green",
                backgroundColor: "lightgreen",
                textAlign: "center",
              }}
            >
              You have successfully registered.
            </p>:<p>&nbsp;</p>
        }</>}
          <label>
            <div>
              <b>Full Name</b>
            </div>
          </label>
          <input
            className="input-field mb-2"
            style={{ fontSize: "14px" }}
            type="text"
            name="name"
            ref={register}
          />
          <div style={{ color: "red", fontSize: "12px" }}>
            {errors.name?.message}
          </div>
          <label>
            <div>
              <b>Email</b>
            </div>
          </label>
          <input
            className="input-field mb-2"
            style={{ fontSize: "14px" }}
            type="text"
            name="email"
            ref={register}
          />
          <div style={{ color: "red", fontSize: "12px" }}>
            {errors.email?.message}
          </div>
          <label>
            <div>
              <b>Password</b>
            </div>
          </label>
          <input
            className="input-field mb-2"
            style={{ fontSize: "14px" }}
            type="password"
            name="password"
            ref={register}
          />
          <div style={{ color: "red", fontSize: "12px" }}>
            {errors.password?.message}
          </div>
          <label>
            <div>
              <b>Confirm Password</b>{" "}
            </div>
          </label>
          <input
            className="input-field mb-2"
            style={{ fontSize: "14px" }}
            type="password"
            name="password_confirmation"
            ref={register}
          />
          <div style={{ color: "red", fontSize: "12px" }}>
            {errors.password_confirmation?.message}
          </div>
          <label>
            <div>
              <b>Pick Your Role</b>
            </div>
          </label>
          <select className="select-box mb-2" name="role_id" ref={register}>
            <option></option>
            <option value="2">Student</option>
            <option value="1">Teacher</option>
          </select>
          <div style={{ color: "red", fontSize: "12px" }}>
            {errors.role_id?.message}
          </div>
          <br />
          <button
            type="submit"
            className="login-btn mb-4"
            style={{ padding: "0px 20px" }}
          >
            {isSubmitting? <div className="centering"><Loader/></div>: "Sign Up"} 
          </button>
          <br />
          <Link to="/login">
            <small>
              Have an account? <b>Sign In</b>
            </small>
          </Link>
        </form>
      </div>
    </>
  );
}
