import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsFunnel, BsTrash, BsThreeDots } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { RiSettingsLine } from "react-icons/ri";
import { LayoutContext } from "./NewLayout";
import { AiOutlinePlus, AiOutlinePlusCircle } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import CustomModal from "./Modal";
import "../styles/Task.css";

export default function Task() {
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
  const taskData = [
    {
      task_name: "Tugas Analisa Sistem 1",
      class: "4KA21",
      subject: "Analisis Kinerja Sistem",
      status: "open",
      due_date: "23 Desember 2020 - 12:00 AM",
    },
    {
      task_name: "Tugas 1 Requirement Documents",
      class: "4KA21",
      subject: "PPSI",
      status: "open",
      due_date: "23 Januari 2021 - 12:00 AM",
    },
    {
      task_name: "Task 1",
      class: "4KA21",
      subject: "Algoritma dan pemrograman",
      status: "closed",
      due_date: "23 Januari 2021 - 12:00 AM",
    },
    {
      task_name: "Task 1",
      class: "4KA21",
      subject: "Manajemen Layanan Sistem Informasi",
      status: "open",
      due_date: "23 Desember 2020 - 12:00 AM",
    },
    {
      task_name: "Tugas 2 Proposal Analisis",
      class: "4KA21",
      subject: "PPSI",
      status: "Closed",
      due_date: "23 Desember 2020 - 12:00 AM",
    },
  ];

  return (
    <>
      <div className="mb-4 d-flex bd-highlight">
        <div className="bd-highlight">
          <h5>
            <b>Task</b>
          </h5>
        </div>
        <div className="ml-4 bd-highlight" style={{ fontSize: "15px" }}>
          <Link
            to="/u/task/create-new-task"
            style={isDarkMode ? { color: "#F5F5F7" } : { color: "#000000" }}
          >
            <span data-tip="Create a new task" data-for="create-task">
              <ReactTooltip
                id="create-task"
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
          <h6>List of Tasks</h6>
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
          {taskData.map((task, i) => (
            <tr key={i} className={`${isDarkMode ? "tr-dark" : "tr-light"}`}>
              <td>
                <input
                  type="checkbox"
                  value={selectedRow}
                  onChange={() => setSelectedRow((prevState) => !prevState)}
                />
              </td>
              <td data-toggle="tooltip" title="Review">
                {task.task_name}
              </td>
              <td>{task.class}</td>
              <td>{task.subject}</td>
              <td>
                <span
                  className={`status ${
                    task.status === "open" ? "open" : "closed"
                  } ${isDarkMode ? "text-white dark-open" : null} `}
                >
                  {task.status}
                </span>
              </td>
              <td>{task.due_date}</td>
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
                        to="/u/task/edit"
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
                          ? {
                              cursor: "pointer",
                            }
                          : { color: "black", cursor: "pointer" }
                      }
                    >
                        <BiPencil />
                        <span className="ml-2">Edit</span>
                    </div>
                      </Link>
                    <div
                      className={`dropdown-item rounded  ${
                        isDarkMode ? "dark-mode" : "light"
                      } pl-2`}
                      style={
                        isDarkMode
                          ? {
                              cursor: "pointer",
                            }
                          : { cursor: "pointer" }
                      }
                      onClick={handleOpenModal}
                    >
                        <BsTrash />
                        <span className="ml-2">Delete</span>
                    </div>
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
    </>
  );
}
