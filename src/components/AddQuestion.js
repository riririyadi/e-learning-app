import React, { useState } from "react";

const NewQuestion = () => {
  return (
    <div className="bg-white p-4 mb-2 mt-4" style={{borderRadius:"10px"}}>
      <div className="row">
        <div className="col-md-4">Questions:</div>
        <div className="col-md-8">
          <input placeholder="Question" style={{ width: "100%" }} />
          <label className="mt-2">Choices:</label>
          <div className="row">
            <div className="col-sm-10">
              <input
                className="mb-2"
                placeholder="1st Choice"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-sm-2">
              <select>
                <option>true</option>
                <option>false</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10">
              <input
                className="mb-2"
                placeholder="2nd Choice"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-sm-2">
              <select>
                <option>true</option>
                <option>false</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10">
              <input
                className="mb-2"
                placeholder="3rd Choice"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-sm-2">
              <select>
                <option>true</option>
                <option>false</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10">
              <input
                className="mb-2"
                placeholder="4th Choice"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-sm-2">
              <select>
                <option>true</option>
                <option>false</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AddQuestion() {
  const [inputList, setInputList] = useState([]);
  console.log(inputList);

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<NewQuestion key={inputList.length} />));
  };

  return (
    <div>
      {inputList}
      <button
        className="mt-4 mb-4"
        style={{
          width: "100%",
          border: "none",
          borderRadius: "20px",
          backgroundColor: "#1EB8CF",
          padding: "7px",
        }}
        onClick={onAddBtnClick}
      >
        Add Questions
      </button>
    </div>
  );
}
