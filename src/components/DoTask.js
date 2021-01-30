import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams, useLocation, useRouteMatch } from "react-router-dom";
import Question from "./Question";
import CustomModal from "./Modal";
import { FcMultipleInputs, FcAbout } from "react-icons/fc";
import "../styles/DoQuiz.css";
import { MdTimer } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { LayoutContext } from "./NewLayout";
import { FiCheckCircle } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";
import moment from "moment";



export default function DoTask() {
  const [text,setText] = useState("");
    let location = useLocation();
    let match = useRouteMatch();
  const { classroom, detailLesson } = location.state
  const timeFormat = "YYYY-MM-DD HH:mm:ss";
  
  useEffect(() => {
    document.title = "E-learning | Task"
  }, []);
  const { isDarkMode, width } = useContext(LayoutContext);
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenModal() {
    setIsOpen(!isOpen);
  }

  const [error2, setError2]=useState("")
const [startAt, setStartAt] = useState(new Date());
const [finishAt, setFinishAt] = useState("");
const [duration, setDuration] = useState(60);
const setTimeDuration = () => {
const due = moment(detailLesson.due_date)
  const timeDiff = due.diff(startAt, "minutes");
  if (timeDiff > duration){
    return duration
  } else {
    return timeDiff
  }
}

  const SubmitAttempt = async () => {
    try {
    setIsSubmitting(true)
      const res = await axios.post(`http://elearning.havicrm.tk/api/task/${id}/attempt`, answerData, {
        headers: header,
      });
      console.log(res.data)
          history.push({pathname: `${match.url}/result`, state:{classroom}});
    } catch (err) {
      setError2(err.message);
      console.log(err);
    }
    setIsSubmitting(false);
  };


 const answerData = {
    start_at : moment(startAt).format(timeFormat),
    finished_at: finishAt,
    answer: text
  }

  console.log(answerData)

const handleSubmit = (e) => {
e.preventDefault();
 localStorage.removeItem("min");
  localStorage.removeItem("sec");
  localStorage.removeItem("myAnswer");
  localStorage.removeItem("checked");
   localStorage.removeItem("shuffledQuestion");
   localStorage.removeItem("dummyAnswer");

SubmitAttempt();
}


  const [minutes, setMinutes] = useState(localStorage.getItem("min") || setTimeDuration());
  const [seconds, setSeconds] = useState(localStorage.getItem("sec") || 0);
  const [min, setMin] = useState();
  const [sec, setSec] = useState();


  useEffect(() => {
    document.title = "E-learning | Quiz";  
  }, []);


  useEffect(() => {
    if (!localStorage.getItem("min") && !localStorage.getItem("sec")) {
      localStorage.setItem("min", minutes);
      localStorage.setItem("sec", seconds);
    }

    localStorage.setItem("min", minutes);
    localStorage.setItem("sec", seconds);

    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          handleSubmit();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const token = localStorage.getItem("token");

  const header = {
    Authorization: `Bearer ${token}`,
  };


   let history = useHistory();
  let {id} = useParams();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState({}) 
  const [isSubmitting, setIsSubmitting] = useState(false);

   const getTask = async () => {
    try {
      const res = await axios.get(
        `http://elearning.havicrm.tk/api/task/${id}`,
        {
          headers: header,
        }
      );
      console.log(res.data);
      setTask(res.data)
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setIsLoading(false);
  };


useEffect(() => {
getTask();
}, [])


  const Confirmation = () => {
    return (
      <div className="p-4">
        <div style={{ fontSize: "14px" }}>
          <h6 style={{ textAlign: "center" }}>Do you want to proceed?</h6>
          <br />
          <div className="centering" onClick={handleSubmit}>
            <div>
                <button className="button mr-4">Yes
                </button>
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
      <div className="row">
        <div className="col-md-4 order-md-2">
          <div
            className={` ${
              width <= 768
                ? `fixed-top fixed-top-2 row shadow-sm ${
                    isDarkMode ? "bg-dark-nav" : "bg-white"
                  }`
                : "sticky-top sticky-offset"
            } p-4`}
          >
            <div className={`${width <= 768 ? "col" : null}`}>
              <h5 className="mb-2">Detail</h5>
              <div
                className="mb-2"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                <MdTimer size="24px" />
                {minutes === 0 && seconds === 0 ? (
                  <span className="ml-2" style={{ color: "red" }}>
                    Time is up
                  </span>
                ) : (
                  <span
                    className="ml-2"
                    style={
                      minutes < 5 ? { color: "red" } : { color: "#00d48c" }
                    }
                  >
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                  </span>
                )}
              </div>
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
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 order-md-1">
          <div>
            <h5 className="mt-2 mb-4">
              <b>Task</b>
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
              <h6 className="mb-2">Task 1 - Dasar Enkripsi</h6>
              <p>
                <span className="mr-2 mb-4">
                  <FcAbout />
                </span>{" "}
                Kerjakan tugas dengan teliti
              </p>
              <div className="mb-4 p-4"
        style={{ borderRadius: "5px", border: "1px solid #2b2b2b" }}
      >
        <div>
           <h6>Question</h6>
          <p>{task.description}</p>
        </div>   
        <div className="editor mb-4">
            <CKEditor 
            editor = {ClassicEditor}
            data = { text}
            onChange ={(event, editor) => {
                const data = editor.getData();
                setText(data)
            }}
            />
        </div>

      </div>
              <button className="button mt-4" onClick={() => {setFinishAt(moment().format(timeFormat)); handleOpenModal()}}>
                <FcMultipleInputs size="20px" /> Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
