import React, { useState, useContext, useEffect } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import CustomModal from "./Modal";
import { LayoutContext } from "./NewLayout";
import axios from "axios";
import { Loader } from "./Loader";
import moment from "moment";

export default function DetailClassroom() {
  const { isDarkMode } = useContext(LayoutContext);
  let match = useRouteMatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  function handleOpenModal() {
    setIsOpen(!isOpen);
  }

  function handleOpenModal2() {
    setIsOpen2(!isOpen2);
  }
  const bgColor = [
    "#17A2B8",
    "#772CE8",
    "#DC3545",
    "#B34ED4",
    "#F0D06E",
    "#00D48C",
  ];

  const [classroom, setClassroom] = useState({});
  const [detailLesson, setDetailLesson] = useState({});
  const [detailQuiz, setDetailQuiz] = useState({});
  const [currentLesson, setCurrentLesson] = useState("");
  const [quizLength, setQuizLength] = useState([]);
  const [isQuizLoading, setIsQuizLoading] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [error, setError] = useState("");
  const { id } = useParams();

console.log(detailLesson)
  const token = localStorage.getItem("token");

  const header = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const getDetailClassroom = async () => {
    try {
      const res = await axios.get(
        `http://elearning.havicrm.tk/api/classroom/${id}`,
        { headers: header }
      );
      console.log(res.data);
      setClassroom(res.data);
      setLessons(res.data.lessons);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    document.title = "E-learning | Classroom";
    getDetailClassroom();
  }, []);

  const bgColors = Array.from({ length: 5 }).fill(bgColor).flat();


 
  const QuizDetail = () => {

    return (
      <div className="p-4" style={{ fontSize: "14px" }}>
      {isQuizLoading? <div className="centering mb-4 mt-4"><Loader /></div>:
        <div>
          <h6 className="mb-4 text-center">
            <b>Quiz {currentLesson + 1}</b>
          </h6>
          <div className="mb-2">
            <span>
              <b>Due Date</b>
            </span>
            : {detailLesson.due_date}
          </div>
          <div className="mb-2">
            <span>
              <b>Time Limits</b>
            </span>
            : {detailLesson.duration} minutes
          </div>
          <div className="mb-2">
            <span>
              <b>Attempts Allowed</b>
            </span>
            : 1
          </div>

          {moment().isAfter(detailLesson.due_date) ?<> <div className="text-center mt-4" style={{color:"red", backgroundColor:"pink"}}>The Quiz is due</div>  
          <div className="mt-4 centering">
              <button className="button" onClick={handleOpenModal}>
                Back
              </button>
          </div> </>: 
         <> <div
            className="text-center mt-4 p-2"
            style={{
              color: "green",
              backgroundColor: "lightgreen",
              borderRadius: "5px",
            }}
          >
            The Quiz is open
        </div>
          <div className="mt-4 centering">
            <div>
              <Link to={{pathname :`${match.url}/do-quiz/${detailLesson.quiz_id}`, state: { classroom, detailLesson } }}>
                <button className="button mr-4">Start
                </button>
              </Link>
              <button className="button" onClick={handleOpenModal}>
                Back
              </button>
            </div>
          </div></>}
        </div>}
      </div>
    );
  };

  const TaskDetail = () => {
    return (
      <div className="p-4" style={{ fontSize: "14px" }}>
        <div>
          <h6 className="mb-4 text-center">
            <b>Task {currentLesson + 1}</b>
          </h6>
          <div className="mb-2">
            <span>
              <b>Due Date</b>
            </span>
            : {detailLesson.due_date}
          </div>
          <div className="mb-2">
            <span>
              <b>Time Limits</b>
            </span>
            : {detailLesson.duration}
          </div>
        
          <div className="mb-2">
            <span>
              <b>Attempts Allowed</b>
            </span>
            : 1
          </div>
          {/* <div className="text-center mt-4" style={{color:"red", backgroundColor:"pink"}}>The Task is not open yet</div> */}
          <div
            className="text-center mt-4 p-2"
            style={{
              color: "green",
              backgroundColor: "lightgreen",
              borderRadius: "5px",
            }}
          >
            The Task is open
          </div>
          <div className="mt-4 centering">
            <div>
              <Link to={{pathname :`${match.url}/do-task/${detailLesson.quiz_id}`, state: { classroom, detailLesson } }}>
                <button className="button mr-4">
                  ▶️
                  <span className="ml-1 ">Start</span>
                </button>
              </Link>
              <button className="button" onClick={handleOpenModal2}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <h5 className="mb-4">
        <b>Classroom</b>
      </h5>
      {isLoading ? (
        <div className="main-area-center-loader">
          <Loader />
        </div>
      ) : (
        <> {error? <div className="main-area-center-error">{error}</div>:<>
          <div
            className="mb-4"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #4ccfa7, #3bcab3, #33c5bd, #36bfc4, #43b9c8, #29b3d0, #09add7, #00a6dd, #009bed, #008efa, #007cff, #4e65ff)",

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
          <div>
            {lessons.map((lesson, i) => (
              <div className="mb-4 d-flex bd-highlight" key={i}>
                <div
                  style={{
                    width: "10px",
                    backgroundColor: `${bgColors[i]}`,
                  }}
                ></div>
                <div
                  className={isDarkMode ? "bg-darks" : "bg-white"}
                  style={{
                    width: "100%",
                    padding: "10px 10px 10px 20px",
                    borderRadius: "0px 5px 5px 0px",
                  }}
                >
                  <div className="mb-2">
                {lesson.name}
                  </div>
                  <div className="mb-2" style={{ cursor: "pointer" }}>
                    <span className="mr-2">📙</span>
                    Materi {lesson.materi_file_name}
                  </div>
                  <div
                    className="mb-2"
                   onClick={() => {handleOpenModal2(); setDetailLesson(lesson);setCurrentLesson(i)}}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="mr-2">📑</span>
                    Tugas {i + 1}
                  </div>
                  <div
                    onClick={() => {handleOpenModal(); setDetailLesson(lesson);setCurrentLesson(i)}}
                    className="mb-2"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="mr-2">🧩</span>
                    Quiz {i+1}
                  </div>
                </div>
              </div>
            ))}
          </div></>}
        </>
      )}
      <CustomModal
        isOpen={isOpen}
        onRequestClose={handleOpenModal}
        componentToPass={<QuizDetail />}
      />
      <CustomModal
        isOpen={isOpen2}
        onRequestClose={handleOpenModal2}
        componentToPass={<TaskDetail />}
        overlayStack={true}
      />
    </div>
  );
}
