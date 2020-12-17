import React from "react";

function Dashboard() {
  return (
    <>
      <h5 className="mt-4 mb-4">News</h5>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div
            className="content-header"
            style={{ backgroundColor: "#772CE8" }}
          >
            <div className="background1 p-4">
              <h5>Selamat Datang</h5>
              <p>Selesaikan tugas yang tertunda melalui platform kami</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div
            className="content-header"
            style={{ backgroundColor: "#B34ED4" }}
          >
            <div className="announcement p-4">
              <h5>Pengumuman</h5>
              <p>Penggunaan storage</p>
            </div>
          </div>
        </div>
      </div>
      <h5 className="mb-4">Activities</h5>
      <div className="row">
        <div className="col-lg-3 mb-4">
          <div
            className="content-header"
            style={{ backgroundColor: "#FB7E71", height: "200px" }}
          >
            <div className="background2 p-4">
              <h5>Classrooms</h5>
              <h3>5</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div
            className="content-header"
            style={{ backgroundColor: "#772CE8", height: "200px" }}
          >
            <div className="background3 p-4">
              <h5>Lessons</h5>
              <h3>5</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div
            className="content-header"
            style={{ backgroundColor: "#00D48C", height: "200px" }}
          >
            <div className="background4  p-4">
              <h5>Tasks</h5>
              <h3>5</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div
            className="content-header"
            style={{ backgroundColor: "#F0D06E", height: "200px" }}
          >
            <div className="background5  p-4">
              <h5>Quizes</h5>
              <h3>5</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <h5 className="mb-4">Recent Activities</h5>
          <div className="">
            <div
              className="mb-4 d-flex bd-highlight"
              style={{ backgroundColor: "#fff"}}
            >
              <div
                style={{
                  width: "10px",
                  backgroundColor: "#772CE8",
                }}
              ></div>
              <div
                style={{
                  width: "95%",
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
               <div> Quiz desain dan animasi</div>
                <small style={{color:"#b2b2b2"}}><i>Last: 12 Dec 2020, 13.31 AM</i></small>
              </div>
            </div>
            <div
              className="mb-4 d-flex bd-highlight"
              style={{ backgroundColor: "#fff" }}
            >
              <div
                style={{
                  width: "10px",
                  backgroundColor: "#772CE8",
                }}
              ></div>
              <div
                style={{
                  width: "95%",
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div>Quiz desain dan animasi</div>
                <small style={{color:"#b2b2b2"}}><i>Last: 11 Dec 2020, 10.00 AM</i></small>
              </div>
            </div>
            <div
              className="mb-4 d-flex bd-highlight"
              style={{ backgroundColor: "#fff" }}
            >
              <div
                style={{
                  width: "10px",
                  backgroundColor: "#772CE8",
                }}
              ></div>
              <div
                style={{
                  width: "95%",
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div>Quiz desain dan animasi</div>
                <small style={{color:"#b2b2b2"}}><i>Last: 11 Dec 2020, 10.00 AM</i></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h5 className="mb-4">Upcoming Events</h5>
          <div className="">
            <div
              className="mb-4 d-flex bd-highlight"
              style={{ backgroundColor: "#fff"}}
            >
              <div
                style={{
                  width: "10px",
                  backgroundColor: "#772CE8",
                }}
              ></div>
              <div
                style={{
                  width: "95%",
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                 <div>Quiz desain dan animasi</div>
                <small style={{color:"#b2b2b2"}}><i>Due date: 24 Dec 2020, 10.00 AM</i></small>
              </div>
            </div>
            <div
              className="mb-4 d-flex bd-highlight"
              style={{ backgroundColor: "#fff"}}
            >
              <div
                style={{
                  width: "10px",
                  backgroundColor: "#772CE8",
                }}
              ></div>
              <div
                style={{
                  width: "95%",
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div>Quiz Pengantar teknologi informasi</div>
                <small style={{color:"#b2b2b2"}}><i>Due Date: 24 Dec 2020, 10.00 AM</i></small>
              </div>
            </div>
             <div
              className="mb-4 d-flex bd-highlight"
              style={{ backgroundColor: "#fff"}}
            >
              <div
                style={{
                  width: "10px",
                  backgroundColor: "#772CE8",
                }}
              ></div>
              <div
                style={{
                  width: "95%",
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div>Quiz Pengantar teknologi informasi</div>
                <small style={{color:"#b2b2b2"}}><i>Due Date: 24 Dec 2020, 10.00 AM</i></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
