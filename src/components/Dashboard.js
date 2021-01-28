import React, { useContext, useEffect } from "react";
import { LayoutContext } from "./NewLayout";

function Dashboard() {


  useEffect(() => {
 document.title = "E-learning | Dashboard"
  }, [])

  return (
    <>
      <h5 className="mb-4">
        <b>News</b>
      </h5>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div
            className="content-header"
            style={{
              backgroundImage:
                "linear-gradient(to right bottom, #5ac8fa, #45cdf7, #31d2f2, #23d6eb, #24dae2, #2edddf, #38dfdb, #42e2d7, #47e5da, #4ce7dc, #51eadf, #56ede2)",
              height: "200px",
            }}
          >
            <div className="background-1 p-4">
              <div>
                <h5>
                  <b>Welcome</b>
                </h5>
                <h6>Finish your remaining tasks within our platform</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div
            className="content-header"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #0a84ff, #137df5, #1877ea, #1c70e0, #1e6ad6, #1f62ce, #2059c7, #2151bf, #2643b7, #2d34ae, #3323a3, #3a0798)",
              height: "200px",
            }}
          >
            <div className="announcement p-4">
              <h5>
                <b>Announcement</b>
              </h5>
              <h6>Storage usage</h6>
            </div>
          </div>
        </div>
      </div>
      <h5 className="mb-4">
        <b>Activities</b>
      </h5>
      <div className="row">
        <div className="col-lg-3 mb-4">
          <div
            className="content-header"
            style={{
              backgroundImage:
                "linear-gradient(to left bottom, #58c788, #64c985, #70cb83, #7bcd80, #85cf7e, #8bcf7a, #91cf75, #97cf71, #9bcd69, #9fca60, #a3c858, #a8c54f)",

              height: "200px",
            }}
          >
            <div className="background2 p-4">
              <div>
                <h5>
                  <b>Classroom</b>
                </h5>
                <h3>
                  <b>5</b>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div
            className="content-header"
            style={{
              backgroundImage:
                "linear-gradient(to right bottom, #00f7a7, #00f1ab, #00eaae, #00e4b0, #00ddb2, #0dddb8, #1adebe, #25dec3, #35e5cf, #44edda, #52f4e6, #5ffbf1)",
              height: "200px",
            }}
          >
            <div className="background3 p-4">
              <div>
                <h5>
                  <b>Lessons</b>
                </h5>
                <h3>
                  <b>5</b>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div
            className="content-header"
            style={{
              backgroundImage:
                "linear-gradient(to left top, #d283ec, #f17fcd, #ff84b0, #ff8f99, #f99d8a, #f8a282, #f5a87b, #f0ae76, #f5ad69, #f9ad5b, #fdad4c, #ffad3b)",
              height: "200px",
            }}
          >
            <div className="background4 p-4">
              <div>
                <h5>
                  <b>Tasks</b>
                </h5>
                <h3>
                  <b>5</b>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div
            className="content-header"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #4ccfa7, #3bcab3, #33c5bd, #36bfc4, #43b9c8, #29b3d0, #09add7, #00a6dd, #009bed, #008efa, #007cff, #4e65ff)",
              height: "200px",
            }}
          >
            <div className="background5 p-4">
              <div>
                <h5>
                  <b>Quizes</b>
                </h5>
                <h3>
                  <b>5</b>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <h5 className="mb-4">
            <b>Recent Activities</b>
          </h5>
          <div className="">
            <div className="mb-4 d-flex bd-highlight">
              <div
                style={{
                  width: "10px",
                  backgroundColor: "#772CE8",
                }}
              ></div>
              <div
                style={{
                  width: "95%",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div> Quiz desain dan animasi</div>
                <small style={{ color: "#b2b2b2" }}>
                  <i>Last: 12 Dec 2020, 13.31 AM</i>
                </small>
              </div>
            </div>
            <div className="mb-4 d-flex bd-highlight">
              <div
                style={{
                  width: "10px",
                  backgroundColor: "#772CE8",
                }}
              ></div>
              <div
                style={{
                  width: "95%",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div>Quiz desain dan animasi</div>
                <small style={{ color: "#b2b2b2" }}>
                  <i>Last: 11 Dec 2020, 10.00 AM</i>
                </small>
              </div>
            </div>
            <div className="mb-4 d-flex bd-highlight">
              <div
                style={{
                  width: "10px",
                  backgroundColor: "#772CE8",
                }}
              ></div>
              <div
                style={{
                  width: "95%",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div>Quiz desain dan animasi</div>
                <small style={{ color: "#b2b2b2" }}>
                  <i>Last: 11 Dec 2020, 10.00 AM</i>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h5 className="mb-4">
            <b>Upcoming Events</b>
          </h5>
          <div className="">
            <div className="mb-4 d-flex bd-highlight">
              <div
                style={{
                  width: "10px",
                  backgroundColor: "#772CE8",
                }}
              ></div>
              <div
                style={{
                  width: "95%",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div>Quiz desain dan animasi</div>
                <small style={{ color: "#b2b2b2" }}>
                  <i>Due date: 24 Dec 2020, 10.00 AM</i>
                </small>
              </div>
            </div>
            <div className="mb-4 d-flex bd-highlight">
              <div
                style={{
                  width: "10px",
                  backgroundColor: "#772CE8",
                }}
              ></div>
              <div
                style={{
                  width: "95%",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div>Quiz Pengantar teknologi informasi</div>
                <small style={{ color: "#b2b2b2" }}>
                  <i>Due Date: 24 Dec 2020, 10.00 AM</i>
                </small>
              </div>
            </div>
            <div className="mb-4 d-flex bd-highlight">
              <div
                style={{
                  width: "10px",
                  backgroundColor: "#772CE8",
                }}
              ></div>
              <div
                style={{
                  width: "95%",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div>Quiz Pengantar teknologi informasi</div>
                <small style={{ color: "#b2b2b2" }}>
                  <i>Due Date: 24 Dec 2020, 10.00 AM</i>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
