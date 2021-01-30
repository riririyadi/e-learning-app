import React, { useState, useContext } from "react";
import { LayoutContext } from "./NewLayout";
import { CreateTaskContext } from "./CreateNewTask";
import { CreateQuizContext } from "./CreateNewQuiz";
import { EditTaskContext } from "./EditTask";
import { EditQuizContext } from "./EditQuiz";
import { FaCheckCircle } from "react-icons/fa";
import { BsThreeDots, BsTrash } from "react-icons/bs";

function Option({ option, index, correctOption }) {
  const { isDarkMode } = useContext(LayoutContext);

  const handleClick = () => {
    correctOption(index);
  };

  return (
      <div
        style={{
          width: "100%",
          backgroundColor: `${isDarkMode? "#464649" :"#e5e5e5"}`,
          padding: "10px",
          borderRadius: "7px",
          marginBottom: "10px",
        }}
        onClick={handleClick}
      >
        {option.option} {option.is_true && <span className="ml-2"><FaCheckCircle color="#00d48c"/></span>}
      </div>
  );
}

function OptionForm({ addOption, length }) {
  const { isDarkMode } = useContext(LayoutContext);

  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addOption(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      {length < 4 && (
        <>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`${
              isDarkMode ? "input-field-dark-mode" : "input-field"
            } mb-2`}
            placeholder="Type an option"
            style={{ width: "100%", minHeight: "40px" }}
          />
          <button className="button" onClick={handleSubmit}>
            Save and Add Option
          </button>
        </>
      )}
    </form>
  );
}

const MPCFormQuestion = (props) => {
  const { isDarkMode } = useContext(LayoutContext);

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const addOption = (option) => {
    const NewOptions = [...options, { option }];
    setOptions(NewOptions);
  };


  const correctOption = (index) => {
    const newList = [...options];
    newList[index].is_true === true
      ? (newList[index].is_true = false)
      : (newList[index].is_true = true);
    setOptions(newList);
  };

  const handleSubmitMPC = (e) => {
    e.preventDefault();
    if (!question || options.length < 4) return;
    props.addQuestion(question, null, options);
    setQuestion("");
    setOptions([]);
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
                                isDarkMode ? "dd-dark-mode" : "light"
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
      <div className={`row pb-4 ${!props.list ? "border-top pt-4" : "pt-2"} `}>
        <div className="col-md-4 mb-2">{!props.list && "Question:"}</div>
        {props.list ? (
          <div className="col-md-8">
            <textarea
              value={props.question.question}
              readOnly
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Add Question"
              style={{ width: "100%", minHeight: "60px" }}
            />
            <div className="row">
              <div className="col-10">
                <label>Options:</label>
              </div>
            </div>
            {props.question.options.map((op, i) => (
                 <div key={i}
        style={{
          width: "100%",
          backgroundColor: `${isDarkMode? "#464649" :"#e5e5e5"}`,
          padding: "10px",
          borderRadius: "7px",
          marginBottom: "10px",
        }}
      >
        {op.option} {op.is_true && <span className="ml-2"><FaCheckCircle color="#00d48c"/></span>}
      </div>
            ))}
          </div>
        ) : (
          <div className="col-md-8">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              name="questionText"
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Add Question"
              style={{ width: "100%", minHeight: "60px" }}
            />
            <div className="row">
              <div className="col-10">
                <label>
                  Options: {options.length > 0 && !("is_true" === true in options) && <span style={{color:"red"}}>Click to select the correct option</span>}
                </label>
              </div>
            </div>
            {options.map((option, index) => (
              <Option
                key={index}
                index={index}
                option={option}
                correctOption={correctOption}
              />
            ))}
            <OptionForm addOption={addOption} length={options.length} />
            <button className="button mt-4" onClick={handleSubmitMPC}>
              Save and Add Question
            </button>
          </div>
        )}
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
    props.addQuestion(essayQuestion, null, null);
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
                                isDarkMode ? "dd-dark-mode" : "light"
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
            value={props.question ? props.question.question : essayQuestion}
            className={isDarkMode ? "input-field-dark-mode" : "input-field"}
            placeholder="Add Question"
            style={{ width: "100%", minHeight: "60px" }}
            onChange={handleChangeEssay}
            readOnly={props.list ? true : false}
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

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmitToF = (e) => {
    e.preventDefault();
    if (!question || !answer) return;
    props.addQuestion(question, answer);
    setQuestion("");
    setAnswer("");
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
                                isDarkMode ? "dd-dark-mode" : "light"
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
            value={props.question ? props.question.question : question}
            onChange={(e) => setQuestion(e.target.value)}
            readOnly={props.list ? true : false}
            className={isDarkMode ? "input-field-dark-mode" : "input-field"}
            placeholder="Add Question"
            style={{ width: "100%", minHeight: "60px" }}
          />
          <label>Answer:</label>
          <select
            className={isDarkMode ? "select-box-dark-mode" : "select-box"}
            onChange={(e) => setAnswer(e.target.value)}
            readOnly
            value={props.question ? props.question.answer : answer}
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

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmitMP = (e) => {
    e.preventDefault();
    if (!question || !answer) return;
    props.addQuestion(question, answer);
    setQuestion("");
    setAnswer("");
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
                                isDarkMode ? "dd-dark-mode" : "light"
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
            value={props.question ? props.question.question : question}
            onChange={(e) => setQuestion(e.target.value)}
            className={isDarkMode ? "input-field-dark-mode" : "input-field"}
            placeholder="Add Question"
            style={{ width: "100%", minHeight: "60px" }}
            readOnly={props.list ? true : false}
          />
          <label>Answer:</label>
          <div className="row">
            <div className="col-10">
              <textarea
                name="answer"
                value={props.question ? props.question.answer : answer}
                onChange={(e) => setAnswer(e.target.value)}
                className={`${
                  isDarkMode ? "input-field-dark-mode" : "input-field"
                } mb-2`}
                placeholder="Answer"
                readOnly={props.list ? true : false}
                style={{ width: "100%", minHeight: "60px" }}
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

  const handleDelete = () => {
    deleteList(index);
  };

  return (
    <>
      {questionType === "MULTIPLE_CHOICE" && (
        <MPCFormQuestion
          list={true}
          question={question}
          handleDelete={handleDelete}
          index={index}
        />
      )}
      {questionType === "ESSAY" && (
        <EssayFormQuestion
          list={true}
          question={question}
          handleDelete={handleDelete}
          index={index}
        />
      )}
      {questionType === "TRUE_OR_FALSE" && (
        <TOFFormQuestion
          list={true}
          question={question}
          handleDelete={handleDelete}
          index={index}
        />
      )}
      {questionType === "MATCH_PAIR" && (
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
      {questionType === "MULTIPLE_CHOICE" && (
        <MPCFormQuestion addQuestion={addQuestion} />
      )}
      {questionType === "ESSAY" && (
        <EssayFormQuestion addQuestion={addQuestion} />
      )}
      {questionType === "TRUE_OR_FALSE" && (
        <TOFFormQuestion addQuestion={addQuestion} />
      )}
      {questionType === "MATCH_PAIR" && (
        <MPFormQuestion addQuestion={addQuestion} />
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
  const addQuestion = (question, answer, options) => {
    const questionList = [...questions, { question, answer, options }];
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
