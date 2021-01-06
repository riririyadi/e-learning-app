import React, { useState, useContext, createContext } from "react";
import Datetime from "react-datetime";
import { FaCalendarAlt } from "react-icons/fa";
import moment from "moment";
import { LayoutContext } from "./NewLayout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/CreateNewTask.css";
import { AddQuizQuestion } from "./AddQuestion";


export const CreateQuizContext = createContext();
export default function CreateNewQuiz() {
	const [startDate, setStartDate] = useState(new Date());
  const [questions, setQuestion] = useState([]);
  const { isDarkMode } = useContext(LayoutContext);
  const [questionType, setQuestionType] = useState("");
  const [randomQuestionDisplay, setRandomQuestionDisplay] = useState(false);
  return (
    <>
      <h5 className="mb-4">
        <b>Create New Quiz</b>
      </h5>
      <div
        className={`${isDarkMode ? "bg-darks" : "bg-white"} p-4 mt-4 mb-4`}
        style={{ borderRadius: "10px" }}
      >
        <div className="row mb-2">
          <div className="col-md-4">Quiz Name:</div>
          <div className="col-md-8">
            <input
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Enter a quiz name"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Quiz Description:</div>
          <div className="col-md-8">
            <textarea
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Enter quiz description"
              style={{ width: "100%", height: "150px" }}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">Due Date: </div>
          <div className="col-md-8">
            <div
              className={isDarkMode ? "datepickerWrap-dark" : `datepickerWrap`}
            >
              <DatePicker
                placeholderText="Click to select a date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                locale="pt-BR"
                showTimeSelect
                timeFormat="p"
                timeIntervals={15}
                dateFormat="Pp"
              />
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Duration (minutes):</div>
          <div className="col-md-8">
            <input
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="5"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Random Question Display: </div>
          <div className="col-md-8">
            <input
              type="radio"
              value="true"
              onChange={(e) => setRandomQuestionDisplay(e.target.value)}
              checked={randomQuestionDisplay === "true"}
            />
            <label className="ml-2">Yes</label>
            <input
              type="radio"
              className="ml-4"
              value="false"
              onChange={(e) => setRandomQuestionDisplay(e.target.value)}
              checked={randomQuestionDisplay === "false"}
            />
            <label className="ml-2">No</label>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            Question Type:
            <br />
            {questions.length > 0 && (
              <i>
                To enable the functionality, please delete all the created
                questions
              </i>
            )}{" "}
          </div>
          <div className="col-md-8">
            <input
              type="radio"
              value="Multiple Choice"
              onChange={(e) => setQuestionType(e.target.value)}
              checked={questionType === "Multiple Choice"}
              {...(questions.length > 0 &&
                questionType !== "Multiple Choice" && { disabled: true })}
            />
            <label className="ml-2">Multiple Choice</label>
            <br />
            <input
              type="radio"
              value="Essay"
              onChange={(e) => setQuestionType(e.target.value)}
              checked={questionType === "Essay"}
              {...(questions.length > 0 &&
                questionType !== "Essay" && { disabled: true })}
            />
            <label className="ml-2">Essay</label>
            <br />
            <input
              type="radio"
              value="Match Pairs"
              onChange={(e) => setQuestionType(e.target.value)}
              checked={questionType === "Match Pairs"}
              {...(questions.length > 0 &&
                questionType !== "Match Pairs" && { disabled: true })}
            />
            <label className="ml-2">Match Pairs</label>
            <br />
            <input
              type="radio"
              value="True or False"
              onChange={(e) => setQuestionType(e.target.value)}
              checked={questionType === "True or False"}
              {...(questions.length > 0 &&
                questionType !== "True or False" && { disabled: true })}
            />
            <label className="ml-2">True or False</label>
          </div>
        </div>
        <CreateQuizContext.Provider value={{ questions, setQuestion }}>
          <AddQuizQuestion questionType={questionType} />
        </CreateQuizContext.Provider>
        <button className="button">Create</button></div></>
)}