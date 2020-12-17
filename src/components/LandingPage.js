import React from "react";
import "../styles/LandingPage.css";
import { NavLink, Link } from "react-router-dom";
import Navbar from "./Navbar";

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="jumbotron-fluid">
        <div className="container">
          <div
            className="row image-bg pt-4"
            style={{ minHeight: "600px", width: "100%" }}
          >
            <div>
              <h1 className="motto" style={{ marginTop: "100px" }}>
                Make Learning Easier
              </h1>
              <p className="lead">No more hard to study, everywhere.</p>
              <Link to="/register">
                {" "}
                <button className="sign-up-btn">Join us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tag-bar container"
        style={{
          height: "300px",
          fontSize: "30px",
        }}
      >
        Who this is for?
        <div
          className="row"
          style={{ height: "100%", marginTop: "20px" }}
        ></div>
      </div>
      <div
        className="container"
        style={{ height: "500px", paddingTop: "100px" }}
      >
        <div className="row" style={{ height: "100%" }}>
          <div className="col-md-8 screen-image"></div>
          <div className="col-md-4">
            <h3>Solve more tasks </h3>
            <p>Get more tasks done easily.</p>
          </div>
        </div>
      </div>
      <div className="container" style={{ height: "500px" }}>
        <div className="row" style={{ height: "100%", marginTop: "50px" }}>
          <div className="col-md-4">
            <h3>Interact with your classmates</h3>
            <p>Get more tasks done easily.</p>
          </div>
          <div className="col-md-8 screen-image"></div>
        </div>
      </div>
      <div
        className="d-flex flex-column"
        style={{ height: "500px", backgroundColor: "black", color: "gray" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-4">
              <div>Flex item 1</div>
              <div>Flex item 2</div>
              <div>Flex item 3</div>
              <div>Flex item 4</div>
            </div>
            <div className="col-md-4 p-4">
              <div>Flex item 1</div>
              <div>Flex item 2</div>
              <div>Flex item 3</div>
              <div>Flex item 4</div>
            </div>
            <div className="col-md-4 p-4">
              <div>Flex item 1</div>
              <div>Flex item 2</div>
              <div>Flex item 3</div>
              <div>Flex item 4</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="p-2">Flex item</div>
        </div>
        <div className="mt-auto p-2 text-center">
          All right reserved &#169;2020
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
