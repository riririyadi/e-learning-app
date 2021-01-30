import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFunnel, BsTrash, BsThreeDots } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { LayoutContext } from "./NewLayout";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import CustomModal from "./Modal";
import "../styles/Task.css";
import { Loader } from "./Loader";
import axios from "axios";
import moment from "moment";

export default function Task() {

  const [taskData, setTaskData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading,setIsLoading] = useState(true);
  const [isSubmitting,setIsSubmitting] = useState(false);
  const token = localStorage.getItem("token");

  const header = {
    Authorization: `Bearer ${token}`,
  };

  const getAllTask = async () => {
    try {
      const res = await axios.get("http://elearning.havicrm.tk/api/task", {
        headers: header,
      });
      console.log(res.data);
      setTaskData(res.data);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllTask();
  },[]);





const dateFormat = "YYYY-MM-DD HH:mm:ss"

  useEffect(() => {
 document.title = "E-learning | Task"
  }, [])




  const { isDarkMode } = useContext(LayoutContext);
  const [selectedRow, setSelectedRow] = useState(true);
   const [isOpen, setIsOpen] = useState(false);
   const [deleteTask, setDeleteTask] = useState({});
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
                <button className="button mr-4">
                 Yes
                </button>
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
      <div className="mb-3 d-flex bd-highlight">
        <div className="bd-highlight">
          <h5>
            <b>Task</b>
          </h5>
        </div>
        <div className="ml-4 bd-highlight" style={{ fontSize: "15px" }}>
          <Link
            to="/u/task/create-new-task"
            style={isDarkMode ? { color: "#F5F5F7" } : { color: "#000000" }}
          >
            <span data-tip="Create a new task" data-for="create-task">
              <ReactTooltip
                id="create-task"
                place="right"
                type="dark"
                effect="solid"
                offset={{ right: 10 }}
              />
              <AiOutlinePlusCircle size="20px" />
            </span>
          </Link>
        </div>
      </div>
      {isLoading ? <div className="main-area-center-loader"><Loader/></div>:<>
      {error ? <div className="main-area-center-error">{error}</div>:<>
       <div className="p-4" 
       style={ isDarkMode ?{backgroundColor:"#1F1F23", borderRadius:"10px"} : {backgroundColor:"white", borderRadius:"10px"}}>
      
      
      <div className="d-flex">
        <div className="centering">
          <h6>List of Tasks</h6>
        </div>
        <div className="centering mb-2 ml-auto" style={{ width: "200px" }}>
          <BsFunnel size="24px" />
          <input
            className={
              isDarkMode ? "ml-4 input-field-dark-mode" : "ml-4 input-field"
            }
            placeholder="Search"
            type="text"
          />
        </div>
      </div>
      <table className="table table-borderless table-responsive-sm">
        <thead>
          <tr className={`${isDarkMode ? "tr-dark" : "tr-light"}`}>
            <th scope="col">
              <input
                type="checkbox"
                value={selectedRow}
                onChange={() => setSelectedRow((prevState) => !prevState)}
              />
            </th>
            <th scope="col">Task Name</th>
            
            <th scope="col">Created At</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className={isDarkMode ? "bg-darks" : "bg-white"}>
          {taskData.map((task, i) => (
            <tr key={i} className={`${isDarkMode ? "tr-dark" : "tr-light"}`}>
              <td>
                <input
                  type="checkbox"
                  value={selectedRow}
                  onChange={() => setSelectedRow((prevState) => !prevState)}
                />
              </td>
              <td data-toggle="tooltip" title="Review">
                {task.name}
              </td>
               <td>{moment(task.created_at).format(dateFormat)}</td>
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
                      <Link
                        to={`/u/task/edit/${task.id}`}
                        style={
                          isDarkMode
                            ? { color: "#F5F5F7" }
                            : { color: "#000000" }
                        }
                      >
                    <div
                      className={`dropdown-item rounded ${
                        isDarkMode ? "dd-dark-mode" : "light"
                      } pl-2`}
                      style={
                        isDarkMode
                          ? {
                              cursor: "pointer", color: "#F5F5F7" 
                            }
                          : { color: "black", cursor: "pointer" }
                      }
                    >
                        <BiPencil />
                        <span className="ml-2">Edit</span>
                    </div>
                      </Link>
                   
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div></>}</>}
       <CustomModal
        isOpen={isOpen}
        onRequestClose={handleOpenModal}
        componentToPass={<Confirmation />}
      />
    </>
  );
}
