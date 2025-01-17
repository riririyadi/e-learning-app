import React, { useState, useContext, createContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { LayoutContext } from "./NewLayout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/CreateNewTask.css";
import CustomModal from "./Modal";
import { EditQuizQuestion } from "./AddQuestion";
import axios from "axios";
import { Loader } from "./Loader";

export const EditQuizContext = createContext();

export default function EditQuiz() {
  let { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
const [quiz,setQuiz] = useState({});
 const token = localStorage.getItem("token");
  const header = {
    Authorization: `Bearer ${token}`,
  };

  const [error, setError] = useState("")

const getDetailQuiz = async() => {
    try{
      setIsLoading(true);
      const res = await axios.get(`http://elearning.havicrm.tk/api/quiz/${id}`,{headers: header})
      console.log(res.data);
      setQuiz(res.data);
    }catch(err){
      setError(err.message);
    }
    setIsLoading(false);
}


const [startDate, setStartDate] = useState(new Date());
  const [questions, setQuestion] = useState([]);
  const { isDarkMode } = useContext(LayoutContext);
  const [questionType, setQuestionType] = useState("");
  const [randomQuestionDisplay, setRandomQuestionDisplay] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
	function handleOpenModal() {
		setIsOpen(!isOpen);
	}





  useEffect(() => {
      document.title = "E-learning | Quiz"

  getDetailQuiz();
  }, [])


const Confirmation = () => {
		return (
			<div className="p-4">
				<div style={{ fontSize: "14px" }}>
				
					<h6 style={{ textAlign: "center" }}>
						Do you want to proceed?
					</h6>
					<div className="centering pt-4">
						<div>

							<Link to="/u/quiz">
								<button className="button mr-2">Yes</button>
							</Link>
							<button
								className="button"
								onClick={handleOpenModal}
							>
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
      <h5 className="mb-4">
        <b>Edit Quiz</b>
      </h5>

      {isLoading ? (<div className="main-area-center-loader"><Loader/></div>): (
        <>{error ? <div className="main-area-center-error">{error}</div>: 
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
                showTimeSelect
                timeFormat="p"
                timeIntervals={15}
                dateFormat="yyyy-MM-dd HH:mm:ss"
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
                To enable functionality, please delete all the created
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
        <EditQuizContext.Provider value={{ questions, setQuestion }}>
          <EditQuizQuestion questionType={questionType} />
        </EditQuizContext.Provider>
        <button className="button" onClick={handleOpenModal}>Save</button>
      </div> }</>)}
      	<CustomModal
				isOpen={isOpen}
				onRequestClose={handleOpenModal}
				componentToPass={<Confirmation />}
			/>
    </>
  );
}
