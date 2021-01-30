import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFunnel, BsTrash, BsThreeDots } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import { BiPencil } from "react-icons/bi";
import { LayoutContext } from "./NewLayout";
import CustomModal from "./Modal";
import axios from "axios";
import moment from "moment";
import { Loader } from './Loader' 

export default function Quiz() {


  useEffect(() => {
 document.title = "E-learning | Quiz"
  }, [])
  function handleOpenModal() {
    setIsOpen(!isOpen);
  }

  const { isDarkMode } = useContext(LayoutContext);
  const [selectedRow, setSelectedRow] = useState(true);
  const [quizData, setQuizData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

const token = localStorage.getItem("token");

  const header = {
    Authorization: `Bearer ${token}`,
  };

  const getAllQuiz = async () => {
    try {
      const res = await axios.get("http://elearning.havicrm.tk/api/quiz", {
        headers: header,
      });
      console.log(res.data);
      setQuizData(res.data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllQuiz();
  },[]);


const dateFormat = "YYYY-MM-DD HH:mm:ss"

  const Confirmation = () => {
    return (
      <div className="p-4">
        <div style={{ fontSize: "14px" }}>
          <h6 style={{ textAlign: "center" }}>Do you want to proceed?</h6>
          <br />
          <div className="centering">
            <div>
                <button className="button mr-4" onClick={handleOpenModal}>
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
    <div>
      <div className="mb-3 d-flex bd-highlight">
        <div className="bd-highlight">
          <h5>
            <b>Quiz</b>
          </h5>
        </div>
        <div className="ml-4 bd-highlight" style={{ fontSize: "15px" }}>
          <Link
            to="/u/quiz/create-new-quiz"
            style={isDarkMode ? { color: "#F5F5F7" } : { color: "#000000" }}
          >
            <span data-tip="Create a new quiz" data-for="create-quiz">
              <ReactTooltip
                id="create-quiz"
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
      {isLoading? <div className="centering" style={{minHeight: "calc(100vh - 220px)"}}><Loader/></div>:
      <div className="p-4" style={isDarkMode ?{backgroundColor:"#1F1F23", borderRadius:"10px"} : {backgroundColor:"white", borderRadius:"10px"}}>
      <div className="d-flex">
        <div className="centering">
          <h6>List of Quizes</h6>
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
            <th scope="col">Quiz Name</th>
            <th scope="col">Question Type</th>
            <th scope="col">Created At</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className={isDarkMode ? "bg-darks" : "bg-white"}>
          {quizData.map((quiz, i) => (
            <tr key={i} className={`${isDarkMode ? "tr-dark" : "tr-light"}`}>
              <td>
                <input
                  type="checkbox"
                  value={selectedRow}
                  onChange={() => setSelectedRow((prevState) => !prevState)}
                />
              </td>

              <td>{quiz.name}</td>
              <td>{quiz.question_type === "MULTIPLE_CHOICE" && "Multiple Choice"}
                  {quiz.question_type === "ESSAY" && "Essay"}
                  {quiz.question_type === "MATCH_PAIR" && "Match Pair"}
                  {quiz.question_type === "TRUE_OR_FALSE" && "True or False"}
              </td>
              <td>{moment(quiz.created_at).format(dateFormat)}</td>
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
                        to={`/u/quiz/edit/${quizData.id}`}
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
                        ? { cursor: "pointer",  color: "#F5F5F7" }                          
                        : { cursor: "pointer", color: "#000000"  }
                      }
                    >
                        <BiPencil />
                        <span className="ml-2">Edit</span>
                    </div>
                      </Link>
                      <Link
                        to="#"
                        style={
                          isDarkMode
                            ? { color: "#F5F5F7" }
                            : { color: "#000000" }
                        }
                      >
                    <div
                      className={`dropdown-item rounded  ${
                        isDarkMode ? "dd-dark-mode" : "light"
                      } pl-2`}
                      style={
                       isDarkMode
                        ? { cursor: "pointer",  color: "#F5F5F7" }                          
                        : { cursor: "pointer", color: "#000000"  }
                      }
                      onClick={handleOpenModal}
                    >
                        <BsTrash />
                        <span className="ml-2">Delete</span>
                    </div>
                      </Link>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>}
      <CustomModal
        isOpen={isOpen}
        onRequestClose={handleOpenModal}
        componentToPass={<Confirmation />}
      />
    </div>
  );
}
