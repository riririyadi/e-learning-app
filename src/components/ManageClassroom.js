import React, { useState, useContext,useEffect } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiTrash } from "react-icons/hi";
import { BiPencil } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { RiSettingsLine } from "react-icons/ri";
import {
  BsThreeDots,
  BsBoxArrowInUpRight,
  BsPlusCircle,
  BsTrash,
} from "react-icons/bs";
import { LayoutContext } from "./NewLayout";
import ReactTooltip from "react-tooltip";
import CustomModal from "./Modal";
import axios from "axios";

const bgColor = [
  "#17A2B8",
  "#772CE8",
  "#DC3545",
  "#B34ED4",
  "#F0D06E",
  "#00D48C",
];

const bgColors = Array.from({ length: 5 }).fill(bgColor).flat();

const lessonData = [
  {
    lessonName: "Dasar Enkripsi",
    materi: "Dasar Enkripsi",
    tugas: "Dasar Enkripsi",
    quiz: "Dasar Enkripsi",
  },
  {
    lessonName: "Teknik-Teknik Enkripsi",
    materi: "Teknik Enkripsi",
    tugas: "Teknik Enkripsi",
    quiz: "Teknik Enkripsi",
  },
  {
    lessonName: "Pengamanan Sistem Berkas",
    materi: "Pengamanan Sistem Berkas",
    tugas: "Pengamanan Sistem Berkas",
    quiz: "Pengamanan Sistem Berkas",
  },
  {
    lessonName: "Cyber Security",
    materi: "Cyber Security",
    tugas: "Cyber Security",
    quiz: "Cyber Security",
  },
  {
    lessonName: "Keamanan Sistem Operasi",
    materi: "Keamanan Sistem Operasi",
    tugas: "Keamanan Sistem Operasi",
    quiz: "Keamanan Sistem Operasi",
  },
];

