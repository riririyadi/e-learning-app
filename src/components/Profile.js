import React, { useState, useContext, useRef } from "react";
import { BiPencil } from "react-icons/bi";
import { ImCamera } from "react-icons/im";
import { MdClass } from "react-icons/md";
import { LayoutContext } from "./NewLayout";
import ReactTooltip from "react-tooltip";
import "../styles/Profile.css";

export default function Profile() {
  const { isDarkMode } = useContext(LayoutContext);
  const [name, setName] = useState("John Doe");
  const [isEditing, setIsEditing] = useState(false);
  let nameRef = useRef();

  const classHistory = [
    { class: "Matematika Dasar - 2KA21" },
    { class: "Fisika - 2KA21" },
    { class: "Algoritma & Pemrograman - 2KA21" },
    { class: "Pemrograman Berbasis Web - 2KA21" },
    { class: "Sistem Basis Data - 2KA21" },
    { class: "Seni Budaya Dasar - 2KA21" },
  ];

  return (
    <>
      <div className="row">
        <div className="col-md-12  mb-2">
          <div
            className="card p-4 cover shadow-sm centering"
            style={{
              minHeight: "300px",
              border: "none",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="image-wrapper">
              <img
                className="ava"
                src="https://cdn.nohat.cc/thumb/f/720/comvecteezy420553.jpg"
                alt="avatar"
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "50%",
                }}
              />

              <div className="upload-area">
                <div className="centering">
                  <span style={{ zIndex: 1, marginTop: "10px" }}>
                    <ImCamera size="24px" />
                  </span>
                </div>
                <label className="label-upload" htmlFor="upload">
                  <input type="file" id="upload" hidden />
                </label>
              </div>
            </div>
            <div className="centering mt-4">
              <div style={{ marginRight: "-25px" }}>
                <span
                  ref={nameRef}
                  style={{
                    minWidth: "10px",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#121212",
                  }}
                  className="input"
                  role="textbox"
                  onChange={(e) => setName(e.target.value)}
                  contentEditable={isEditing}
                >
                  {name}
                </span>
                <span
                  className="ml-2"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setIsEditing(!isEditing)}
                >
                  {isEditing ? (
                    <button className="button" style={{ fontSize: "12px" }}>
                      Save
                    </button>
                  ) : (
                    <span data-tip="Edit name" style={{ color: "black" }}>
                      <ReactTooltip
                        place="right"
                        type="dark"
                        effect="solid"
                        offset={{ right: 10 }}
                      />
                      <BiPencil size="16px" />
                    </span>
                  )}
                </span>
              </div>
            </div>
            <div className="text-white">
              <i>
                <b>Bekasi, Student</b>
              </i>
            </div>
            <div className="text-white" style={{ fontSize: "18px" }}>
              Universitas Gunadarma
            </div>
            <div className="text-white" style={{ fontSize: "18px" }}>
              Fakultas Ilmu Komputer dan Teknologi Informasi
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <div
            className={`card shadow-sm ${
              isDarkMode ? "bg-darks" : "bg-white"
            } p-4`}
            style={{ minHeight: "200px", border: "none", borderRadius: "5px" }}
          >
            <h5>About</h5>
            <div>Morning Person</div>
            <div>Kucing Lovers</div>
            <h5 className="mt-4">Announcement</h5>
            <div>Pernah menjadi bagian proyek NASA</div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div
            className="card p-4 shadow-sm"
            style={{
              backgroundColor: "#772CE8",
              minHeight: "200px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            <h5 className="mb-4">Class Timeline</h5>
            {classHistory.map((data, i) => (
              <p className="text-white" key={i}>
                <span className="mr-2">
                  <MdClass size={18} />
                </span>
                {data.class}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
