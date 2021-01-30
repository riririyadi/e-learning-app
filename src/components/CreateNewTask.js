import React, { useState, useContext, createContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Datetime from "react-datetime";
import { FaCalendarAlt } from "react-icons/fa";
import moment from "moment";
import CustomModal from "./Modal";
import { LayoutContext } from "./NewLayout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/CreateNewTask.css";
import axios from "axios";
import { Loader } from "./Loader";


export const CreateTaskContext = createContext();


export default function CreateNewTask() {
  let history = useHistory();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [description, setDescription] = useState("") 
  const { isDarkMode } = useContext(LayoutContext);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const token = localStorage.getItem("token");

  const header = {
    Authorization: `Bearer ${token}`,
  };


  const [isOpen, setIsOpen] = useState(false);
  function handleOpenModal() {
    setIsOpen(!isOpen);
  }
const data = {
    name, description
}

  const handleSubmit = async () => {
       try{
      setIsSubmitting(true);
          const res = await axios.post("http://elearning.havicrm.tk/api/task", data, {
        headers: header,
      })
        history.push("/u/task")
    }catch(err){
      console.log(err.message);
      setError(err.message);
      setIsSubmitting(false);
    }
  }


  const Confirmation = () => {
    return (
      <div className="p-4">
       {isSubmitting ? <div className="centering"><Loader /></div>: <>{error ?<div>{error}</div>:  <div style={{ fontSize: "14px" }}>
                        <h6 style={{ textAlign: "center" }}>Do you want to proceed?</h6>
                 <div className="centering">
                   <div>
                       <button className="button mr-2" onClick={handleSubmit}>Yes</button>
                     <button className="button" onClick={handleOpenModal}>
                       No
                     </button>
                   </div>
                 </div>
               </div>}</>}
      </div>
    );
  };

  return (
    <>
      <h5 className="mb-4">
        <b>Create New Task</b>
      </h5>
      <div
        className={`${isDarkMode ? "bg-darks" : "bg-white"} p-4 mt-4 mb-4`}
        style={{ borderRadius: "10px" }}
      >
        <div className="row mb-2">
          <div className="col-md-4">Task Name:</div>
          <div className="col-md-8">
            <input
            value={name}
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Enter a task name"
              style={{ width: "100%" }}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Task Description:</div>
          <div className="col-md-8">
            <textarea
            value={description}
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="e.g. Create an essay on what you know about world war II"
              style={{ width: "100%", height: "150px" }}
              onChange={e => setDescription(e.target.value)}
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
