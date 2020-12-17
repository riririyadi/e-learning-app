import React,{useState} from 'react';
import { Link } from "react-router-dom";
import Question from "./Question";
import CustomModal from "./Modal";
import { FcProcess } from "react-icons/fc";

export default function CreateNewClassroom() {
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
              <Link to="/u/classroom">
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
    <h5 className="mt-4 mb-4">Create New Class</h5>
       <div className="bg-white p-4 mt-4 mb-4" style={{ borderRadius: "10px" }}>
      
      <div className="row mb-2">
        <div className="col-md-4">Class Name:</div>
        <div className="col-md-8">
          <input type="text" className="input-field" placeholder="Enter a class name" style={{ width: "100%" }} />
        </div>
      </div>
       <div className="row mb-2">
        <div className="col-md-4">Subject:</div>
        <div className="col-md-8">
          <input type="text" className="input-field" placeholder="Enter subject name" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-4">Class Description:</div>
        <div className="col-md-8">
          <textarea
          type="text" className="input-field"
            placeholder="Enter class description"
            style={{ width: "100%", height: "150px" }}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-4">Max Number of Students:</div>
        <div className="col-md-8">
          <input type="text" className="input-field" placeholder="50" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-4">Class Duration (Hours):</div>
        <div className="col-md-8">
          <input type="text" className="input-field" placeholder="50" style={{ width: "100%" }} />
        </div>
      </div>
      <button
        className="button"
        onClick={handleOpenModal}
      >
        Create
      </button>
    </div>
        <CustomModal
        isOpen={isOpen}
        onRequestClose={handleOpenModal}
        componentToPass={<Confirmation />}
      />
    </>
  )
}
