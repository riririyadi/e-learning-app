import React, { useState, useContext, useEffect } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDots, BsTrash } from "react-icons/bs";
import { LayoutContext } from "./NewLayout";
import ReactTooltip from "react-tooltip";
import CustomModal from "./Modal";
import axios from "axios";
import { Loader } from "./Loader";

const bgColor = [
  "#17A2B8",
  "#772CE8",
  "#DC3545",
  "#B34ED4",
  "#F0D06E",
  "#00D48C",
];

const bgColors = Array.from({ length: 5 }).fill(bgColor).flat();

export default function ManageClassroom() {
  const match = useRouteMatch();

  const { isDarkMode } = useContext(LayoutContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [classroom, setClassroom] = useState({});
  const [lessons, setLessons] = useState([]);
  const [error, setError] = useState("");
  const [participants, setParticipants] = useState([]);
  const { id } = useParams();

  const [part, setPart] = participants.slice(5);

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
      setParticipants(res.data.students);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    document.title = "E-learning | Classroom";
    getDetailClassroom();
  }, []);

  function handleOpenModal() {
    setIsOpen(!isOpen);
  }

  function handleOpenModal2() {
    setIsOpen2(!isOpen2);
  }
  const Confirmation = () => {
    return (
      <div className="p-4">
        <div style={{ fontSize: "14px" }}>
          <h6 style={{ textAlign: "center" }}>Do you want to proceed?</h6>
          <br />
          <div className="centering">
            <div>
              <button className="button mr-4" onClick={handleOpenModal2}>
                Yes
              </button>
              <button className="button" onClick={handleOpenModal2}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

const ClassroomParticipants = () => {

  return (
    <div
      className={`${isDarkMode ? "dark-mode-area" : null} pb-4`}
      style={{ fontSize: "14px" }}
    >
      <div
        className="p-4"
        style={{
          backgroundImage: "linear-gradient(to bottom right,#772CE8,#caf8fc)",
          borderRadius: "10px 10px 0px 0px",
        }}
      >
        {" "}
        <h6>{classroom.name}</h6>
        <div>
          <span className="mr-2">
            <FcAbout size="20px" />
          </span>
          {classroom.description}
        </div>
      </div>
      <div className="pl-4 pt-2 pb-2">
        <b>List of Participants</b>
      </div>
      <div
        className="p-2"
        style={{ width: "100%", maxHeight: "250px", overflowY: "auto" }}
      >
        <table className="table  table-borderless">
          <thead>
            <tr
              style={
                isDarkMode
                  ? { color: "#e6e6e6", borderBottom: "1px solid #0E0E10" }
                  : { color: "#2a2a2a", borderBottom: "1px solid #c3c3c3" }
              }
            >
              <th scope="col">No</th>
              <th scope="col">Participant</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((p, i) => (
              <tr
                key={i}
                style={
                  isDarkMode
                    ? { color: "#e6e6e6", borderBottom: "1px solid #0E0E10" }
                    : { color: "#2a2a2a", borderBottom: "1px solid #c3c3c3" }
                }
              >
                <th scope="row">{i + 1}</th>
                <td>
                  <FaUserCircle /> {p.name}
                </td>
                <td>{p.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
        <>  {error? <div className="main-area-center-error">{error}</div>:<>
          <div
            className="mb-4 shadow-sm"
            style={{
              backgroundImage:
                "linear-gradient(to right bottom, #8356d6, #995ed8, #ac66d9, #bd70db, #cd7add, #e47bce, #f47ebf, #ff85b1, #ff8f91, #ffa078, #edb46c, #d3c671)",
              borderRadius: "10px",
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
                <div>code: {classroom.code}</div>
                <div className="mb-2">Participants: </div>
                {participants.slice(0, 5).map((p, i) => (
                  <span
                    key={i}
                    data-tip={p.name}
                    data-for="participant"
                    className="data-tooltip-text"
                  >
                    <ReactTooltip
                      place="top"
                      id="participant"
                      type="dark"
                      effect="solid"
                      data-offset={{ top: 20 }}
                    />
                    {p.picture ? (
                      <img
                        src={p.picture}
                        alt="participant-pic"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <FaUserCircle size={30} />
                    )}
                  </span>
                ))}
               {participants.length > 5 && <span>
                                 <span
                                   data-toggle="tooltip"
                                   title="See all"
                                   onClick={handleOpenModal}
                                   style={{
                                     cursor: "pointer",
                                     marginLeft: "-5px",
                                     fontSize: "10px",
                                     backgroundColor: "plum",
                                     padding: "10px 6px",
                                     borderRadius: "50%",
                                   }}
                                 >
                                   <b>{participants.length - 5}</b>
                                 </span>
                               </span>}
              </div>
            </div>
          </div>
          <CustomModal
            isOpen={isOpen}
            onRequestClose={handleOpenModal}
            componentToPass={<ClassroomParticipants />}
          />
          <div className="mb-3 d-flex bd-highlight">
            <div className="bd-highlight">
              <h5>
                <b>Lesson</b>
              </h5>
            </div>
            <div className="ml-4 bd-highlight" style={{ fontSize: "15px" }}>
              <Link
                to={{pathname: `${match.url}/create-new-lesson`, state:{classroom}}}
                style={isDarkMode ? { color: "#F5F5F7" } : { color: "#000000" }}
              >
                <span
                  data-tip="Create a new lesson"
                  data-for="create-classroom"
                >
                  <ReactTooltip
                    id="create-classroom"
                    place="right"
                    type="dark"
                    effect="solid"
                    offset={{ right: 10 }}
                  />
                  <AiOutlinePlusCircle size="20px" />
                </span>
              </Link>
            </div>
          </div>
          <div>
            {lessons.map((lesson, i) => (
              <div
                className="mb-4 shadow-sm d-flex bd-highlight"
                style={{ borderRadius: "5px" }}
                key={lesson.id}
              >
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
                  <div className="mb-2 d-flex">
                    <div>
                      {" "}
                      Lesson {i + 1} - {lesson.name}
                    </div>
                    <div className="dropdown ml-auto">
                      <button
                        className={`${
                          isDarkMode ? "dark-overlay-btn" : "overlay-btn"
                        } centering`}
                        style={{
                          border: "none",
                          borderRadius: "30px",
                          padding: "5px",
                        }}
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-toggle-second="tooltip"
                        data-placement="right"
                        title="More options"
                      >
                        <BsThreeDots />
                      </button>
                      <div
                        className={`dropdown-menu shadow-sm dropdown-menu-right ${
                          isDarkMode
                            ? "dropdown-menu-dark"
                            : "dropdown-menu-light"
                        } p-2 mt-2 mb-2`}
                      >
                        <Link
                          to={{pathname:`${match.url}/edit-lesson/${lesson.id}`, state:{classroom}}}
                          style={
                            isDarkMode
                              ? { color: "#F5F5F7" }
                              : { color: "#000000" }
                          }
                        >
                          <div
                           className={`dropdown-item rounded  ${
                                isDarkMode ? "dd-dark-mode" : "light"
                              } pl-2`}
                              style={
                                isDarkMode
                                  ? { cursor: "pointer", color: "#F5F5F7" }
                                  : { cursor: "pointer", color: "#000000" }
                              }
                          >
                            <BiPencil />
                            <span className="ml-2">Edit</span>
                          </div>
                        </Link>
                       
                      </div>
                    </div>
                    <CustomModal
                      isOpen={isOpen2}
                      onRequestClose={handleOpenModal2}
                      componentToPass={<Confirmation />}
                      overlayStack={true}
                    />
                  </div>

                  <div className="mb-2">
                    <span className="mr-2">📙</span>
                    Materi {lesson.materi_file_name}
                  </div>
                  <div className="mb-2">
                    <span className="mr-2">📑</span>
                    Tugas {i + 1}
                  </div>
                  <div className="mb-2">
                    <span className="mr-2">🧩</span>
                    Quiz {i + 1}
                  </div>
                </div>
              </div>
            ))}
          </div></>}
        </>
      )}
    </div>
  );
}
