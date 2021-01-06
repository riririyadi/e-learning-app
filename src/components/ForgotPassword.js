import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"

export default function ForgotPassword() {
	return (
		<>
			<Navbar />
			<div className="form-wrapper">
				<form className="form">
					<h5>
						<b>Forgot Password?</b>
					</h5>
					<div className="border-bottom mb-4"></div>
					<h6>Submit your registered email, we'll send you a recovery password.</h6>
					  <input
              className="input-field mb-4 mt-4"
              style={{ fontSize: "14px" }}
            />
					<Link to="#">
						<button
							type="submit"
							className="login-btn mb-4"
							style={{ padding: "7px 20px" }}
						>
							Submit
						</button>
					</Link>
					<Link to="/login">
						<small>
							Nevermind, I remember now. <b>Sign In</b>
						</small>
					</Link>
				</form>
			</div>
		</>
	);
}
