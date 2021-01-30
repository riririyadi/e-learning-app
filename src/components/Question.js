import React, { useState, useContext, useEffect, useMemo } from "react";
import { MyAnswerContext } from "./DoQuiz";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function Question({ questions, setQuestions, questionType }) {
const questionsToShuffle = [...questions] 
const [is_random] = useState(false);
// const [questionType] = useState("MATCH_PAIR");
const [text, setText] = useState("");

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

  const shuffledQuestion = useMemo(() => {
  return shuffle(questionsToShuffle);
},[]);



const getX = JSON.parse(localStorage.getItem("shuffledQuestion"));

// useEffect(() => {
//  if (!localStorage.getItem("shuffledQuestion")){
//       localStorage.setItem("shuffledQuestion", JSON.stringify(shuffledQuestion));
//     }
// }, [])

const [randomQuestions, setRandomQuestions] = useState(JSON.parse(localStorage.getItem("shuffledQuestion")) || shuffledQuestion);
const { myAnswer, setMyAnswer } = useContext(MyAnswerContext);


  const AddAnswer = (question_id, answer) => {
    if (myAnswer.some((e) => e.question_id === question_id)) {
      myAnswer.splice(
        myAnswer.findIndex((e) => e.question_id === question_id),
        1
      );
      const newAnswer = [...myAnswer, { question_id, answer }];
      setMyAnswer(newAnswer);
    } else {
      const newAnswer = [...myAnswer, { question_id, answer }];
      setMyAnswer(newAnswer);
    }
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [checked,setChecked] = useState(JSON.parse(localStorage.getItem("checked")) || []);

  const handleChecked = (currentQuestion, optId) => {
    const newChecked = [...checked]
    newChecked[currentQuestion] = optId
    setChecked(newChecked);
  }
  const [dummyAnswer,setDummyAnswer] = useState(JSON.parse(localStorage.getItem("dummyAnswer")) || []);

   const handleDummyAnswer = (currentQuestion, dummy) => {
    const newdummyAnswer = [...dummyAnswer]
    newdummyAnswer[currentQuestion] = dummy
    setDummyAnswer(newdummyAnswer);
  }

useEffect(() => {
    localStorage.setItem("myAnswer", JSON.stringify(myAnswer));
    localStorage.setItem("checked", JSON.stringify(checked)); 
    localStorage.setItem("dummyAnswer", JSON.stringify(dummyAnswer))
}, [myAnswer, checked, dummyAnswer])


  const handleNextQuestion = (e) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion(0);
    }
  };

  const handlePrevQuestion = (e) => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevState) => prevState - 1);
    }
  };


  const choices = ["Iphone", "Samsung", "Xiaomi", "Oppo", "Nokia"];

  return (
    <>
    {questionType ==="MULTIPLE_CHOICE" &&<>
    {is_random ? <>    <div
        className="mb-4 p-4"
        style={{ borderRadius: "5px", border: "1px solid #2b2b2b" }}
      >
        <div>
          <h6>Question {currentQuestion + 1}</h6>
         <p>{randomQuestions[currentQuestion].question}</p>
        </div>
        <div>
          {randomQuestions[currentQuestion].options.map((opt, i) => (
            <div key={i}>
              <label>
                <input
                  type="radio"
                  name="option"
                  value={opt.id}
                  onChange={()=>{}}
                  onClick={(e)=> {handleChecked(currentQuestion,opt.id); AddAnswer(randomQuestions[currentQuestion].id, opt.id)}}
                  checked={checked[currentQuestion] === opt.id}
                />
                {" "}{opt.option} 
           
              </label>
            </div>
          ))}
        </div>
      </div></>:<>
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
                  value={opt.id}
                  onChange={()=>{}}
                  onClick={(e)=> {handleChecked(currentQuestion,opt.id); AddAnswer(questions[currentQuestion].id, opt.id)}}
                  checked={checked[currentQuestion] === opt.id}
                />
                {" "}{opt.option} 
           
              </label>
            </div>
          ))}
        </div>
      </div></>}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="button" onClick={handlePrevQuestion}>
          Previous
        </button>{" "}
        <button
          className="button"
          onClick={handleNextQuestion}
        >
          Next
        </button>
      </div></>}

 {questionType ==="ESSAY" &&<>{is_random ? <> <div className="mb-4">

           <div className="mb-4 p-4"
        style={{ borderRadius: "5px", border: "1px solid #2b2b2b" }}
      >
           <h6>Question {currentQuestion + 1}</h6>
          <p>{randomQuestions[currentQuestion].question}</p>
        </div>   
        <div className="editor mb-4">
            <CKEditor 
            editor = {ClassicEditor}
            data = {dummyAnswer[currentQuestion] || text}
            onChange ={(event, editor) => {
                const data = editor.getData();
                setText(data)
            }}
            />
        </div>
  <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="button" onClick={() => {handlePrevQuestion();AddAnswer(randomQuestions[currentQuestion].id, text); handleDummyAnswer(currentQuestion,text);setText("")}}>
          Previous
        </button>{" "}
        <button
          className="button"
          onClick={() => {AddAnswer(randomQuestions[currentQuestion].id, text); handleDummyAnswer(currentQuestion,text);setText("");handleNextQuestion()}}
        >
          Save and Next
        </button>
      </div>
      </div></>: 
     <>   <div className="mb-4 p-4"
        style={{ borderRadius: "5px", border: "1px solid #2b2b2b" }}
      >
        <div>
           <h6>Question {currentQuestion + 1}</h6>
          <p>{questions[currentQuestion].question}</p>
        </div>   
        <div className="editor mb-4">
            <CKEditor 
            editor = {ClassicEditor}
            data = {dummyAnswer[currentQuestion] || text}
            onChange ={(event, editor) => {
                const data = editor.getData();
                setText(data)
            }}
            />
        </div>
  <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="button" onClick={() => {handlePrevQuestion();AddAnswer(questions[currentQuestion].id, text); handleDummyAnswer(currentQuestion,text);setText("")}}>
          Previous
        </button>{" "}
        <button
          className="button"
          onClick={() => {handleNextQuestion();AddAnswer(questions[currentQuestion].id, text); handleDummyAnswer(currentQuestion,text);setText("")}}
        >
          Save and Next
        </button>
      </div>
      </div></>}</>}

 {questionType ==="TRUE_OR_FALSE" &&
 <>{is_random ?  <div className="mb-4 p-4"
        style={{ borderRadius: "5px", border: "1px solid #2b2b2b" }}
      >
        <div>
           <h6>Question {currentQuestion + 1}</h6>
          <p>{randomQuestions[currentQuestion].question}</p>
        </div>
        <div>
          <label>
            <input type="radio" name="option" value="true" checked={checked[currentQuestion] === "true"}  onClick={(e)=> {handleChecked(currentQuestion, e.target.value); AddAnswer(randomQuestions[currentQuestion].id, e.target.value)}}/> <span className="ml-2">True</span>
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="option" value="false" checked={checked[currentQuestion] === "false"}  onClick={(e)=> {handleChecked(currentQuestion, e.target.value); AddAnswer(randomQuestions[currentQuestion].id, e.target.value)}}/> <span className="ml-2">False</span>
          </label>
        </div>
      </div>: 
      <div className="mb-4 p-4"
        style={{ borderRadius: "5px", border: "1px solid #2b2b2b" }}
      >
        <div>
           <h6>Question {currentQuestion + 1}</h6>
          <p>{questions[currentQuestion].question}</p>
        </div>
        <div>
          <label>
            <input type="radio" name="option" value="true" checked={checked[currentQuestion] === "true"}  onClick={(e)=> {handleChecked(currentQuestion, e.target.value); AddAnswer(questions[currentQuestion].id, e.target.value)}}/> <span className="ml-2">True</span>
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="option" value="false" checked={checked[currentQuestion] === "false"}  onClick={(e)=> {handleChecked(currentQuestion, e.target.value); AddAnswer(questions[currentQuestion].id, e.target.value)}}/> <span className="ml-2">False</span>
          </label>
        </div>
      </div>}
 <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="button" onClick={handlePrevQuestion}>
          Previous
        </button>{" "}
        <button
          className="button"
          onClick={handleNextQuestion}
        >
          Next
        </button>
      </div>
      </>}

