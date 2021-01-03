import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsFunnel, BsTrash, BsThreeDots } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { RiSettingsLine } from "react-icons/ri";
import { LayoutContext } from "./NewLayout";

export default function Quiz() {
  const { isDarkMode } = useContext(LayoutContext);
  const [selectedRow, setSelectedRow] = useState(true);

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
      <h5 className="mb-4">
        <b>Quiz List</b>
      </h5>
      <div className="mb-2">
        <BsFunnel size="20px" />
        <input
          className={`ml-2  
            ${isDarkMode ? "input-field-dark-mode" : "input-field"}
          `}
          placeholder="Search Task"
          type="text"
          style={{ width: "300px" }}
        />
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
                    <div
                      className={`dropdown-item rounded ${
                        isDarkMode ? "dark-mode" : "light-mode"
                      } pl-2`}
                      style={
                        isDarkMode
                          ? {
                              cursor: "pointer",
                            }
                          : { color: "black", cursor: "pointer" }
                      }
                    >
                      <Link
                        to="#"
                        style={
                          isDarkMode
                            ? { color: "#F5F5F7" }
                            : { color: "#000000" }
                        }
                      >
                        <RiSettingsLine />
                        <span className="ml-2">Edit</span>
                      </Link>
                    </div>
                    <div
                      className={`dropdown-item rounded  ${
                        isDarkMode ? "dark-mode" : "light-mode"
                      } pl-2`}
                      style={
                        isDarkMode
                          ? {
                              cursor: "pointer",
                            }
                          : { cursor: "pointer" }
                      }
                      onClick={(e) => alert("oh hi")}
                    >
                      <Link
                        to="#"
                        style={
                          isDarkMode
                            ? { color: "#F5F5F7" }
                            : { color: "#000000" }
                        }
                      >
                        <BsTrash />
                        <span className="ml-2">Delete</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
