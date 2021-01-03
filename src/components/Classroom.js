import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosLogIn } from "react-icons/io";
import { RiSettingsLine } from "react-icons/ri";
import { BsThreeDots, BsPlusCircle, BsTrash } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { LayoutContext } from "./NewLayout";
import "../styles/Classroom.css";
import ReactTooltip from "react-tooltip";

const classroomData = [
  { id: 1, subject: "PPSI", className: "4KA21" },
  {
    id: 2,
    subject: "Manajemen Sistem Informasi",
    className: "3KA21",
  },
  { id: 3, subject: "Sistem Multimedia", className: "4KA21" },
  {
    id: 4,
    subject: "Bahasa Inggris Bisnis",
    className: "4DB02",
  },
  {
    id: 5,
    subject: "Bahasa Inggris Bisnis",
    className: "4DB04",
  },
  { id: 6, subject: "Programming", className: "1KA21" },
  { id: 7, subject: "Networking", className: "3IA21" },
  { id: 8, subject: "Artificial Intellegence", className: "4KA21" },
  { id: 9, subject: "Sistem Terdistribusi", className: "4KA21" },
  { id: 10, subject: "Programming", className: "1KA21" },
  { id: 11, subject: "Networking", className: "3IA21" },
  { id: 12, subject: "Artificial Intellegence", className: "4KA21" },
  { id: 13, subject: "Sistem Terdistribusi", className: "4KA21" },
];

// const colorPalette = [
//   "#007AFF",
//   "#34C759",
//   "#5856D6",
//   "#FF9500",
//   "#FF2D55",
//   "#AF52DE",
//   "#FF3B30",
//   "#5AC8FA",
//   "#FFCC00",
// ];
// const colorPaletteDarkMode = [
//   "#0A84FF",
//   "#30D158",
//   "#5E5CE6",
//   "#FF9F0A",
//   "#FF375F",
//   "#BF5AF2",
//   "#FF453A",
//   "#64D2FF",
//   "#FFD60A",
// ];

const linearGradient = [
  "to right top, #4ccfa7, #3bcab3, #33c5bd, #36bfc4, #43b9c8, #29b3d0, #09add7, #00a6dd, #009bed, #008efa, #007cff, #4e65ff",
  "to left top, #ffffff, #f6f7f9, #eaeff3, #dee7eb, #d2e0e2, #c9d7d8, #c0cdcf, #b7c4c5, #aeb6ba, #a5a9ac, #9b9c9e, #909090",
  "to left bottom, #58c788, #64c985, #70cb83, #7bcd80, #85cf7e, #8bcf7a, #91cf75, #97cf71, #9bcd69, #9fca60, #a3c858, #a8c54f",
  "to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1",
  "to right bottom, #d283ec, #f17fcd, #ff84b0, #ff8f99, #f99d8a, #f8a282, #f5a87b, #f0ae76, #f5ad69, #f9ad5b, #fdad4c, #ffad3b",
  "to top, #3597ff, #3f9bfe, #49a0fe, #52a4fd, #5ba8fc, #5fa7fd, #63a5fe, #68a4ff, #709bff, #7d91ff, #8d86ff, #a078ff",
  "to right top, #f7d449, #ffcf67, #ffcc83, #ffcc9d, #ffceb5, #fccbc0, #f6cac9, #eccad0, #e2c3d4, #d3bed8, #bebada, #a5b8d9",
  "to right bottom, #00f7a7, #00f1ab, #00eaae, #00e4b0, #00ddb2, #0dddb8, #1adebe, #25dec3, #35e5cf, #44edda, #52f4e6, #5ffbf1",
  "to left, #f7d4d4, #f2cfd3, #edcad2, #e7c5d2, #e0c1d1, #ddbed2, #d9bbd3, #d4b9d4, #d1b7d7, #cdb5db, #c8b3df, #c1b2e3",
  "to right top, #3fb979, #44bc79, #49bf7a, #4dc17a, #52c47a, #53ca78, #54d076, #56d674, #57e06d, #59eb65, #5ef55b, #65ff4e",
];

const linearGradients = Array.from({ length: 3 }).fill(linearGradient).flat();

export default function Classroom() {
  const { isDarkMode } = useContext(LayoutContext);

  return (
    <>
      <div className="mb-4 d-flex">
        <div>
          <h5>
            <b>
              Classroom{" "}
              <span
                className="ml-4"
                data-for="add-classroom"
                data-tip="Create a new classroom"
              >
                <Link
                  to="/u/classroom/create-new-one"
                  style={
                    isDarkMode ? { color: "#F5F5F7" } : { color: "#000000" }
                  }
                >
                  <BsPlusCircle size={18} />
                  <ReactTooltip
                    id="add-classroom"
                    place="right"
                    type="dark"
                    effect="solid"
                    offset={{ right: 10 }}
                  />
                </Link>
              </span>
            </b>
          </h5>
        </div>
      </div>
      <div className="row">
        {classroomData.map((data, i) => (
          <div className="col-lg-3 mb-4" key={data.id}>
            <div
              className="card shadow"
              style={{
                backgroundImage: `linear-gradient(${linearGradients[i]})`,
                border: "none",
                height: "246px",
                borderRadius: "10px",
                transition: "color 0.3s",
              }}
            >
              <div
                className={`classroom-${
                  i + 1
                }  d-flex align-items-start flex-column`}
              >
                <div className="p-4">
                  <h5>
                    <b>{data.subject}</b>
                  </h5>
                  <h6>
                    <b>{data.className}</b>
                  </h6>
                </div>
                <div
                  className="card-footer mt-auto d-flex bg-transparent p-2"
                  style={{ border: "none", width: "100%" }}
                >
                  <div>
                    <Link
                      to="/u/classroom/manage"
                      className={`${
                        isDarkMode ? "dark-manage-link" : "manage-link"
                      }`}
                    >
                      <div className="centering">
                        <button
                          className={`${
                            isDarkMode ? "dark-overlay-btn" : "overlay-btn"
                          } centering`}
                          style={{
                            padding: "5px 5px",
                          }}
                        >
                          <IoIosLogIn />
                        </button>
                        <span className="ml-2">Manage</span>
                      </div>
                    </Link>
                  </div>
                  <div className="ml-auto">
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
                          isDarkMode
                            ? "dropdown-menu-dark"
                            : "dropdown-menu-light"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
