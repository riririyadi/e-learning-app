import React, { useState, useContext, useEffect, useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import DatePicker from "react-datepicker";
import FileUpload from "./FileUpload";
import { Link } from "react-router-dom";
import CustomModal from "./Modal";
import { FiCheckCircle } from "react-icons/fi";
import { LayoutContext } from "./NewLayout";
import axios from "axios";
import moment from "moment";

export default function CreateNewLesson() {
  const location = useLocation();
  const history = useHistory();
  const { classroom } = location.state;
  const { isDarkMode } = useContext(LayoutContext);
  const [startDate, setStartDate] = useState(new Date());
  const [taskId, setTaskId] = useState("");
  const [quizId, setQuizId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [taskData, setTaskData] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]=useState("");
  const [videoUrl, setVideoUrl] = useState("");
const [files, setFiles] = useState();



  const data = {
name: name,
due_date: moment(startDate).format("YYYY-MM-DD HH:mm:ss"),
duration: duration,
classroom_id: classroom.id,
quiz_id: quizId,
task_id: taskId,
file_materi: files,
video_url: videoUrl
} 

  console.log(data)



  const token = localStorage.getItem("token");
  const header = {
    Authorization: `Bearer ${token}`,
  };


  const postLesson = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post("http://elearning.havicrm.tk/api/lesson", data,{
        headers: header,
      });
      console.log(res.data);
      history.goBack();
    } catch (err) {
      console.log(err);
    setIsLoading(false);
    }
  };

  const getAllQuiz = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("http://elearning.havicrm.tk/api/quiz", {
        headers: header,
      });
      console.log(res.data);
      setQuizData(res.data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };


const getAllTask = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("http://elearning.havicrm.tk/api/task", {
        headers: header,
      });
      console.log(res.data);
      setTaskData(res.data);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllQuiz();
    getAllTask();
  },[]);

console.log(files);

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        setFiles(reader.result)
      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])


  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div className={`${isDarkMode ? "input-field-dark-mode": "input-field"}`} style={{height:"60px"}}>
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <input {...getInputProps()} />
      {files ? <p>File imported</p>:
      <p>Drag 'n' drop some files here, or click to select files</p>}
              
    </div>
    </div>
  )
}



  function handleOpenModal() {
    setIsOpen(!isOpen);
  }
  const Confirmation = () => {
    return (
      <div className="p-4">
        <div style={{ fontSize: "14px" }}>
          <h6 style={{ textAlign: "center" }}>Do you want to proceed?</h6>
          <br />
          <div className="centering">
            <div>
                <button className="button mr-4" onClick={postLesson}>
                 Yes
                </button>
              <button className="button" onClick={handleOpenModal}>
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
        <b>Create New Lesson</b>
      </h5>
      <div
        className={`${
          isDarkMode ? "bg-darks" : "bg-white"
        } p-4 shadow-sm mt-4 mb-4`}
        style={{ borderRadius: "10px" }}
      >
        <div className="row mb-2">
          <div className="col-md-4">Lesson Name:</div>
          <div className="col-md-8">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              type="text"
              placeholder="Enter a lesson name"
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Lesson Description:</div>
          <div className="col-md-8">
            <textarea
            value={description}
              onChange={e => setDescription(e.target.value)}
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              type="text"
              placeholder="Enter lesson description"
              style={{ height: "150px" }}
            />
          </div>
        </div>
        <div className="row" style={{marginBottom:"10px"}}>
          <div className="col-md-4">Add Materi:</div>
          <div className="col-md-8">
            <MyDropzone/>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Add Quiz:</div>
          <div className="col-md-8">
            <select
            value = {quizId}
            onChange={e => setQuizId(e.target.value)}
              className={isDarkMode ? "select-box-dark-mode" : "select-box"}     
            >
              <option></option>
               {quizData.map((q,i) => (
              <option value={q.id} key={i}>{q.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Add Task:</div>
          <div className="col-md-8">
            <select
            value={taskId}
            onChange={e => setTaskId(e.target.value)}
            className={isDarkMode ? "select-box-dark-mode" : "select-box"}
            >
              <option value=""></option>
              {taskData.map((t,i) => (

              <option value={t.id} key={i}>{t.name}</option>
              ))}
             
            </select>
          </div>
           </div>
          <div className="row mb-2">
          <div className="col-md-4">Due date:</div>
          <div className="col-md-8">
          <div className={isDarkMode? "datepickerWrap-dark":"datepickerWrap"}>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                showTimeSelect
                timeFormat="p"
                timeIntervals={15}
                dateFormat="yyyy-MM-dd HH:mm:ss"
              />
          </div>
          </div>
        </div>
          <div className="row mb-2">
          <div className="col-md-4">Duration (Quiz and Task):</div>
          <div className="col-md-8">
            <input
            value={duration}
            onChange={e => setDuration(e.target.value)}
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              type="number"
              placeholder="30"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Embed a Video:</div>
          <div className="col-md-8">
            <input
            value={videoUrl}
            onChange={e => setVideoUrl(e.target.value)}
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              type="text"
              placeholder="Paste a video URL"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <button className="button mt-2" onClick={handleOpenModal}>
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