const ClassroomParticipants = () => {
  const { isDarkMode } = useContext(LayoutContext);

  const participants = [
    { name: "Frank Donnie Vardy", location: "Washington DC" },
    { name: "John Doe", location: "Massachusetts" },
    { name: "John Doe", location: "Arizona" },
    { name: "John Doe", location: "New York" },
    { name: "John Doe", location: "Connecticut" },
    { name: "John Doe", location: "Arizona" },
    { name: "John Doe", location: "Brooklyn" },
    { name: "John Doe", location: "Arizona" },
    { name: "John Doe", location: "California" },
    { name: "John Doe", location: "Arizona" },
    { name: "John Doe", location: "Arizona" },
    { name: "John Doe", location: "Arizona" },
    { name: "John Doe", location: "Arizona" },
    { name: "John Doe", location: "Arizona" },
    { name: "John Doe", location: "Manchester" },
    { name: "John Doe", location: "Arizona" },
    { name: "John Doe", location: "Arizona" },
    { name: "John Doe", location: "Arizona" },
    { name: "Peter Pane", location: "Arizona" },
    { name: "John Doe", location: "Arizona" },
    { name: "John Doe", location: "Arizona" },
    { name: "John Doe", location: "Arizona" },
    { name: "John Doe", location: "Arizona" },
    { name: "John Doe", location: "Arizona" },
    { name: "John Doe", location: "Arizona" },
  ];
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
        <h6>????????</h6>        
        <div>
          <span className="mr-2">
            <FcAbout size="20px" />
          </span>
       ?????
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

export default function ManageClassroom() {
const match = useRouteMatch();

  const { isDarkMode } = useContext(LayoutContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [classroom, setClassroom] = useState({})
  const { id } = useParams()

const token = localStorage.getItem("token");

  const header = {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  console.log(id)

const getDetailClassroom = async() => {
try{
  const res = await axios.get(`http://elearning.havicrm.tk/api/classroom/${id}`, {headers: header})
  console.log(res.data);
  setClassroom(res.data);
}catch(err){
console.log(err)
}
}

useEffect(() => {
getDetailClassroom();
}, [])


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
            
                <button className="button mr-4"  onClick={handleOpenModal2}>Yes</button>
              <button className="button" onClick={handleOpenModal2}>
                No
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
            <span
              data-tip="James"
              data-for="participant"
              className="data-tooltip-text"
            >
              <ReactTooltip
                place="top"
                id="participant"
                type="dark"
                effect="solid"
                data-offset={{ right: 20 }}
              />
              <img
                src="data:image/jpeg;base64,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"
                alt="participant-pic"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              />
            </span>
            <span
              className="data-tooltip-text"
              data-for="participant"
              style={{ marginLeft: "-5px" }}
              data-tip="Nina"
            >
              <ReactTooltip
                place="top"
                id="participant"
                type="dark"
                effect="solid"
                data-offset={{ right: 20 }}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9sPhJ2K4MmX1h112FoFMBG-XlrzDQdGKtw&usqp=CAU"
                alt="participant-pic"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              />
            </span>
            <span
              className="data-tooltip-text"
              data-for="participant"
              data-tip="Danny"
              style={{ marginLeft: "-5px" }}
            >
              <ReactTooltip
                place="top"
                id="participant"
                type="dark"
                effect="solid"
                data-offset={{ right: 20 }}
              />
              <img
                src="https://i.guim.co.uk/img/media/9d9759a25269ff4dd7f4c41bde320c4928bdfb65/0_24_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e4916223d76a56180788e7bfc1d25b02"
                alt="participant-pic"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              />
            </span>
            <span
              className="data-tooltip-text"
              data-for="participant"
              data-tip="Audrey"
              style={{ marginLeft: "-5px" }}
            >
              <ReactTooltip
                place="top"
                id="participant"
                type="dark"
                effect="solid"
                data-offset={{ right: 20 }}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQs4zMVfTQbMWTR9PFN9nLHD5G4QBZZVM7GA&usqp=CAU"
                alt="participant-pic"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              />
            </span>
            <span
              className="data-tooltip-text"
              data-for="participant"
              data-tip="Rae"
              style={{ marginLeft: "-5px" }}
            >
              <ReactTooltip
                place="top"
                id="participant"
                type="dark"
                effect="solid"
                data-offset={{ right: 20 }}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoi_Cm0DInvJKjm_qeufjU2f1pPxGHr4aRpg&usqp=CAU"
                alt="participant-pic"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              />
            </span>
            <span>
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
                <b>+20</b>
              </span>
            </span>
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
            to={`${match.url}/create-new-lesson`}
            style={isDarkMode ? { color: "#F5F5F7" } : { color: "#000000" }}
          >
            <span data-tip="Create a new lesson" data-for="create-classroom">
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
        {lessonData.map((data, i) => (
          <div
            className="mb-4 shadow-sm d-flex bd-highlight"
            style={{ borderRadius: "5px" }}
            key={data.lessonName}
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
                  Lesson {i + 1} - {data.lessonName}
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
                      isDarkMode ? "dropdown-menu-dark" : "dropdown-menu-light"
                    } p-2 mt-2 mb-2`}
                  >
                    <Link
                      to="/u/classroom/manage/edit-lesson"
                      style={
                        isDarkMode ? { color: "#F5F5F7" } : { color: "#000000" }
                      }
                    >
                      <div
                        className={`dropdown-item rounded ${
                          isDarkMode ? "dark-mode" : "light"
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
                    <Link
                      to="#"
                      style={
                        isDarkMode ? { color: "#F5F5F7" } : { color: "#000000" }
                      }
                    >
                      <div
                        className={`dropdown-item rounded  ${
                          isDarkMode ? "dark-mode" : "light"
                        } pl-2`}
                        style={
                          isDarkMode
                            ? { cursor: "pointer", color: "#F5F5F7" }
                            : { cursor: "pointer", color: "#000000" }
                        }
                        onClick={handleOpenModal2}
                      >
                        <BsTrash />
                        <span className="ml-2">Delete</span>
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
                Materi {data.materi}
              </div>
              <div className="mb-2">
                <span className="mr-2">📑</span>
                Tugas {data.tugas}
              </div>
              <div className="mb-2">
                <span className="mr-2">🧩</span>
                Quiz {data.quiz}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
