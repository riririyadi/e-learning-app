import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import TextEditor from "./TextEditor";

export default function Question({ questions, setQuestions }) {

  const [answer, setAnswer] = useState("");
  const [myAnswer, setMyAnswer] = useState([]);
  const AddAnswer = (question_id, answer) => {
    if (myAnswer.some((e) => e.question_id === question_id)) {
      myAnswer.splice(
        myAnswer.findIndex((e) => e.question_id === question_id),
        1
      );
      const newAnswer = [...myAnswer, { question_id, answer }];
      setMyAnswer(newAnswer);
      setAnswer("");
    } else {
      const newAnswer = [...myAnswer, { question_id, answer }];
      setMyAnswer(newAnswer);
      setAnswer("");
    }
  };

  console.log(myAnswer);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [checked,setChecked] = useState([]);

  const handleChecked = (currentQuestion, optId) => {
    const newChecked = [...checked]
 newChecked[currentQuestion] = optId
   setChecked(newChecked);
  }
console.log(checked);
  console.log(questions);

  const handleNextQuestion = (e) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert("oopso");
    }
  };

  const handlePrevQuestion = (e) => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevState) => prevState - 1);
    }
  };

  return (
    <>
      <div
        className="mb-4 p-4"
        style={{ borderRadius: "5px", border: "1px solid #2b2b2b" }}
      >
        <div>
          <h6>Question {currentQuestion + 1}</h6>
          <p>{questions[currentQuestion].question}</p>
        </div>
        <div>
          {questions[currentQuestion].options.map((opt, i) => (
            <div key={i}>
              <label>
                <input
                  type="radio"
                  name="option"
                  onChange={(e) => setAnswer(opt.option)}
                  onClick={(e)=> handleChecked(currentQuestion,opt.id)}
                />
                {" "}{opt.id} - {opt.option} 
           
              </label>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="button" onClick={() => {AddAnswer(questions[currentQuestion].id, answer);handlePrevQuestion()}}>
          Previous
        </button>{" "}
        <button
          className="button"
          onClick={() => {AddAnswer(questions[currentQuestion].id, answer); handleNextQuestion()}}
        >
          Next
        </button>
      </div>

      {/** <div className="mb-4">
        <div>
          <h6>Essay Question </h6>
          <p>What's something good about nothing?</p>
        </div>
        <TextEditor />
      </div>

      <div className="mb-4">
        <div>
          <h6>True or False Question</h6>
          <p>What's something good about nothing?</p>
        </div>
        <div>
          <label>
            <input type="radio" /> True
          </label>
        </div>
        <div>
          <label>
            <input type="radio" /> False
          </label>
        </div>
      </div>

      <div className="mb-4">
        <div>
          <h6>Match Pairs Question</h6>
        </div>
        <div className="row mt-2">
          <div className="col-sm-8">
            What is the latest flagship of apple?
          </div>
          <div className="col-sm-4 mb-2">
            <select className="select-box" style={{width:"100%"}}>
              <option value=""></option>
              <option value="">Samsung S20</option>
              <option value="">Iphone 12</option>
              <option value="">Oppo</option>
              <option value="">Xiaomi</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            What is the latest flagship of samsung?
          </div>
          <div className="col-sm-4 mb-2">
            <select className="select-box" style={{width:"100%"}}>
              <option value=""></option>
              <option value="">Samsung S20</option>
              <option value="">Iphone 12</option>
              <option value="">Oppo</option>
              <option value="">Xiaomi</option>
            </select>
          </div>
        </div>
      </div> **/}
    </>
  );
}
