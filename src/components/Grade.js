import React, { useContext, useEffect, useState} from "react";
import { BsFunnel, BsThreeDots, } from "react-icons/bs";
import { Link } from "react-router-dom";
import { LayoutContext } from "./NewLayout";
import { CgViewList } from "react-icons/cg";
import axios from 'axios';


export default function Grade() {
  const { isDarkMode } = useContext(LayoutContext);

const [error, setError] = useState("");
  const [classroom, setClassroom] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [status] = useState("active");

  const token = localStorage.getItem("token");

  const header = {
    Authorization: `Bearer ${token}`,
  };

  const getAllClassroom = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("http://elearning.havicrm.tk/api/classroom", {
        headers: header,
      });
      setClassroom(res.data);
      setParticipants(res.data.students)
      console.log(res.data);
    } catch (err) {
      console.log(err);
      setError(err.message)
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllClassroom();
 document.title = "E-learning | Grade"
  }, [])
  return (
    <>
      <h5 className="mb-4">
        <b>Grade</b>
      </h5>
        {isLoading ? (<div className="main-area-center-loader"><Loader/></div>): (
        <>{error ? <div className="main-area-center-error">{error}</div>: 
      <div className="p-4" style={isDarkMode ?{backgroundColor:"#1F1F23", borderRadius:"10px"} : {backgroundColor:"white", borderRadius:"10px"}}>
      <div className="d-flex">
        <div className="centering">
          <h6>List of Classes</h6>
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
            <th scope="col">Class</th>
            <th scope="col">Subject</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody className={isDarkMode ? "bg-darks" : "bg-white"}>
          {classroom.map((data, i) => (
            <tr key={i} className={`${isDarkMode ? "tr-dark" : "tr-light"}`}>
          <td><input type="checkbox"/></td>

              <td>{data.name}</td>
              <td>{data.subject}</td>
              <td>
                <span
                  className={`status ${
                    status === "active" ? "open" : "closed"
                  } ${isDarkMode ? "text-white dark-open" : null} `}
                >
                  A\ctive
                </span>
              </td>
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
                        to={`/u/grade/view/${data.id}`}
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
                            ? { color: "#F5F5F7", cursor:"pointer" }
                            : { color: "#000000", cursor:"pointer" }
                        }
                      
                    >
                        <CgViewList />
                        <span className="ml-2">View</span>
                    </div>
                      </Link>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>}</>)}
    </>
  );
}

