import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { LayoutContext } from "./NewLayout";
import CustomModal from "./Modal";
import { BsPlusCircle } from "react-icons/bs";
import { FiCheckCircle, FiPlus } from "react-icons/fi";
import { IoIosCreate } from "react-icons/io";
import axios from "axios";
import { Loader } from "./Loader";

export default function CreateNewClassroom() {
  let history = useHistory();
  const { isDarkMode, uid } = useContext(LayoutContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [maxStudent, setMaxStudent] = useState("");

  const token = localStorage.getItem("token");

  const data = {
    name: name,
    subject: subject,
    description: description,
    max_student: maxStudent,
    teacher_user_id: uid,
  };

  const header = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      const res = await axios.post(
        "http://elearning.havicrm.tk/api/classroom",
        data,
        {
          headers: header,
        }
      );
      history.push("/u/classroom");
    } catch (err) {
      console.log(err);
    }
    setIsSubmitting(false);
  };

  function handleOpenModal() {
    setIsOpen(!isOpen);
  }
  const Confirmation = () => {
    return (
      <div className="p-4">
        <div style={{ fontSize: "14px" }}>
        {isSubmitting? <div className="centering mb-4 mt-4" ><Loader/></div>:<>
          <div
            className="mb-4"
            style={{
              backgroundColor: `${isDarkMode ? "#f5f5f7" : "#e1e1e1"}`,
              color: `${isDarkMode ? "black" : "black"}`,
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <h6>Creating a new classroom</h6>
            <div className="d-flex bd-highlight">
              <div className="bd-highlight">
                <BsPlusCircle color="#00d48c" size={16} />
              </div>
              <div className="bd-highlight pl-2 pt-1">
                <h6>
                  {subject} - {name}
                </h6>
              </div>
            </div>
          </div>
          <h6 style={{ textAlign: "center" }}>Do you want to proceed?</h6>
          <div className="centering">
            <div>
              <button className="button mr-2" onClick={handleSubmit}>
                Yes
              </button>
              <button className="button" onClick={handleOpenModal}>
                No
              </button>
            </div>
          </div></>}
        </div>
      </div>
    );
  };
  return (
    <>
      <h5 className="mb-4">
        <b>Create New Classroom</b>
      </h5>
      <div
        className={`${
          isDarkMode ? "bg-darks" : "bg-white"
        } shadow-sm p-4 mt-4 mb-4`}
        style={{ borderRadius: "10px" }}
      >
        <div className="row mb-2">
          <div className="col-md-4">Class Name:</div>
          <div className="col-md-8">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Enter a class name"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Subject:</div>
          <div className="col-md-8">
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Enter subject name"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Class Description:</div>
          <div className="col-md-8">
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Enter class description"
              style={{ width: "100%", height: "150px" }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Max Number of Students:</div>
          <div className="col-md-8">
            <input
              type="number"
              value={maxStudent}
              onChange={(e) => setMaxStudent(e.target.value)}
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="50"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <button
          className="button mt-2"
          onClick={
            !name || !description || !subject || !maxStudent
              ? null
              : handleOpenModal
          }
          style={{ padding: "5px 30px", borderRadius: "30px" }}
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
  );
}
