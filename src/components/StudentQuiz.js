import React, { useContext, useEffect, useState } from "react";
import { BsFunnel } from "react-icons/bs";
import { LayoutContext } from "./NewLayout";
import axios from "axios";
import moment from "moment";
import {Loader} from "./Loader";

export default function StudentQuiz() {


  useEffect(()=>{
document.title = "E-learning | Quiz"
  },[])

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



  return (
    <div>
      <h5 className="mb-4">
        <b>Quiz</b>
      </h5>
       {isLoading ? <div className="main-area-center-loader"><Loader /></div>:<>
       <div className="p-4" style={ isDarkMode ?{backgroundColor:"#1F1F23", borderRadius:"10px"} : {backgroundColor:"white", borderRadius:"10px"}}>
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
            <th scope="col"><input type="checkbox"/></th>
            <th scope="col">Quiz Name</th>
            <th scope="col">Question Type</th>
            <th scope="col">Created At</th>
      
          </tr>
        </thead>
        <tbody className={isDarkMode ? "bg-darks" : "bg-white"}>
          {quizData.map((quiz, i) => (
            <tr key={i} className={`${isDarkMode ? "tr-dark" : "tr-light"}`}>
              <td><input type="checkbox"/></td>
              <td>{quiz.name}</td>
             <td>{quiz.question_type === "MULTIPLE_CHOICE" && "Multiple Choice"}
                  {quiz.question_type === "ESSAY" && "Essay"}
                  {quiz.question_type === "MATCH_PAIR" && "Match Pair"}
                  {quiz.question_type === "TRUE_OR_FALSE" && "True or False"}
              </td>
              <td>{moment(quiz.created_at).format("YYYY-MM-DD HH:mm:ss")}</td>     
            </tr>
          ))}
        </tbody>
      </table>
    </div></>}
    </div>
  );
}
