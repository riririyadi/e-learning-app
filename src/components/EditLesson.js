import React, { useState, useContext, useEffect, useCallback } from "react";
import { useLocation, useHistory,useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import DatePicker from "react-datepicker";
import FileUpload from "./FileUpload";
import { Link } from "react-router-dom";
import CustomModal from "./Modal";
import { FiCheckCircle } from "react-icons/fi";
import { LayoutContext } from "./NewLayout";
import axios from "axios";
import { Loader } from "./Loader";
import moment from "moment";

export default function EditLesson() {
  const location = useLocation();
  const history = useHistory();
  const { id } = useParams();
  const { isDarkMode } = useContext(LayoutContext);
  const {startDate, setStartDate} = useState(new Date());
  const [lesson, setLesson] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError]=useState("");
const [files, setFiles] = useState();


 function handleChange(e) {
    const { name, value } = e.target;
    setLesson({ ...lesson, [name]: value });
  }


  const token = localStorage.getItem("token");
  const header = {
    Authorization: `Bearer ${token}`,
  };

const getDetailLesson = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`http://elearning.havicrm.tk/api/lesson/${id}`, {
        headers: header,
      });
      console.log(res.data);
      setLesson(res.data)
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };


  const updateLesson = async () => {
    try {
      setIsSubmitting(true);
      const res = await axios.post(`http://elearning.havicrm.tk/api/lesson/${id}`, lesson,{
        headers: header,
      });
      history.goBack();
    } catch (err) {
      console.log(err);setIsSubmitting(false);
    }
  };

  const getAllQuiz = async () => {
    try {
      const res = await axios.get("http://elearning.havicrm.tk/api/quiz", {
        headers: header,
      });
      setQuizData(res.data);
    } catch (err) {
      console.log(err);
    }
  };


const getAllTask = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("http://elearning.havicrm.tk/api/task", {
        headers: header,
      });
      setTaskData(res.data);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getDetailLesson();
    getAllQuiz();
    getAllTask();
  },[]);



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
    <div className="input-field" style={{height:"60px"}}>
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <input {...getInputProps()} />
      {files ? <p>File imported</p>:
      <p>Drag 'n' drop some files here, or click to select files</p>}
              
    </div>
    </div>
  )
}

const setDate = (date) =>  {
  setLesson({...lesson, ["due_date"]: moment(date).format("YYYY-MM-DD HH:mm:ss")})
}

  function handleOpenModal() {
    setIsOpen(!isOpen);
  }
  const Confirmation = () => {
    return (
      <div className="p-4">
       { isSubmitting ? <div className="centering"><Loader/></div>: <div style={{ fontSize: "14px" }}>
                 <h6 style={{ textAlign: "center" }}>Do you want to proceed?</h6>
                 <br />
                 <div className="centering">
                   <div>
                       <button className="button mr-4" onClick={updateLesson}>
                        Yes
                       </button>
                     <button className="button" onClick={handleOpenModal}>
                       No
                     </button>
                   </div>
                 </div>
               </div>}
      </div>
    );
  };
  return (
    <>
      <h5 className="mb-4">
        <b>Edit Lesson</b>
      </h5>
      {isLoading ? <div className="main-area-center-loader"><Loader /></div>:
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
              value={lesson.name||""}
              onChange={handleChange}
              name="name"
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
            value={lesson.description||""}
              onChange={handleChange}
              name="description"
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
            value={lesson.quiz_id||""}
              onChange={handleChange}
              name="quiz_id"
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
            value={lesson.task_id||""}
              onChange={handleChange}
              name="task_id"
            className={isDarkMode ? "select-box-dark-mode" : "select-box"}
            >
              <option value=""></option>
              {taskData.map((t,i) => (

              <option value={t.id} key={i}>{t.name}</option>
              ))}
             
            </select>
          </div>
           </div>
          <div className="row mb-4">
          <div className="col-md-4">Due date:</div>
          <div className="col-md-8">
          last due date: {lesson.due_date}
          <div className={isDarkMode? "datepickerWrap-dark mt-2":"datepickerWrap mt-2"}>
            <DatePicker
                value={startDate}
              onChange={date => setDate(date)}
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
           value={lesson.duration||""}
              onChange={handleChange}
              name="duration"
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
          value={lesson.video_url||""}
              onChange={handleChange}
              name="video_url"
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              type="text"
              placeholder="Paste a video URL"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <button className="button mt-2" onClick={handleOpenModal}>
          Update
        </button>
      </div>}
      <CustomModal
        isOpen={isOpen}
        onRequestClose={handleOpenModal}
        componentToPass={<Confirmation />}
      />
    </>
  );
}
