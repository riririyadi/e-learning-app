import React, { useState, useEffect, useRef } from "react";
import "../styles/LandingPage.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useSpring, animated } from "react-spring";
import Footer from "./Footer"


const calcY = (o) => `translateY(${o * -0.1}px)`;
const calcMinY = (o) => `translateY(${o * 0.1}px)`;
const calcX = (o) => `translateX(${o * 0.1}px)`;
const calcMinX = (o) => `translateX(${o * -0.1}px)`;

function LandingPage() {
  const ref = useRef();
  const [width, setWidth] = useState(window.innerWidth);
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    if (!ref.current) return;
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
  };

 useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
 document.title = "E-learning | Home"
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <Navbar />
      <div className="jumbotron-fluid" ref={ref}>
        <div className="container">
          <animated.div
            className="jumbotron-content image-bg"
            style={{ transform: offset.interpolate(calcMinY) }}
          >
            <animated.div
              speed={0.2}
              className="tag-line"
              style={{ transform: offset.interpolate(calcY) }}
            >
              <div className="card-content">
                <h1 className="line-1">
                  <b>Make Learning Easier</b>
                </h1>
                <div className="line-2">
                  <b>No more difficulties to study, everywhere.</b>
                </div>
              </div>
              <Link to="/register">
                <button className="get-started-btn mt-4">
                  <b>Get Started</b>
                </button>
              </Link>
            </animated.div>
          </animated.div>
        </div>
      </div>

      <animated.div
        className="tag-bar container centering"
        style={{
          height: "400px",
          transform: offset.interpolate(calcY),
        }}
      >
        <div>
          <h1 className="text-center">
            <b>Who this is for?</b>
          </h1>

          <h5 className="text-center">
            <i>"This App is for everyone who wants to learn and teach."</i>
          </h5>
        </div>
      </animated.div>
      <div className="p-4 mb-4">
        <animated.div
          className="container shadow"
          style={width < 768 ?  {height: "500px",
            backgroundColor: "black",
            color: "white",
            padding: "40px",
            borderRadius: "15px",
          } : {
            height: "500px",
            transform: offset.interpolate(calcMinX),
            backgroundColor: "black",
            color: "white",
            padding: "40px",
            borderRadius: "15px",
          }}
        >
          <div className="row" style={{ height: "100%" }}>
            <div className="col-md-4 order-md-2">
              <h3>Solve more tasks </h3>
              <h5>Get more tasks done easily.</h5>
            </div>
            <div className="col-md-8 order-md-1 image-bg-2"> </div>
          </div>
        </animated.div>
      </div>
           <div className="p-4 mb-4">
      <animated.div
        className="container shadow"
        style={width < 768 ?  {height: "500px",
            backgroundColor: "white",
            color: "black",
            padding: "40px",
            borderRadius: "15px",
          } : {
          height: "500px",
          transform: offset.interpolate(calcX),
          padding: "50px",
          backgroundColor: "white",
          borderRadius: "15px",
        }}
      >
        <div className="row" style={{ height: "100%" }}>
          <div className="col-md-4">
            <h3>Interact with your classmates</h3>
            <h5>Get more friends in community.</h5>
          </div>
          <div className="col-md-8 image-bg-3"></div>
        </div>
      </animated.div>
           </div>
     <Footer />
    </>
  );
}

export default LandingPage;
