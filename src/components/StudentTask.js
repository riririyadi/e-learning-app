import React, { useContext, useEffect, useState } from "react";
import { BsFunnel } from "react-icons/bs";
import { LayoutContext } from "./NewLayout";
import  axios from "axios";
import moment from "moment";
import { Loader } from "./Loader";


export default function StudentTask() {

  useEffect(()=>{
document.title = "E-learning | Task"
  },[])


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



  const { isDarkMode } = useContext(LayoutContext);


  return (
    <div>
      <h5 className="mb-4">
        <b>Task</b>
      </h5>
      {isLoading ?<div className="main-area-center-loader"> <Loader/> </div>:
       <div className="p-4" style={ isDarkMode ?{backgroundColor:"#1F1F23", borderRadius:"10px"} : {backgroundColor:"white", borderRadius:"10px"}}>
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
            <th scope="col"><input type="checkbox"/></th>

            <th scope="col">Task Name</th>
            <th scope="col">Description</th>
            <th scope="col">created_at</th>
         
          </tr>
        </thead>

        <tbody className={isDarkMode ? "bg-darks" : "bg-white"}>
          {taskData.map((task, i) => (
            <tr key={i} className={`${isDarkMode ? "tr-dark" : "tr-light"}`}>
              <td><input type="checkbox"/></td>
            
              <td>{task.name}</td>
              <td>{task.description}</td>
             
              <td>{moment(task.created_at).format("YYYY-MM-DD HH:mm:ss")}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
      </div>}
    </div>
  );
}
