import React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import CreateNewLesson from "./CreateNewLesson"

export default function Lesson() {
    return (
        <>
        <div className="mt-4 mb-4 d-flex bd-highlight">
        <div className="bd-highlight">
          <h5>Lessons</h5>
        </div>
        <div className="ml-4 bd-highlight" style={{ fontSize: "15px" }}>
          <BsPlusCircleFill />
        </div>
      </div>
      <CreateNewLesson />
      </>
    )
}
