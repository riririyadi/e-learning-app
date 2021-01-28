import React, {useEffect} from "react";
import Navbar from "./Navbar";
import "../styles/Help.css";
import Footer from "./Footer";

function Help() {

	  useEffect(() => {
 document.title = "E-learning | Help"
  }, [])
	return (
		<>
			<Navbar />
			<div className="helps container">
				<div className="centering" style={{ flexDirection: "column" }}>
					<h5>
						<b>Help</b>
					</h5>
					<div className="remote-image"></div>
					<p className="mt-4">
						There's something you wanna ask?
					</p>
					<div>Contact Us</div>
					<input value="team@team.com" className="mt-4" readOnly disabled/>
				</div>
			</div>
		<Footer />
		</>
	);
}

export default Help;
