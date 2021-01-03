import React, { useState } from "react";
import Datetime from "react-datetime";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import { LayoutContext } from "./NewLayout";

const MyDTPicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const renderInput = (props, openCalendar, closeCalendar) => {
    function clear() {
      props.onChange({ target: { value: "" } });
    }

    return (
      <div style={{ display: "flex" }}>
        <input {...props} />
        <button
          style={{ border: "none", padding: "0 10px" }}
          onClick={openCalendar}
        >
          <FaCalendarAlt />
        </button>
        <button
          style={{ border: "none", padding: "0 10px", backgroundColor: "red" }}
          onClick={clear}
        >
          X
        </button>
      </div>
    );
  };
  function handleChange(date) {
    setSelectedDate({ date });
  }

  console.log(selectedDate.date);
  return (
    <Datetime
      renderInput={renderInput}
      isValidDate={valid}
      onChange={handleChange}
    />
  );
};
let yesterday = moment().subtract(1, "day");
function valid(current) {
  return current.isAfter(yesterday);
}

export default function CreateNewTask() {
  return (
    <div className="bg-white p-4 mt-4 mb-4" style={{ borderRadius: "10px" }}>
      <h5>Create New Task</h5>
      <div className="row mb-2">
        <div className="col-md-4">Task Name:</div>
        <div className="col-md-8">
          <input placeholder="Enter a task name" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-4">Task Description:</div>
        <div className="col-md-8">
          <textarea
            placeholder="Enter task description"
            style={{ width: "100%", height: "150px" }}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-4">Class: </div>
        <div className="col-md-8">
          <div className="">
            <select style={{ width: "100%", height: "25px" }}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-4">Due Date: </div>
        <div className="col-md-8">
          <div className="">
            <MyDTPicker />
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-4">Duration (minutes):</div>
        <div className="col-md-8">
          <input placeholder="5" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-4">Random Question display: </div>
        <div className="col-md-8">
          <input type="checkbox" />
          <label className="ml-2">Yes</label>
          <input type="checkbox" className="ml-4" />
          <label className="ml-2">No</label>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-4">Question Type: </div>
        <div className="col-md-8">
          <input type="checkbox" placeholder="5" />
          <label className="ml-2">Multiple Choice</label>
          <br />
          <input type="checkbox" placeholder="5" />
          <label className="ml-2">Essay</label>
          <br />
          <input type="checkbox" placeholder="5" />
          <label className="ml-2">Matches Pairs</label>
          <br />
          <input type="checkbox" placeholder="5" />
          <label className="ml-2">True or false</label>
          <br />
          <button
            style={{
              width: "100%",
              border: "none",
              borderRadius: "20px",
              backgroundColor: "#1EB8CF",
              padding: "7px",
            }}
          >
            Create Questions
          </button>
        </div>
      </div>

      <div className="row mb-2">
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
          <button
            style={{
              width: "100%",
              border: "none",
              borderRadius: "20px",
              backgroundColor: "#1EB8CF",
              padding: "7px",
            }}
          >
            Add Questions
          </button>
        </div>
      </div>
      <button
        style={{
          width: "100%",
          border: "none",
          borderRadius: "20px",
          backgroundColor: "#1EB8CF",
          padding: "7px",
        }}
      >
        Create
      </button>
    </div>
  );
}