{questionType ==="MATCH_PAIR" &&<>
{is_random ?<> <div className="mb-4 p-4"
        style={{ borderRadius: "5px", border: "1px solid #2b2b2b" }}>
        <div className="mb-4">
          <h6>Question {currentQuestion + 1}</h6>
        </div>
        <div className="row mt-2">
          <div className="col-sm-8 mb-2">
           {questions[currentQuestion].question}
          </div>
          <div className="col-sm-4 mb-2">
            <select style={{width:"100%"}} className="select-box" value={dummyAnswer[currentQuestion] || ""} onChange={(e) => {AddAnswer(questions[currentQuestion].id, e.target.value);handleDummyAnswer(currentQuestion, e.target.value)}}>
              <option value=""></option>
              {choices.map((choice,i) => (
              <option value={choice}>{choice}</option>))}
            </select>
          </div>
        </div>
      </div></>:
   <>   <div className="mb-4 p-4"
        style={{ borderRadius: "5px", border: "1px solid #2b2b2b" }}>
        <div className="mb-4">
          <h6>Question {currentQuestion + 1}</h6>
        </div>
        <div className="row mt-2">
          <div className="col-sm-8 mb-2">
           {questions[currentQuestion].question}
          </div>
          <div className="col-sm-4 mb-2">
            <select style={{width:"100%"}} className="select-box" value={dummyAnswer[currentQuestion] || ""} onChange={(e) => {AddAnswer(questions[currentQuestion].id, e.target.value);handleDummyAnswer(currentQuestion, e.target.value)}}>
              <option value=""></option>
              {choices.map((choice,i) => (
              <option value={choice}>{choice}</option>))}
            </select>
          </div>
        </div>
      </div></>}
 <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="button" onClick={handlePrevQuestion}>
          Previous
        </button>{" "}
        <button
          className="button"
          onClick={handleNextQuestion}
        >
          Next
        </button>
      </div>
      </>}
    </>
  );
}
