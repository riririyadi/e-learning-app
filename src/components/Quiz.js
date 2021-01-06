import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsFunnel, BsTrash, BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus, AiOutlinePlusCircle } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import { BiPencil } from "react-icons/bi";
import { RiSettingsLine } from "react-icons/ri";
import { LayoutContext } from "./NewLayout";
import CustomModal from "./Modal";


export default function Quiz() {
  const { isDarkMode } = useContext(LayoutContext);
  const [selectedRow, setSelectedRow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenModal() {
    setIsOpen(!isOpen);
  }
  const Confirmation = () => {
    return (
      <div className="p-4">
        <div style={{ fontSize: "14px" }}>
          <h6 style={{ textAlign: "center" }}>Do you want to proceed?</h6>
          <br />
          <div className="centering">
            <div>
                <button className="button mr-4" onClick={handleOpenModal}>
                 Yes
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

  const quizData = [
    {
      quiz_name: "Quiz Analisa Sistem 1",
      class: "4KA21",
      subject: "Analisis Kinerja Sistem",
      status: "open",
      due_date: "23 Desember 2020 - 12:00 AM",
    },
    {
      quiz_name: "Quiz 1 Requirement Documents",
      class: "4KA21",
      subject: "PPSI",
      status: "open",
      due_date: "23 Desember 2020 - 12:00 AM",
    },
    {
      quiz_name: "Quiz 1",
      class: "4KA21",
      subject: "Algoritma dan pemrograman",
      status: "closed",
      due_date: "23 Desember 2020 - 12:00 AM",
    },
    {
      quiz_name: "Quiz 1",
      class: "4KA21",
      subject: "Manajemen Layanan Sistem Informasi",
      status: "open",
      due_date: "23 Desember 2020 - 12:00 AM",
    },
    {
      quiz_name: "Quiz 2 Proposal Analisis",
      class: "4KA21",
      subject: "PPSI",
      status: "Closed",
      due_date: "23 Desember 2020 - 12:00 AM",
    },
  ];
  return (
    <div>
      <div className="mb-4 d-flex bd-highlight">
        <div className="bd-highlight">
          <h5>
            <b>Quiz</b>
          </h5>
        </div>
        <div className="ml-4 bd-highlight" style={{ fontSize: "15px" }}>
          <Link
            to="/u/quiz/create-new-quiz"
            style={isDarkMode ? { color: "#F5F5F7" } : { color: "#000000" }}
          >
            <span data-tip="Create a new quiz" data-for="create-quiz">
              <ReactTooltip
                id="create-quiz"
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
      <div className="d-flex">
        <div className="centering">
          <h6>List of Quizes</h6>
        </div>
        <div className="centering mb-2 ml-auto" style={{ width: "200px" }}>
          <BsFunnel size="24px" />
          <input
            className={
              isDarkMode ? "ml-4 input-field-dark-mode" : "ml-4 input-field"
            }
            placeholder="Search"
            type="text"
          />
        </div>
      </div>
      <table className="table table-borderless table-responsive-sm">
        <thead>
          <tr className={`${isDarkMode ? "tr-dark" : "tr-light"}`}>
            <th scope="col">
              <input
                type="checkbox"
                value={selectedRow}
                onChange={() => setSelectedRow((prevState) => !prevState)}
              />
            </th>
            <th scope="col">Task Name</th>
            <th scope="col">Class</th>
            <th scope="col">Subject</th>
            <th scope="col">Status</th>
            <th scope="col">Due Date</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className={isDarkMode ? "bg-darks" : "bg-white"}>
          {quizData.map((quiz, i) => (
            <tr key={i} className={`${isDarkMode ? "tr-dark" : "tr-light"}`}>
              <td>
                <input
                  type="checkbox"
                  value={selectedRow}
                  onChange={() => setSelectedRow((prevState) => !prevState)}
                />
              </td>

              <td>{quiz.quiz_name}</td>
              <td>{quiz.class}</td>
              <td>{quiz.subject}</td>
              <td>
                <span
                  className={`status ${
                    quiz.status === "open" ? "open" : "closed"
                  } ${isDarkMode ? "text-white dark-open" : null} `}
                >
                  {quiz.status}
                </span>
              </td>
              <td>{quiz.due_date}</td>
              <td>
                <div className="dropdown">
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
                        to="/u/quiz/edit"
                        style={
                          isDarkMode
                            ? { color: "#F5F5F7" }
                            : { color: "#000000" }
                        }
                      >
                    <div
                      className={`dropdown-item rounded ${
                        isDarkMode ? "dark-mode" : "light"
                      } pl-2`}
                      style={
                         isDarkMode
                        ? { cursor: "pointer",  color: "#F5F5F7" }                          
                        : { cursor: "pointer", color: "#000000"  }
                      }
                    >
                        <BiPencil />
                        <span className="ml-2">Edit</span>
                    </div>
                      </Link>
                      <Link
                        to="#"
                        style={
                          isDarkMode
                            ? { color: "#F5F5F7" }
                            : { color: "#000000" }
                        }
                      >
                    <div
                      className={`dropdown-item rounded  ${
                        isDarkMode ? "dark-mode" : "light"
                      } pl-2`}
                      style={
                       isDarkMode
                        ? { cursor: "pointer",  color: "#F5F5F7" }                          
                        : { cursor: "pointer", color: "#000000"  }
                      }
                      onClick={handleOpenModal}
                    >
                        <BsTrash />
                        <span className="ml-2">Delete</span>
                    </div>
                      </Link>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CustomModal
        isOpen={isOpen}
        onRequestClose={handleOpenModal}
        componentToPass={<Confirmation />}
      />
    </div>
  );
}
