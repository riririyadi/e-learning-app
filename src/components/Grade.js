import React, { useContext } from "react";
import { BsFunnel, BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

import { RiFileChartLine } from "react-icons/ri";
import { LayoutContext } from "./NewLayout";
import { CgViewList } from "react-icons/cg";

export default function Grade() {
  const { isDarkMode } = useContext(LayoutContext);
  return (
    <>
      <h5 className="mb-4">
        <b>Grade</b>
      </h5>
      <div className="mb-2">
        <BsFunnel size="20px" />
        <input
          className={`ml-2  
            ${isDarkMode ? "input-field-dark-mode" : "input-field"}
          `}
          placeholder="Search for grade"
          type="text"
          style={{ width: "300px" }}
        />
      </div>
      <table className="table table-borderless table-responsive-sm">
        <thead>
          <tr className={`${isDarkMode ? "tr-dark" : "tr-light"}`}>
            <th scope="col">Class</th>
            <th scope="col">Subject</th>
            <th scope="col">Num of Participants</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className={isDarkMode ? "bg-darks" : "bg-white"}>
          {classGrade.map((data, i) => (
            <tr key={i} className={`${isDarkMode ? "tr-dark" : "tr-light"}`}>
              <td>{data.class}</td>
              <td>{data.subject}</td>
              <td>{data.numOfParticipants}</td>
              <td>
                <span
                  className={`status ${
                    data.status === "active" ? "open" : "closed"
                  } ${isDarkMode ? "text-white dark-open" : null} `}
                >
                  {data.status}
                </span>
              </td>
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
                        <CgViewList />
                        <span className="ml-2">View</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const classGrade = [
  {
    class: "4KA21",
    subject: "Networking",
    numOfParticipants: 47,
    status: "active",
  },
  {
    class: "Umum",
    subject: "Networking",
    numOfParticipants: 47,
    status: "active",
  },
  {
    class: "3KA22",
    subject: "Pemrograman Berbasis Objek",
    numOfParticipants: 17,
    status: "closed",
  },
  {
    class: "Umum",
    subject: "Networking",
    numOfParticipants: 47,
    status: "active",
  },
];
