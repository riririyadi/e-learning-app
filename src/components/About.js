import React from 'react';
import Navbar from './Navbar'
import "../styles/About.css"

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="about container">
            <div  className="centering" style={{flexDirection:"column"}}>
            <h5><b>Meet Us</b></h5>
            <div className="team-image"></div>
            <p className="mt-4">The team with best work ethic and passion, to bring all the good things to the system.</p>
            </div>
            </div>
             <div
        className="footer d-flex flex-column"
        style={{
          marginTop: "200px",
          paddingTop: "20px",
          height: "400px",
          backgroundColor: "black",
          color: "gray",
          clear: "both",
          position: "relative",
          bottom: "0",
        }}
      >
        <div className="container d-flex p-4">
          <div className="ml-auto mr-4 centering">
            <div>
              <div className="mb-3">About Us</div>
              <div className="mb-3">Help</div>
              <div className="mb-3">Privacy and Terms</div>
              <div className="mb-4">Yes, we use cookies</div>
              <div style={{marginTop:"50px"}}><b>All rights reserved &#169;2021</b></div>
            </div>
          </div>
        </div>
      </div>

        </div>
    )
}
