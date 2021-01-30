import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { FcBinoculars, FcAbout } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Result() {

  let location = useLocation();
  const { classroom } = location.state

  useEffect(()=>{
    document.title = "E-learning | Result"
  },[])

  return (
    <div>
      <h5 className="mb-4"><b>Classroom</b></h5>
      <div
        className="mb-4"
        style={{
          backgroundColor: "#772CE8",
          borderRadius: "5px",
          height: "200px",
        }}
      >
        <div className="classroom-detail p-4 text-white d-flex align-items-start flex-column">
          <div>
            <b style={{ fontSize: "16px" }}>
              {classroom.subject} - {classroom.name}
            </b>
          </div>
          <div>
            <span className="mr-2">
              <FcAbout size="20px" />
            </span>
           {classroom.description}
          </div>
          <div className="mt-auto">
            <div>Teacher: </div>
          <span className="mr-2">
                  {classroom.teacher.pic ? (
                    <img
                      src={classroom.teacher.pic}
                      alt="teacher-pic"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <FaUserCircle size={30} />
                  )}
            </span>
            {classroom.teacher.name}
          </div>
        </div>
      </div>
      <h5 className="mt-4 mb-4"><b>Result</b></h5>
      <div
        className="mb-4"
        style={{
          backgroundColor: "#00D48C",
          borderRadius: "5px",
          height: "200px",
          position: "relative",
        }}
      >
        <div className="quiz-score p-4 d-flex align-items-start flex-column">
          <div>
            {" "}
            <h6>Your Score</h6>
            <p style={{ fontSize: "20px", color: "black" }}>
              <span
                style={{
                  color: "white",
                  fontSize: "30px",
                  backgroundColor: "#F0D06E",
                  padding: "10px",
                  borderRadius: "10px",
                  marginRight: "10px",
                }}
              >
                74
              </span>
              /100
            </p>
          </div>
          <div className="mt-auto">
            <Link to="#" className="dark-link">
              <FcBinoculars size="20px" />{" "}
              <span className="ml-2">Review the answers</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
