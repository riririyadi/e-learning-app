import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import TextEditor from "./TextEditor";

export default function Question({ questions }) {
  return (
    <>
      {questions.map((q, i) => (
        <div
          key={q.id}
          className="mb-4 p-4"
          style={{ borderRadius: "5px", border: "1px solid #2b2b2b" }}
        >
          <div>
            <h6>Multiple Choice Question {i + 1}</h6>
            <p>{q.questionText}</p>
          </div>
          <div>
            <form>
              {q.answerOptions.map((a) => (
                <div>
                  <label>
                    <input type="radio" /> {a.answerText}
                  </label>
                </div>
              ))}
            </form>
          </div>
        </div>
      ))}

      <div className="mb-4">
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
      </div>
    </>
  );
}
