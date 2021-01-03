import React, { useState, useContext } from "react";
import FileUpload from "./FileUpload";
import { Link } from "react-router-dom";
import CustomModal from "./Modal";
import { FiCheckCircle } from "react-icons/fi";
import { LayoutContext } from "./NewLayout";

export default function CreateNewLesson() {
  const { isDarkMode } = useContext(LayoutContext);
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
              <Link to="/u/classroom/manage">
                <button className="button mr-4">
                  <FiCheckCircle className="ok-icon" size="18px" /> Yes
                </button>
              </Link>
              <button className="button" onClick={handleOpenModal}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <h5 className="mb-4">
        <b>Create New Lesson</b>
      </h5>
      <div
        className={`${
          isDarkMode ? "bg-darks" : "bg-white"
        } p-4 shadow-sm mt-4 mb-4`}
        style={{ borderRadius: "10px" }}
      >
        <div className="row mb-2">
          <div className="col-md-4">Lesson Name:</div>
          <div className="col-md-8">
            <input
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              type="text"
              placeholder="Enter a lesson name"
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Lesson Description:</div>
          <div className="col-md-8">
            <textarea
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              type="text"
              placeholder="Enter lesson description"
              style={{ height: "150px" }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Add Materi:</div>
          <div className="col-md-8">
            <FileUpload />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Add Quiz:</div>
          <div className="col-md-8">
            <select
              className={isDarkMode ? "select-box-dark-mode" : "select-box"}
            >
              <option></option>
              <option>Quiz 1</option>
              <option>Quiz 2</option>
              <option>Quiz 3</option>
            </select>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Add Task:</div>
          <div className="col-md-8">
            <select
              className={isDarkMode ? "select-box-dark-mode" : "select-box"}
            >
              <option></option>
              <option>Task 1</option>
              <option>Task 2</option>
              <option>Task 3</option>
            </select>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Embed a Video:</div>
          <div className="col-md-8">
            <input
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              type="text"
              placeholder="Paste a video URL"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <button className="button mt-2" onClick={handleOpenModal}>
          Create
        </button>
      </div>
      <CustomModal
        isOpen={isOpen}
        onRequestClose={handleOpenModal}
        componentToPass={<Confirmation />}
      />
    </>
  );
}
