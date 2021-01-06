import React, { useState, useContext, createContext } from "react";
import { FiCheckCircle, FiPlus } from "react-icons/fi";
import { LayoutContext } from "./NewLayout";
import { CreateTaskContext } from "./CreateNewTask";
import { CreateQuizContext } from "./CreateNewQuiz";
import { EditTaskContext } from "./EditTask";
import { EditQuizContext } from "./EditQuiz";
import { BiPencil } from "react-icons/bi";
import { BsThreeDots, BsPlusCircle, BsTrash } from "react-icons/bs";

export const Question = ({ question, questionType, index, listComplete, deleteList }) => {
  const { isDarkMode } = useContext(LayoutContext);
  console.log(questionType);
  const handleClick = () => {
    listComplete(index);
  };

  const handleClick2 = () => {
    deleteList(index);
  };

  return (
    <>
      {questionType === "Multiple Choice" && (
        <div>
          <div className="row border-top pl-3 pr-3 pt-2 pb-2 d-flex">
            <div>Question: #{index + 1}</div>
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
                    className={`dropdown-item rounded ${
                      isDarkMode ? "dark-mode" : "light"
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
                  <div
                    className={`dropdown-item rounded  ${
                      isDarkMode ? "dark-mode" : "light"
                    } pl-2`}
                    style={
                      isDarkMode
                        ? { cursor: "pointer",  color: "#F5F5F7" }                          
                        : { cursor: "pointer", color: "#000000"  }
                    }
                    onClick={handleClick2}
                  >
                    <BsTrash />
                    <span className="ml-2">Delete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-4 pt-2">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <textarea
                value={question.data.questionText}
                readOnly
                name="questionText"
                className={isDarkMode ? "input-field-dark-mode" : "input-field"}
                placeholder="Add Question"
                style={{ width: "100%", minHeight: "50px" }}
              />
              <div className="row">
                <div className="col-10">
                  <label>Options:</label>
                </div>
              </div>

              <div className="row">
                <div className="col-10">
                  <input
                    value={question.data.option1}
                    name="option1"
                    className={`${
                      isDarkMode ? "input-field-dark-mode" : "input-field"
                    } mb-2`}
                    readOnly
                    placeholder="1st Choice"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <input
                    value={question.data.option2}
                    name="option2"
                    className={`${
                      isDarkMode ? "input-field-dark-mode" : "input-field"
                    } mb-2`}
                    placeholder="2nd Choice"
                    readOnly
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <input
                    value={question.data.option3}
                    name="option3"
                    className={`${
                      isDarkMode ? "input-field-dark-mode" : "input-field"
                    } mb-2`}
                    placeholder="3rd Choice"
                    readOnly
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <input
                    value={question.data.option4}
                    name="option4"
                    className={`${
                      isDarkMode ? "input-field-dark-mode" : "input-field"
                    } mb-2`}
                    placeholder="4th Choice"
                    style={{ width: "100%" }}
                    readOnly
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
                  <input
                    value={question.data.answer}
                    name="answer"
                    className={`${
                      isDarkMode ? "input-field-dark-mode" : "input-field"
                    } mb-2`}
                    placeholder="Paste the answer"
                    readOnly
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {questionType === "Essay" && (
        <>
          <div className="row mb-2 border-top pt-2 pb-2 pr-3 pl-3 d-flex">
            <div>Question: #{index + 1}</div>
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
                    className={`dropdown-item rounded ${
                      isDarkMode ? "dark-mode" : "light"
                    } pl-2`}
                   style={
                      isDarkMode
                        ? { cursor: "pointer",  color: "#F5F5F7" }                          
                        : { cursor: "pointer", color: "#000000"  }
                    }                  >
                    <BiPencil />
                    <span className="ml-2">Edit</span>
                  </div>
                  <div
                    className={`dropdown-item rounded  ${
                      isDarkMode ? "dark-mode" : "light"
                    } pl-2`}
                    style={
                      isDarkMode
                        ? { cursor: "pointer",  color: "#F5F5F7" }                          
                        : { cursor: "pointer", color: "#000000"  }
                    }
                    onClick={handleClick2}
                  >
                    <BsTrash />
                    <span className="ml-2">Delete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-4">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <textarea
                value={question.data}
                className={isDarkMode ? "input-field-dark-mode" : "input-field"}
                placeholder="Add Question"
                style={{ width: "100%", minHeight: "50px" }}
                readOnly
              />
            </div>
          </div>
        </>
      )}
      {questionType === "True or False" && (
        <>
          <div className="row mb-2 border-top pt-2 pb-2 pr-3 pl-3 d-flex">
            <div>Question: #{index + 1}</div>
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
                    className={`dropdown-item rounded ${
                      isDarkMode ? "dark-mode" : "light"
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
                  <div
                    className={`dropdown-item rounded  ${
                      isDarkMode ? "dark-mode" : "light"
                    } pl-2`}
                     style={
                      isDarkMode
                        ? { cursor: "pointer",  color: "#F5F5F7" }                          
                        : { cursor: "pointer", color: "#000000"  }
                    }
                    onClick={handleClick2}
                  >
                    <BsTrash />
                    <span className="ml-2">Delete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-4">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <textarea
                value={question.data.questionText}
                name="questionText"
                readOnly
                className={isDarkMode ? "input-field-dark-mode" : "input-field"}
                placeholder="Add Question"
                style={{ width: "100%", minHeight: "50px" }}
              />
              <label>Answer:</label>
              <select
                className={isDarkMode ? "select-box-dark-mode" : "select-box"}
                name="answer"
                readOnly
                value={question.data.answer}
              >
                <option></option>
                <option value="True">True</option>
                <option value="False">False</option>
              </select>
            </div>
          </div>
        </>
      )}
      {questionType === "Match Pairs" && (
        <>
          <div className="row mb-2 border-top pt-2 pb-2 pr-3 pl-3 d-flex">
            <div>Question: #{index + 1}</div>
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
                    className={`dropdown-item rounded ${
                      isDarkMode ? "dark-mode" : "light"
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
                  <div
                    className={`dropdown-item rounded  ${
                      isDarkMode ? "dark-mode" : "light"
                    } pl-2`}
                     style={
                      isDarkMode
                        ? { cursor: "pointer",  color: "#F5F5F7" }                          
                        : { cursor: "pointer", color: "#000000"  }
                    }
                    onClick={handleClick2}
                  >
                    <BsTrash />
                    <span className="ml-2">Delete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <textarea
                value={question.data.questionText}
                name="questionText"
                className={isDarkMode ? "input-field-dark-mode" : "input-field"}
                placeholder="Add Question"
                style={{ width: "100%", minHeight: "50px" }}
                readOnly
              />
              <label>Answer:</label>
              <div className="row pb-4">
                <div className="col-10">
                  <input
                    name="answer"
                    value={question.data.answer}
                    className={`${
                      isDarkMode ? "input-field-dark-mode" : "input-field"
                    } mb-2`}
                    placeholder="Answer"
                    readOnly
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export const QuestionForm = ({ addQuestion, questionType }) => {
  const { isDarkMode } = useContext(LayoutContext);
  const [essayQuestion, setEssayQuestion] = useState("");
  const [toFQuestion, setToFQuestion] = useState({
    questionText: "",
    answer: "",
  });
  const [mPQuestion, setMPQuestion] = useState({
    questionText: "",
    answer: "",
  });
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
    addQuestion(mPCQuestion);
    setMPCQuestion("");
  };

  const handleChangeMPC = (e) => {
    const { name, value } = e.target;
    setMPCQuestion({ ...mPCQuestion, [name]: value });
  };

  const handleChangeEssay = (e) => {
    setEssayQuestion(e.target.value);
  };

  const handleSubmitEssay = (e) => {
    e.preventDefault();
    if (!essayQuestion) return;
    addQuestion(essayQuestion);
    setEssayQuestion("");
  };

  const handleChangeToF = (e) => {
    const { name, value } = e.target;
    setToFQuestion({ ...toFQuestion, [name]: value });
  };

  const handleSubmitToF = (e) => {
    e.preventDefault();
    if (!toFQuestion) return;
    addQuestion(toFQuestion);
    setToFQuestion("");
  };

  const handleChangeMP = (e) => {
    const { name, value } = e.target;
    setMPQuestion({ ...mPQuestion, [name]: value });
  };

  const handleSubmitMP = (e) => {
    e.preventDefault();
    if (!mPQuestion) return;
    addQuestion(mPQuestion);
    setMPQuestion("");
  };
  return (
    <>
      {questionType === "Multiple Choice" && (
        <div className="row mb-2 border-top pt-4 pb-4">
          <div className="col-md-4">Question:</div>
          <div className="col-md-8">
            <textarea
              value={mPCQuestion.questionText || ""}
              onChange={handleChangeMPC}
              name="questionText"
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Add Question"
              style={{ width: "100%", minHeight: "50px" }}
            />
            <div className="row">
              <div className="col-10">
                <label>Options:</label>
              </div>
            </div>

            <div className="row">
              <div className="col-10">
                <input
                  value={mPCQuestion.option1 || ""}
                  onChange={handleChangeMPC}
                  name="option1"
                  className={`${
                    isDarkMode ? "input-field-dark-mode" : "input-field"
                  } mb-2`}
                  placeholder="1st Option"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <input
                  value={mPCQuestion.option2 || ""}
                  onChange={handleChangeMPC}
                  name="option2"
                  className={`${
                    isDarkMode ? "input-field-dark-mode" : "input-field"
                  } mb-2`}
                  placeholder="2nd Option"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <input
                  value={mPCQuestion.option3 || ""}
                  onChange={handleChangeMPC}
                  name="option3"
                  className={`${
                    isDarkMode ? "input-field-dark-mode" : "input-field"
                  } mb-2`}
                  placeholder="3rd Option"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <input
                  value={mPCQuestion.option4 || ""}
                  onChange={handleChangeMPC}
                  name="option4"
                  className={`${
                    isDarkMode ? "input-field-dark-mode" : "input-field"
                  } mb-2`}
                  placeholder="4th Option"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <label>Answer:</label>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <input
                  value={mPCQuestion.answer || ""}
                  onChange={handleChangeMPC}
                  name="answer"
                  className={`${
                    isDarkMode ? "input-field-dark-mode" : "input-field"
                  } mb-2`}
                  placeholder="Paste the answer"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <button className="button mt-4" onClick={handleSubmitMPC}>
              Save and Add
            </button>
          </div>
        </div>
      )}
      {questionType === "Essay" && (
        <div className="row mb-2 border-top pt-4 pb-4">
          <div className="col-md-4">Question:</div>
          <div className="col-md-8">
            <textarea
              value={essayQuestion}
              onChange={handleChangeEssay}
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Add Question"
              style={{ width: "100%", minHeight: "50px" }}
            />
            <button className="button mt-4" onClick={handleSubmitEssay}>
              Save and Add
            </button>
          </div>
        </div>
      )}
      {questionType === "True or False" && (
        <div className="row mb-2 border-top pt-4 pb-4">
          <div className="col-md-4">Question:</div>
          <div className="col-md-8">
            <textarea
              value={toFQuestion.questionText || ""}
              onChange={handleChangeToF}
              name="questionText"
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Add Question"
              style={{ width: "100%", minHeight: "50px" }}
            />
            <label>Answer:</label>
            <div className="row">
              <div className="col-10">

            <select
              className={isDarkMode ? "select-box-dark-mode" : "select-box"}
              name="answer"
              value={toFQuestion.answer || ""}
              onChange={handleChangeToF}
            >
              <option></option>
              <option value="True">True</option>
              <option value="False">False</option>
            </select>
          </div>
            </div>
            <button className="button mt-4" onClick={handleSubmitToF}>
              Save and Add
            </button>
          </div>
        </div>
      )}
      {questionType === "Match Pairs" && (
        <div className="row mb-2 border-top pt-4 pb-4">
          <div className="col-md-4">Question:</div>
          <div className="col-md-8">
            <textarea
              value={mPQuestion.questionText || ""}
              onChange={handleChangeMP}
              name="questionText"
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Add Statement"
              style={{ width: "100%", minHeight: "50px" }}
            />
            <label>Answer:</label>
            <div className="row">
              <div className="col-10">
                <input
                value={mPQuestion.answer||""}
              onChange={handleChangeMP}

                  name="answer"
                  className={`${
                    isDarkMode ? "input-field-dark-mode" : "input-field"
                  } mb-2`}
                  placeholder="Answer"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <button className="button mt-4" onClick={handleSubmitMP}>
              Save and Add
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export const AddTaskQuestion = (props) => {
  const {questions, setQuestion} = useContext(CreateTaskContext);
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
}



export const AddQuizQuestion = (props) => {
  const {questions, setQuestion} = useContext(CreateQuizContext);
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
}



export const EditTaskQuestion = (props) => {
  const {questions, setQuestion} = useContext(EditTaskContext);
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
}

export const EditQuizQuestion = (props) => {
  const {questions, setQuestion} = useContext(EditQuizContext);
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
}