import React from "react";
import { RiSettingsLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Profile() {
  return (
    <>
      <h4 className="mt-4 mb-4">Profile</h4>
      <div className="m-3">
        <div
          className="row bg-white pt-2 pr-2"
          style={{ borderRadius: "5px 5px 0px 0px" }}
        >
          <div className="ml-auto">
            <button className="button">
              <RiSettingsLine className="mr-2" size="20px" /> Edit
            </button>{" "}
            <BsThreeDotsVertical size="20px" />
          </div>
        </div>
        <div
          className="row bg-white pb-4 centering"
          style={{
            height: "auto",
            borderRadius: "0px 0px 5px 5px",
          }}
        >
          <div className="col-md-2 mb-2 p-2">
            <div className="centering">
              <img
                src="https://filmdaily.co/wp-content/uploads/2020/05/avatar_lede-1300x976.jpg"
                alt="ava"
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "75px",
                  marginBottom: "10px",
                }}
              />
              <br />
            </div>
            <div className="centering"></div>
          </div>
          <div className="col-md-4 mb-2">
            <h4>Riri Riyadi</h4>
            <div>Bekasi</div>
          </div>
          <div className="col-md-3 mb-2">
            <div>Universitas Gunadarma</div>
          </div>
          <div className="col-md-3 mb-2">
            <div>Fakultas Ilmu Komputer dan Teknologi Informasi</div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <div
            className="content-header p-4"
            style={{ backgroundColor: "#fff", height: "auto" }}
          >
            <h5>About</h5>
            <p>Morning Person</p>
            <h5 className="mt-4">Announcement</h5>
            <p>Pernah menjadi bagian proyek NASA</p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div
            className="content-header p-4"
            style={{ backgroundColor: "#772CE8", height: "auto" }}
          >
            <h5 className="mb-4">Class Timeline</h5>
            <p>Matematika Dasar - 2KA21</p>
            <p>Analisis Kinerja Sistem - 4KA21</p>
          </div>
        </div>
      </div>
    </>
  );
}
