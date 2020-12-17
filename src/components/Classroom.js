import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomModal from "./Modal";
import { FiPlusCircle } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { RiSettingsLine } from "react-icons/ri";

const NewClassSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchValue);
  }
  return (
    <div className="p-4" style={{ fontSize: "14px" }}>
      <h6>Join New Class</h6>
      <input
        type="text"
        value={searchValue}
        className="input-field"
        placeholder="Enter Classroom Key"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="button mt-2" onClick={handleSubmit}>
        Join
      </button>
    </div>
  );
};

export default function Classroom() {
  const classroomData = [
    { subject: "PPSI", class: "4KA21" },
    {
      subject: "Manajemen Sistem Informasi",
      class: "3KA21",
    },
    { subject: "Sistem Multimedia", class: "4KA21" },
    {
      subject: "Bahasa Inggris Bisnis",
      class: "4DB02",
    },
    {
      subject: "Bahasa Inggris Bisnis",
      class: "4DB04",
    },
    { subject: "Programming", class: "1KA21" },
  ];

  const bgColor = [
    "#17A2B8",
    "#772CE8",
    "#DC3545",
    "#B34ED4",
    "#F0D06E",
    "#00D48C",
    "#772CE8",
    "#FB8779",
    "#B34ED4",
    "#F0D06E",
    "#00D48C",
    "#772CE8",
    "#FB8779",
    "#B34ED4",
    "#F0D06E",
  ];

  return (
    <>
      <div>
        <div className="mt-4 mb-4 d-flex bd-highlight">
          <div className="bd-highlight">
            <h5>Classroom</h5>
          </div>
          <div className="ml-4 bd-highlight" style={{ fontSize: "15px" }}>
            <span data-tooltip-text-1="Create New Class">
            <Link to="/u/classroom/create-new-one">
              <AiOutlinePlusCircle size="20px" color="black" />
            </Link>

            </span>
          </div>
        </div>
        <div className="row">
          {classroomData.map((data, i) => (
            <div className="col-lg-3 mb-4" key={data.subject}>
              <div
                className="card"
                style={{
                  backgroundColor: `${bgColor[i]}`,
                  border: "none",
                  height: "200px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className={`classroom-${i} d-flex align-items-start flex-column p-4`}
                >
                  <div>
                    <h5>{data.subject}</h5>
                    <h6>{data.class}</h6>
                  </div>
                  <div className="mt-auto d-flex" style={{ width: "100%" }}>
                    <div>
                      <Link to="/u/classroom/manage" className="dark-link">
                        <IoIosLogIn />
                        <span className="ml-2">Manage</span>
                      </Link>
                    </div>
                    <div className="ml-auto">
                      <Link to="#" className="dark-link">
                        <RiSettingsLine />
                        <span className="ml-2">Edit</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
