import React, { useContext, useEffect } from "react";
import { BsFunnel } from "react-icons/bs";
import { LayoutContext } from "./NewLayout";

export default function StudentQuiz() {


  useEffect(()=>{
document.title = "E-learning | Quiz"
  },[])

  const { isDarkMode } = useContext(LayoutContext);
  const quizData = [
    {
      quiz_name: "quiz 1",
      class: "PPSI",
      status: "open",
      due_date: "23 Desember 2020 - 12:00 AM",
      job_done: "yet",
    },
    {
      quiz_name: "quiz 2",
      class: "Algoritma Pemrograman",
      status: "closed",
      due_date: "24 Desember 2020 - 11:00 AM",
      job_done: "done",
    },
    {
      quiz_name: "quiz 3",
      class: "Sistem Basis Data",
      status: "closed",
      due_date: "25 Desember 2020 - 10:00 PM",
      job_done: "done",
    },
    {
      quiz_name: "quiz 4",
      class: "Analisis Kerja Sistem",
      status: "open",
      due_date: "05 January 2021 - 03:00 PM",
      job_done: "yet",
    },
  ];
  return (
    <div>
      <h5 className="mb-4">
        <b>Quiz</b>
      </h5>
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
      <table className="table table-borderless table-responsive-md">
        <thead>
          <tr className={`${isDarkMode ? "tr-dark" : "tr-light"}`}>
            <th scope="col"><input type="checkbox"/></th>
            <th scope="col">Quiz Name</th>
            <th scope="col">Class</th>
            <th scope="col">Status</th>
            <th scope="col">Due Date</th>
            <th scope="col">Job Done</th>
          </tr>
        </thead>
        <tbody className={isDarkMode ? "bg-darks" : "bg-white"}>
          {quizData.map((quiz, i) => (
            <tr key={i} className={`${isDarkMode ? "tr-dark" : "tr-light"}`}>
              <td><input type="checkbox"/></td>
              <td>{quiz.quiz_name}</td>
              <td>{quiz.class}</td>
              <td>
                <span
                  className={`status ${
                    quiz.status === "open" ? "open" : "closed"
                  } ${isDarkMode ? "text-white dark-open" : null} `}
                >
                  {quiz.status}
                </span>
              </td>
              <td>{quiz.due_date}</td>
              <td>
                <span
                  className={`status ${
                    quiz.job_done === "done" ? "open" : "closed"
                  } ${isDarkMode ? "text-white dark-open" : null} `}
                >
                  {quiz.job_done}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
