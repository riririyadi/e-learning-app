import React, { useState, useContext, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import CustomModal from "./Modal";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosLogIn } from "react-icons/io";
import { LayoutContext } from "./NewLayout";
import ReactTooltip from "react-tooltip";
import axios from "axios";
import { Loader } from "./Loader";

 
export default function StudentClassroom() {
  const token = localStorage.getItem("token");
  let match = useRouteMatch();
  const { isDarkMode } = useContext(LayoutContext);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const [classroomData, setClassroomData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      document.title = "E-learning | Classroom"
  },[])

  function handleOpenModal() {
    setIsOpen(!isOpen);
  }

  const header = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

   const getAllClassroom = async () => {
    try {
      const res = await axios.get("http://elearning.havicrm.tk/api/classroom", {
        headers: header,
      });
      setClassroomData(res.data);
    } catch (err) {
      console.log(err);
      setError(err.message)
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllClassroom();
  }, []);


const NewClassSearch = () => {
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [error, setError] = useState("");

const data = {
  classcode: code
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const res = await axios.post(
        "http://elearning.havicrm.tk/api/classroom/join",
        data,
        {
          headers: header,
        }
      );
      setIsJoined(true);
    getAllClassroom();
    handleOpenModal();
    }catch(err) {
      console.log(err);
      setError(err);
    setIsSubmitting(false)
    }
  };


  return (
    <div className="p-4" style={{ fontSize: "14px" }}>
      {isSubmitting ? (
        <>
          <h6>Joining New Class</h6>{" "}
          <div className="centering mb-4 mt-4">
            {" "}
            <Loader />{" "}
          </div>{" "}
        </>
      ) : (
        <>
          {isJoined ? (
            <div className="centering mb-4 mt-4">
              {" "}
              You has joined to the classroom
            </div>
          ) : (
            <>
              <h6>Join New Class</h6>
              {error && <div style={{ color: "red" }}>Invalid Code</div>}
              <input
                type="text"
                value={code}
                className={isDarkMode ? "input-field-dark-mode" : "input-field"}
                placeholder="Enter Classroom Code"
                onChange={(e) => setCode(e.target.value)}
              />
              <button className="button mt-2" onClick={handleSubmit}>
                Join
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

  
  const linearGradient = [
    "to right top, #4ccfa7, #3bcab3, #33c5bd, #36bfc4, #43b9c8, #29b3d0, #09add7, #00a6dd, #009bed, #008efa, #007cff, #4e65ff",
    "to left top, #ffffff, #f6f7f9, #eaeff3, #dee7eb, #d2e0e2, #c9d7d8, #c0cdcf, #b7c4c5, #aeb6ba, #a5a9ac, #9b9c9e, #909090",
    "to left bottom, #58c788, #64c985, #70cb83, #7bcd80, #85cf7e, #8bcf7a, #91cf75, #97cf71, #9bcd69, #9fca60, #a3c858, #a8c54f",
    "to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1",
    "to right bottom, #d283ec, #f17fcd, #ff84b0, #ff8f99, #f99d8a, #f8a282, #f5a87b, #f0ae76, #f5ad69, #f9ad5b, #fdad4c, #ffad3b",
    "to top, #3597ff, #3f9bfe, #49a0fe, #52a4fd, #5ba8fc, #5fa7fd, #63a5fe, #68a4ff, #709bff, #7d91ff, #8d86ff, #a078ff",
    "to right top, #f7d449, #ffcf67, #ffcc83, #ffcc9d, #ffceb5, #fccbc0, #f6cac9, #eccad0, #e2c3d4, #d3bed8, #bebada, #a5b8d9",
    "to right bottom, #00f7a7, #00f1ab, #00eaae, #00e4b0, #00ddb2, #0dddb8, #1adebe, #25dec3, #35e5cf, #44edda, #52f4e6, #5ffbf1",
    "to left, #f7d4d4, #f2cfd3, #edcad2, #e7c5d2, #e0c1d1, #ddbed2, #d9bbd3, #d4b9d4, #d1b7d7, #cdb5db, #c8b3df, #c1b2e3",
    "to right top, #3fb979, #44bc79, #49bf7a, #4dc17a, #52c47a, #53ca78, #54d076, #56d674, #57e06d, #59eb65, #5ef55b, #65ff4e",
  ];

  const linearGradients = Array.from({ length: 5 }).fill(linearGradient).flat();

  return (
    <div>
      <div className="mb-4 d-flex bd-highlight">
        <div className="bd-highlight">
          <h5>
            <b>Classroom</b>
          </h5>
        </div>
        <div className="ml-4 bd-highlight" style={{ fontSize: "15px" }}>
          <span
            data-tip="Join New Class"
            data-for="join-new-class"
            onClick={handleOpenModal}
          >
            <ReactTooltip
              id="join-new-class"
              place="right"
              type="dark"
              effect="solid"
              offset={{ right: 10 }}
            />
            <AiOutlinePlusCircle size="20px" />
          </span>
          <CustomModal
            isOpen={isOpen}
            onRequestClose={handleOpenModal}
            componentToPass={<NewClassSearch />}
          />
        </div>
      </div>
{isLoading? <div className="main-area-center-loader"><Loader/></div>: <>{error ? <div className="main-area-center-error">{error}</div>:
      <div className="row">
        {classroomData.map((data, i) => (
          <div className="col-lg-3 mb-4" key={data.id}>
            <div
              className="card"
              style={{
                backgroundImage: `linear-gradient(${linearGradients[i]})`,
                border: "none",
                height: "246px",
                borderRadius: "10px",
              }}
            >
              <div
                className={`classroom-${
                  i + 1
                } d-flex align-items-start flex-column`}
              >
                <div className="p-4">
                  <h5>
                    <b>{data.subject}</b>
                  </h5>
                  <h6>
                    <b>{data.class}</b>
                  </h6>
                </div>
                <div
                  className="card-footer mt-auto d-flex bg-transparent pl-2 pr-2"
                  style={{ border: "none", width: "100%" }}
                >
                  <div>
                    <Link
                      to={`${match.url}/${data.id}`}
                      className={`${
                        isDarkMode ? "dark-manage-link" : "manage-link"
                      }`}
                    >
                      <div className="centering">
                        <button
                          className={`${
                            isDarkMode ? "dark-overlay-btn" : "overlay-btn"
                          } centering`}
                          style={{
                            padding: "5px 5px",
                          }}
                        >
                          <IoIosLogIn />
                        </button>
                        <span className="ml-2">Enter</span>
                      </div>
                    </Link>
                  </div>

                  <div className="ml-auto">
                    <span
                      data-tip={`Teacher: ${data.teacher.name}`}
                      data-for="teacher"
                    >
                      <ReactTooltip
                        id="teacher"
                        place="top"
                        type="dark"
                        effect="solid"
                      />
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="teacher-pic"
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>}</>}
    </div>
  );
}
