import React, { useState, useContext } from "react";
import { LayoutContext } from "./NewLayout"

export default function EditProfile() {
  const { isDarkMode } = useContext(LayoutContext);
	return (
		  <>
      <h5 className="mb-4">
        <b>Edit Profile</b>
      </h5>
      <div
        className={`${
          isDarkMode ? "bg-darks" : "bg-white"
        } shadow-sm p-4 mt-4 mb-4`}
        style={{ borderRadius: "10px" }}
      >
        <div className="row mb-2">
          <div className="col-md-4">Name:</div>
          <div className="col-md-8">
            <input
              type="text"
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Enter your name"
              style={{ width: "100%" }}
            />
          </div>
        </div>
         <div className="row mb-2">
          <div className="col-md-4">City:</div>
          <div className="col-md-8">
            <input
              type="text"
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Enter your city"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Job:</div>
          <div className="col-md-8">
            <input
              type="text"
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Enter your job"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Organization:</div>
          <div className="col-md-8">
            <input
              type="text"
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Enter your Organization"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">About:</div>
          <div className="col-md-8">
            <textarea
              type="text"
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="About"
              style={{ width: "100%" , minHeight:"60px"}}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">Announcement:</div>
          <div className="col-md-8">
            <textarea
              type="text"
              className={isDarkMode ? "input-field-dark-mode" : "input-field"}
              placeholder="Announcement"
              style={{ width: "100%", minHeight:"60px" }}
            />
          </div>
        </div>
        <button
          className="button mt-2"
                 >
          Save
        </button>
      </div>
      
    </>

	)
}