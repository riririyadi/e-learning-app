import React, { useState, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";
import { LayoutContext } from "./NewLayout";
import "../styles/CreateNewTask.css";
import { AddQuizQuestion } from "./AddQuestion";
import axios from "axios";
import CustomModal from "./Modal";
import { BsPlusCircle } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { Loader } from "./Loader";


export const CreateQuizContext = createContext();

export default function CreateNewQuiz() {
  let history = useHistory();

  const { isDarkMode } = useContext(LayoutContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestion] = useState([]);
  const [questionType, setQuestionType] = useState("");
  const [randomQuestionDisplay, setRandomQuestionDisplay] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting,setIsSubmitting] = useState(false);
  function handleOpenModal() {
    setIsOpen(!isOpen);
  }


  const data = {
    name: name,
    description: description,
    is_random: randomQuestionDisplay,
    question_type: questionType,
    questions: questions,
  };


  const token = localStorage.getItem("token");

  const header = {
    Authorization: `Bearer ${token}`,
    "Content-Type":"application/json"
  };

  const handleSubmit = async () => {

    try{
      setIsSubmitting(true);
          const res = await axios.post("http://elearning.havicrm.tk/api/quiz", data, {
        headers: header,
      })
        history.push("/u/quiz")
    }catch(err){
      console.log(err.message);
      setError(err.message);
      setIsSubmitting(false);
    }
  };


  const Confirmation = () => {
    return (
      <div className="p-4">
        <div style={{ fontSize: "14px" }}>
        {isSubmitting? <div className="centering mb-4 mt-4"><Loader/></div>:<>{error && <div>{error}</div>}
          <div
            className="mb-4"
            style={{
              backgroundColor: `${isDarkMode ? "#f5f5f7" : "#e1e1e1"}`,
              color: `${isDarkMode ? "black" : "black"}`,
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <h6>Creating a new quiz</h6>
            <div className="d-flex bd-highlight">
              <div className="bd-highlight">
                <BsPlusCircle color="#00d48c" size={16} />
              </div>
              <div className="bd-highlight pl-2 pt-1">
                <h6>{name}</h6>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Enter quiz description"
              style={{ width: "100%", height: "150px" }}
            />
          </div>
        </div>


        <div className="row mb-2">
          <div className="col-md-4">Random Question Display: </div>
          <div className="col-md-8">
            <input
              type="checkbox"
              value={randomQuestionDisplay}
              onChange={() =>
                setRandomQuestionDisplay((prevState) => !prevState)
              }
              defaultChecked={randomQuestionDisplay}
            />
            <label className="ml-2">
              {randomQuestionDisplay ? "Yes" : "No"}
            </label>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            Question Type:
            <br />
            {questions.length > 0 && (
              <i>
                To enable functionality, please delete all the created questions
              </i>
            )}{" "}
          </div>
          <div className="col-md-8">
            <input
              type="radio"
              value="MULTIPLE_CHOICE"
              onChange={(e) => setQuestionType(e.target.value)}
              checked={questionType === "MULTIPLE_CHOICE"}
              {...(questions.length > 0 &&
                questionType !== "MULTIPLE_CHOICE" && { disabled: true })}
            />
            <label className="ml-2">Multiple Choice</label>
            <br />
            <input
              type="radio"
              value="ESSAY"
              onChange={(e) => setQuestionType(e.target.value)}
              checked={questionType === "ESSAY"}
              {...(questions.length > 0 &&
                questionType !== "ESSAY" && { disabled: true })}
            />
            <label className="ml-2">Essay</label>
            <br />
            <input
              type="radio"
              value="MATCH_PAIR"
              onChange={(e) => setQuestionType(e.target.value)}
              checked={questionType === "MATCH_PAIR"}
              {...(questions.length > 0 &&
                questionType !== "MATCH_PAIR" && { disabled: true })}
            />
            <label className="ml-2">Match Pairs</label>
            <br />
            <input
              type="radio"
              value="TRUE_OR_FALSE"
              onChange={(e) => setQuestionType(e.target.value)}
              checked={questionType === "TRUE_OR_FALSE"}
              {...(questions.length > 0 &&
                questionType !== "TRUE_OR_FALSE" && { disabled: true })}
            />
            <label className="ml-2">True or False</label>
          </div>
        </div>
        <CreateQuizContext.Provider value={{ questions, setQuestion }}>
          <AddQuizQuestion questionType={questionType} />
        </CreateQuizContext.Provider>
        <button
          className="button"
          onClick={
            !name || !description || !questions
              ? null
              : handleOpenModal
          }
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
