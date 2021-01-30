import React, { useState, useContext, createContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
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


export const EditTaskContext = createContext();


export default function EditTask() {
  let history = useHistory();
  let {id} = useParams();
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState({}) 
  const { isDarkMode } = useContext(LayoutContext);
  const [isSubmitting, setIsSubmitting] = useState(false);


 function handleChange(e) {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  }


  const token = localStorage.getItem("token");

  const header = {
    Authorization: `Bearer ${token}`,
  };


  const [isOpen, setIsOpen] = useState(false);
  function handleOpenModal() {
    setIsOpen(!isOpen);
  }


  const handleSubmit = async () => {
       try{
      setIsSubmitting(true);
          const res = await axios.post(`http://elearning.havicrm.tk/api/task/${id}`, task, {
        headers: header,
      })
        history.push("/u/task")
    }catch(err){
      console.log(err.message);
      setError2(err.message);
      setIsSubmitting(false);
    }
  }

  const getTask = async () => {
    try {
      const res = await axios.get(
        `http://elearning.havicrm.tk/api/task/${id}`,
        {
          headers: header,
        }
      );
      console.log(res.data);
      setTask(res.data)
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setIsLoading(false);
  };

useEffect(() => {
 getTask()
}, [])


  const Confirmation = () => {
    return (
      <div className="p-4">
       {isSubmitting ? <div className="centering"><Loader /></div>: <>{error2 ?<div>{error}</div>:  <div style={{ fontSize: "14px" }}>
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
        <b>Edit New Task</b>
      </h5>
      <div
        className={`${isDarkMode ? "bg-darks" : "bg-white"} p-4 mt-4 mb-4`}
        style={{ borderRadius: "10px" }}
      >
        <div className="row mb-2">
          <div className="col-md-4">Task Name:</div>
          <div className="col-md-8">
            <input
               value={task.name||""}
              onChange={handleChange}
              name="name"
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Enter a task name"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Task Description:</div>
          <div className="col-md-8">
            <textarea
              value={task.description||""}
              onChange={handleChange}
              name="description"
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="e.g. Create an essay on what you know about world war II"
              style={{ width: "100%", height: "150px" }}
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
