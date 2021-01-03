import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Question from "./Question";
import CustomModal from "./Modal";
import { FcMultipleInputs, FcAbout } from "react-icons/fc";
import "../styles/DoQuiz.css";
import { MdTimer } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { LayoutContext } from "./NewLayout";
import { FiCheckCircle } from "react-icons/fi";

const question = [
  {
    questionText: "What is the capital of Indonesia?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Bangkok", isCorrect: false },
      { answerText: "Jekardah", isCorrect: true },
    ],
  },
  {
    questionText: "What is the point of trying?",
    answerOptions: [
      { answerText: "To be good", isCorrect: true },
      { answerText: "To be fair", isCorrect: false },
      { answerText: "To be continued", isCorrect: false },
      { answerText: "To be wrong", isCorrect: false },
    ],
  },
  {
    questionText: "Who is playing spiderman role?",
    answerOptions: [
      { answerText: "Toby Maguire", isCorrect: true },
      { answerText: "Chris Hemsworth", isCorrect: false },
      { answerText: "Robert Downey .Jr", isCorrect: false },
      { answerText: "Channing Tatum", isCorrect: false },
    ],
  },
  {
    questionText: "Which one of the following cities is located in England?",
    answerOptions: [
      { answerText: "Dublin", isCorrect: false },
      { answerText: "Wellington", isCorrect: false },
      { answerText: "Cardiff", isCorrect: false },
      { answerText: "Sheffield", isCorrect: true },
    ],
  },
];

export default function DoQuiz() {
  const { isDarkMode, width } = useContext(LayoutContext);
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenModal() {
    setIsOpen(!isOpen);
  }
  const percentage = 66;
  const Confirmation = () => {
    return (
      <div className="p-4">
        <div style={{ fontSize: "14px" }}>
          <h6 style={{ textAlign: "center" }}>Do you want to proceed?</h6>
          <br />
          <div className="centering">
            <div>
              <Link to="/u/classroom/detail/do-quiz/result">
                <button className="button mr-4">
                  <FiCheckCircle className="ok-icon" size="18px" /> Yes
                </button>
              </Link>
              <button className="button" onClick={handleOpenModal}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <CustomModal
        isOpen={isOpen}
        onRequestClose={handleOpenModal}
        componentToPass={<Confirmation />}
      />
      {width <= 768 && <div style={{ height: "120px" }}></div>}
      <h5 className="mb-4">
        <b>Classroom</b>
      </h5>
      <div
        className="mb-4"
        style={{
          backgroundImage:
            "linear-gradient(to right top, #4ccfa7, #3bcab3, #33c5bd, #36bfc4, #43b9c8, #29b3d0, #09add7, #00a6dd, #009bed, #008efa, #007cff, #4e65ff)",
          backgroundColor: "#772CE8",
          borderRadius: "5px",
          height: "200px",
        }}
      >
        <div className="classroom-detail p-4 text-white d-flex align-items-start flex-column">
          <div>
            <b style={{ fontSize: "16px" }}>
              Sistem Keamanan dan Teknologi Informasi - 4KA21
            </b>
          </div>
          <div>
            <span className="mr-2">
              <FcAbout size="20px" />
            </span>
            Kelas ini untuk mahasiswa Gunadarma
          </div>
          <div className="mt-auto">
            <div>Teacher: </div>
            <span className="mr-2">
              <img
                src="data:image/jpeg;base64,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"
                alt="teacher-pic"
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                }}
              />
            </span>
            Casey Dubravka
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 order-md-2">
          <div
            className={`${
              width <= 768
                ? `fixed-top fixed-top-2 row ${
                    isDarkMode ? "bg-darks" : "bg-white"
                  }`
                : "sticky-top sticky-offset"
            } p-4`}
          >
            <div className={`${width <= 768 ? "col" : null}`}>
              <h5 className="mb-2">Detail</h5>
              <div className="mb-2">
                <MdTimer size="20px" /> 19:59
              </div>
              <div>Number of Questions: 4</div>
            </div>
            <div
              className={`${width <= 768 ? "col centering" : "centering pt-4"}`}
            >
              <div
                style={
                  width <= 768
                    ? {
                        width: "60px",
                        height: "60px",
                        position: "relative",
                        zIndex: 0,
                      }
                    : {
                        width: "100px",
                        height: "100px",
                        position: "relative",
                        zIndex: 0,
                      }
                }
              >
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "butt",

                    // Text size
                    textSize: "16px",

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: "#f88",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7",
                  })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 order-md-1">
          <div>
            <h5 className="mt-2 mb-4">
              <b>Quiz</b>
            </h5>
            <div
              className={
                isDarkMode
                  ? "mt-4 mb-4 p-4 bg-darks shadow-sm"
                  : "mt-4 mb-4 p-4 bg-white shadow-sm"
              }
              style={{
                width: "100%",
                borderRadius: "5px",
              }}
            >
              <h6 className="mb-2">Quiz 1 - Dasar Enkripsi</h6>
              <p>
                <span className="mr-2 mb-4">
                  <FcAbout />
                </span>{" "}
                Kerjakan kuis dengan teliti
              </p>
              <Question question={question} />
              <button
                className="button"
                style={{ borderRadius: "5px", padding: "5px 20px" }}
                onClick={handleOpenModal}
              >
                <FcMultipleInputs size="20px" /> Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
