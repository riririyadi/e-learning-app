import React, {useState} from "react";
import FileUpload from "./FileUpload";
import { Link } from "react-router-dom";
import Question from "./Question";
import CustomModal from "./Modal";
import { FcProcess } from "react-icons/fc";

export default function CreateNewLesson() {
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
                  <FcProcess size="18px" /> Yes
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
      <h5 className="mt-4 mb-4">Create New Lesson</h5>
      <div className="bg-white p-4 mt-4 mb-4" style={{ borderRadius: "10px" }}>
        <div className="row mb-2">
          <div className="col-md-4">Lesson Name:</div>
          <div className="col-md-8">
            <input
              className="input-field"
              type="text"
              placeholder="Enter a lesson name"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Lesson Description:</div>
          <div className="col-md-8">
            <textarea
              className="input-field"
              type="text"
              placeholder="Enter lesson description"
              style={{ width: "100%", height: "150px" }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Add Materi:</div>
          <div className="col-md-8">
            <div>
              <FileUpload />
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Add Quiz:</div>
          <div className="col-md-8">
            <select className="select-box" style={{ width: "100%", height: "25px" }}>
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
            <select className="select-box" style={{ width: "100%", height: "25px" }}>
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
              className="input-field"
              type="text"
              placeholder="Paste a video URL"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <button className="button" onClick={handleOpenModal}>Create</button>
      </div>
         <CustomModal
        isOpen={isOpen}
        onRequestClose={handleOpenModal}
        componentToPass={<Confirmation />}
      />
    </>
  );
}
