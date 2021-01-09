import React, { useState, useContext, createContext } from "react";
import { FiCheckCircle, FiPlus } from "react-icons/fi";
import { LayoutContext } from "./NewLayout";
import { CreateTaskContext } from "./CreateNewTask";
import { CreateQuizContext } from "./CreateNewQuiz";
import { EditTaskContext } from "./EditTask";
import { EditQuizContext } from "./EditQuiz";
import { BiPencil } from "react-icons/bi";
import { BsThreeDots, BsPlusCircle, BsTrash } from "react-icons/bs";

const MPCFormQuestion = (props) => {
  const { isDarkMode } = useContext(LayoutContext);

  const handleChangeMPC = (e) => {
    const { name, value } = e.target;
    setMPCQuestion({ ...mPCQuestion, [name]: value });
  };
  const [mPCQuestion, setMPCQuestion] = useState({
    questionText: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  }); 
    const handleSubmitMPC = (e) => {
    e.preventDefault();
    if (!mPCQuestion) return;
    props.addQuestion(mPCQuestion);
    setMPCQuestion({questionText: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",});
  };

  return (
    <>
      {props.list && (
        <div className="row border-top pl-3 pr-3 pt-2 d-flex">
          <div>Question: {props.index + 1}</div>
          <div className="ml-auto">
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
            
                <div
                  className={`dropdown-item rounded  ${
                    isDarkMode ? "dark-mode" : "light"
                  } pl-2`}
                  style={
                    isDarkMode
                      ? { cursor: "pointer", color: "#F5F5F7" }
                      : { cursor: "pointer", color: "#000000" }
                  }
                  onClick={props.handleDelete}
                >
                  <BsTrash />
                  <span className="ml-2">Delete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={`row pb-4 ${!props.list ? "border-top pt-4":"pt-2" } `}>
        <div className="col-md-4 mb-2">{!props.list && "Question:"}</div>
        <div className="col-md-8">
          <textarea
            value={
              props.question
                ? props.question.data.questionText
                : mPCQuestion.questionText
            }
            onChange={handleChangeMPC}
            readOnly={props.list ? true : false}
            name="questionText"
            className={isDarkMode ? "input-field-dark-mode" : "input-field"}
            placeholder="Add Question"
            style={{ width: "100%", minHeight: "60px" }}
          />
          <div className="row">
            <div className="col-10">
              <label>Options:</label>
            </div>
          </div>

          <div className="row">
            <div className="col-10">
              <textarea
                value={
                  props.question
                    ? props.question.data.option1
                    : mPCQuestion.option1
                }
                onChange={handleChangeMPC}
                name="option1"
                className={`${
                  isDarkMode ? "input-field-dark-mode" : "input-field"
                } mb-2`}
                readOnly={props.list ? true : false}
                placeholder="1st Option"
                style={{ width: "100%", minHeight:"40px" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <textarea
           value={
                  props.question
                    ? props.question.data.option2
                    : mPCQuestion.option2
                }
                onChange={handleChangeMPC}
                name="option2"
                className={`${
                  isDarkMode ? "input-field-dark-mode" : "input-field"
                } mb-2`}
                placeholder="2nd Option"
                readOnly={props.list ? true : false}
                style={{ width: "100%", minHeight:"40px" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <textarea
                value={
                  props.question
                    ? props.question.data.option3
                    : mPCQuestion.option3
                }
                onChange={handleChangeMPC}
                name="option3"
                className={`${
                  isDarkMode ? "input-field-dark-mode" : "input-field"
                } mb-2`}
                placeholder="3rd Option"
                readOnly={props.list ? true : false}
                style={{ width: "100%", minHeight:"40px" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <textarea
                value={
                  props.question
                    ? props.question.data.option4
                    : mPCQuestion.option4
                }
                onChange={handleChangeMPC}
                name="option4"
                className={`${
                  isDarkMode ? "input-field-dark-mode" : "input-field"
                } mb-2`}
                placeholder="4th Option"
                style={{ width: "100%", minHeight:"40px" }}
                readOnly={props.list ? true : false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-10">
              <label>Answer:</label>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <textarea
                value={
                  props.question
                    ? props.question.data.answer
                    : mPCQuestion.answer
                }
                onChange={handleChangeMPC}
                name="answer"
                className={`${
                  isDarkMode ? "input-field-dark-mode" : "input-field"
                } mb-2`}
                placeholder="Paste the answer"
                readOnly={props.list ? true : false}
                style={{ width: "100%", minHeight:"40px" }}
              />
            </div>
          </div>
          {!props.list && (
            <button className="button mt-4" onClick={handleSubmitMPC}>
              Save and Add
            </button>
          )}
        </div>
      </div>
    </>
  );
};

const EssayFormQuestion = (props) => {
  const { isDarkMode } = useContext(LayoutContext);
  const [essayQuestion, setEssayQuestion] = useState("");

  const handleChangeEssay = (e) => {
    setEssayQuestion(e.target.value);
  };

  const handleSubmitEssay = (e) => {
    e.preventDefault();
    if (!essayQuestion) return;
    props.addQuestion(essayQuestion);
    setEssayQuestion("");
  };

  return (

    <>
     {props.list && (
        <div className="row border-top pl-3 pr-3 pt-2 d-flex">
          <div>Question: {props.index + 1}</div>
          <div className="ml-auto">
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
              
                <div
                  className={`dropdown-item rounded  ${
                    isDarkMode ? "dark-mode" : "light"
                  } pl-2`}
                  style={
                    isDarkMode
                      ? { cursor: "pointer", color: "#F5F5F7" }
                      : { cursor: "pointer", color: "#000000" }
                  }
                  onClick={props.handleDelete}
                >
                  <BsTrash />
                  <span className="ml-2">Delete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={`row pb-4 ${!props.list ? "border-top pt-4" : "pt-2"}`}>
        <div className="col-md-4 mb-2">{!props.list && "Question:"}</div>
        <div className="col-md-8">
          <textarea
            value={props.question? props.question.data:essayQuestion}
            className={isDarkMode ? "input-field-dark-mode" : "input-field"}
            placeholder="Add Question"
            style={{ width: "100%", minHeight: "60px" }}
            onChange={handleChangeEssay}
            readOnly={props.list? true: false}
          />
           {!props.list && (
            <button className="button mt-4" onClick={handleSubmitEssay}>
              Save and Add
            </button>
          )}
        </div>
      </div>
    </>
  );
};

const TOFFormQuestion = (props) => {
  const { isDarkMode } = useContext(LayoutContext);
   const [toFQuestion, setToFQuestion] = useState({
    questionText: "",
    answer: "",
  });

  const handleChangeToF = (e) => {
    const { name, value } = e.target;
    setToFQuestion({ ...toFQuestion, [name]: value });
  };

  const handleSubmitToF = (e) => {
    e.preventDefault();
    if (!toFQuestion) return;
    props.addQuestion(toFQuestion);
    setToFQuestion({questionText:"", answer:""});
  };

  return (
    <>
      {props.list && (
        <div className="row border-top pl-3 pr-3 pt-2 d-flex">
          <div>Question: {props.index + 1}</div>
          <div className="ml-auto">
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
              
                <div
                  className={`dropdown-item rounded  ${
                    isDarkMode ? "dark-mode" : "light"
                  } pl-2`}
                  style={
                    isDarkMode
                      ? { cursor: "pointer", color: "#F5F5F7" }
                      : { cursor: "pointer", color: "#000000" }
                  }
                  onClick={props.handleDelete}
                >
                  <BsTrash />
                  <span className="ml-2">Delete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={`row pb-4 ${!props.list ? "border-top pt-4" : "pt-2"}`}>
        <div className="col-md-4 mb-2">{!props.list && "Question:"}</div>
        <div className="col-md-8">
          <textarea
            value={props.question? props.question.data.questionText : toFQuestion.questionText}
            onChange={handleChangeToF}
            name="questionText"
            readOnly={props.list ? true :false}
            className={isDarkMode ? "input-field-dark-mode" : "input-field"}
            placeholder="Add Question"
            style={{ width: "100%", minHeight: "60px" }}
          />
          <label>Answer:</label>
          <select
            className={isDarkMode ? "select-box-dark-mode" : "select-box"}
            name="answer"
            onChange={handleChangeToF}
            readOnly
            value={props.question? props.question.data.answer: toFQuestion.answer}
          >
            <option></option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
           {!props.list && (
            <button className="button mt-4" onClick={handleSubmitToF}>
              Save and Add
            </button>
          )}  
        </div>
      </div>
    </>
  );
};

const MPFormQuestion = (props) => {
  const { isDarkMode } = useContext(LayoutContext);
  const [mPQuestion, setMPQuestion] = useState({
    questionText: "",
    answer: "",
  });

 
  const handleChangeMP = (e) => {
    const { name, value } = e.target;
    setMPQuestion({ ...mPQuestion, [name]: value });
  };

  const handleSubmitMP = (e) => {
    e.preventDefault();
    if (!mPQuestion) return;
    props.addQuestion(mPQuestion);
    setMPQuestion({
    questionText: "",
    answer: "",
  });
  };
  return (
    <>
     {props.list && (
        <div className="row border-top pl-3 pr-3 pt-2 d-flex">
          <div>Question: {props.index + 1}</div>
          <div className="ml-auto">
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
            
                <div
                  className={`dropdown-item rounded  ${
                    isDarkMode ? "dark-mode" : "light"
                  } pl-2`}
                  style={
                    isDarkMode
                      ? { cursor: "pointer", color: "#F5F5F7" }
                      : { cursor: "pointer", color: "#000000" }
                  }
                  onClick={props.handleDelete}
                >
                  <BsTrash />
                  <span className="ml-2">Delete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={`row pb-4 ${!props.list ? "border-top pt-4" : "pt-2"}`}>
        <div className="col-md-4 mb-2">{!props.list && "Question:"}</div>
        <div className="col-md-8">
          <textarea
                value={props.question? props.question.data.questionText: mPQuestion.questionText}
            onChange={handleChangeMP}
            name="questionText"
            className={isDarkMode ? "input-field-dark-mode" : "input-field"}
            placeholder="Add Question"
            style={{ width: "100%", minHeight: "60px" }}
            readOnly={props.list? true:false}
          />
          <label>Answer:</label>
          <div className="row">
            <div className="col-10">
              <textarea
                name="answer"
                value={props.question? props.question.data.answer: mPQuestion.answer}
                onChange={handleChangeMP}
                className={`${
                  isDarkMode ? "input-field-dark-mode" : "input-field"
                } mb-2`}
                placeholder="Answer"
            readOnly={props.list? true:false}
            style={{ width: "100%", minHeight: "60px" }}
                
                style={{ width: "100%" }}
              />
                 {!props.list && (
            <button className="button mt-4" onClick={handleSubmitMP}>
              Save and Add
            </button>
          )}  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Question = ({
  question,
  questionType,
  index,
  listComplete,
  deleteList,
}) => {

  const handleClick = () => {
    listComplete(index);
  };

  const handleDelete = () => {
    deleteList(index);
  };

  return (
    <>
      {questionType === "Multiple Choice" && (
        <MPCFormQuestion
          list={true}
          question={question}
          handleDelete={handleDelete}
          index={index}
        />
      )}
      {questionType === "Essay" && (
        <EssayFormQuestion
          list={true}
          question={question}
          handleDelete={handleDelete}
          index={index}
        />
      )}
      {questionType === "True or False" && (
        <TOFFormQuestion
          list={true}
          question={question}
          handleDelete={handleDelete}
          index={index}
        />
      )}
      {questionType === "Match Pairs" && (
        <MPFormQuestion
          list={true}
          question={question}
          handleDelete={handleDelete}
          index={index}
        />
      )}
    </>
  );
};

export const QuestionForm = ({ addQuestion, questionType }) => {

  
  return (
    <>
      {questionType === "Multiple Choice" && (
        <MPCFormQuestion
          addQuestion={addQuestion}
        />
      )}
      {questionType === "Essay" && (
        <EssayFormQuestion  addQuestion={addQuestion} />
      )}
      {questionType === "True or False" && (
        <TOFFormQuestion  addQuestion={addQuestion} />
      )}
      {questionType === "Match Pairs" && (
       <MPFormQuestion addQuestion={addQuestion}/>
      )}
    </>
  );
};

export const AddTaskQuestion = (props) => {
  const { questions, setQuestion } = useContext(CreateTaskContext);
  const questionType = props.questionType;
  const addQuestion = (data) => {
    const questionList = [...questions, { data }];
    setQuestion(questionList);
  };

  const listComplete = (index) => {
    const newList = [...questions];
    newList[index].isCompleted === true
      ? (newList[index].isCompleted = false)
      : (newList[index].isCompleted = true);
    setQuestion(newList);
  };

  const deleteList = (index) => {
    const delList = [...questions];
    delList.splice(index, 1);
    setQuestion(delList);
  };
  const [createQuestion, setCreateQuestion] = useState(false);
  return (
    <div className="add-question">
      <div className="question-list">
        {questions.map((question, index) => {
          return (
            <Question
              listComplete={listComplete}
              deleteList={deleteList}
              questionType={questionType}
              key={index}
              index={index}
              question={question}
            />
          );
        })}

        {!createQuestion && questionType ? (
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              {" "}
              <button
                className="button mb-4"
                onClick={() => setCreateQuestion(true)}
              >
                Create Questions
              </button>
            </div>
          </div>
        ) : (
          <QuestionForm addQuestion={addQuestion} questionType={questionType} />
        )}
      </div>
    </div>
  );
};

export const AddQuizQuestion = (props) => {
  const { questions, setQuestion } = useContext(CreateQuizContext);
  const questionType = props.questionType;
  const addQuestion = (data) => {
    const questionList = [...questions, { data }];
    setQuestion(questionList);
  };

  const listComplete = (index) => {
    const newList = [...questions];
    newList[index].isCompleted === true
      ? (newList[index].isCompleted = false)
      : (newList[index].isCompleted = true);
    setQuestion(newList);
  };

  const deleteList = (index) => {
    const delList = [...questions];
    delList.splice(index, 1);
    setQuestion(delList);
  };
  const [createQuestion, setCreateQuestion] = useState(false);
  return (
    <div className="add-question">
      <div className="question-list">
        {questions.map((question, index) => {
          return (
            <Question
              listComplete={listComplete}
              deleteList={deleteList}
              questionType={questionType}
              key={index}
              index={index}
              question={question}
            />
          );
        })}

        {!createQuestion && questionType ? (
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              {" "}
              <button
                className="button mb-4"
                onClick={() => setCreateQuestion(true)}
              >
                Create Questions
              </button>
            </div>
          </div>
        ) : (
          <QuestionForm addQuestion={addQuestion} questionType={questionType} />
        )}
      </div>
    </div>
  );
};

export const EditTaskQuestion = (props) => {
  const { questions, setQuestion } = useContext(EditTaskContext);
  const questionType = props.questionType;
  const addQuestion = (data) => {
    const questionList = [...questions, { data }];
    setQuestion(questionList);
  };

  const listComplete = (index) => {
    const newList = [...questions];
    newList[index].isCompleted === true
      ? (newList[index].isCompleted = false)
      : (newList[index].isCompleted = true);
    setQuestion(newList);
  };

  const deleteList = (index) => {
    const delList = [...questions];
    delList.splice(index, 1);
    setQuestion(delList);
  };
  const [createQuestion, setCreateQuestion] = useState(false);
  return (
    <div className="add-question">
      <div className="question-list">
        {questions.map((question, index) => {
          return (
            <Question
              listComplete={listComplete}
              deleteList={deleteList}
              questionType={questionType}
              key={index}
              index={index}
              question={question}
            />
          );
        })}

        {!createQuestion && questionType ? (
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              {" "}
              <button
                className="button mb-4"
                onClick={() => setCreateQuestion(true)}
              >
                Create Questions
              </button>
            </div>
          </div>
        ) : (
          <QuestionForm addQuestion={addQuestion} questionType={questionType} />
        )}
      </div>
    </div>
  );
};

export const EditQuizQuestion = (props) => {
  const { questions, setQuestion } = useContext(EditQuizContext);
  const questionType = props.questionType;
  const addQuestion = (data) => {
    const questionList = [...questions, { data }];
    setQuestion(questionList);
  };

  const listComplete = (index) => {
    const newList = [...questions];
    newList[index].isCompleted === true
      ? (newList[index].isCompleted = false)
      : (newList[index].isCompleted = true);
    setQuestion(newList);
  };

  const deleteList = (index) => {
    const delList = [...questions];
    delList.splice(index, 1);
    setQuestion(delList);
  };
  const [createQuestion, setCreateQuestion] = useState(false);
  return (
    <div className="add-question">
      <div className="question-list">
        {questions.map((question, index) => {
          return (
            <Question
              listComplete={listComplete}
              deleteList={deleteList}
              questionType={questionType}
              key={index}
              index={index}
              question={question}
            />
          );
        })}

        {!createQuestion && questionType ? (
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              {" "}
              <button
                className="button mb-4"
                onClick={() => setCreateQuestion(true)}
              >
                Create Questions
              </button>
            </div>
          </div>
        ) : (
          <QuestionForm addQuestion={addQuestion} questionType={questionType} />
        )}
      </div>
    </div>

  );
};
