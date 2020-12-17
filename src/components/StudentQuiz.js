import React from "react";
import { BsFunnel } from "react-icons/bs";

export default function StudentQuiz() {
  return (
    <div>
      <h5 className="mt-4 mb-4">Quiz List</h5>
       <div className="centering mb-2" style={{ width: "300px" }}>
        <BsFunnel size="24px" />
        <input className="ml-4 input-field" placeholder="Search" type="text" />
      </div>
      <table className="table table-borderless table-responsive-sm">
        <thead>
          <tr className="border-bottom">
            <th scope="col">Quiz Name</th>
            <th scope="col">Class</th>
            <th scope="col">Status</th>
            <th scope="col">Due Date</th>
            <th scope="col">Job Done</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="border-bottom">
            <td>Quiz Blockchain</td>
            <td>Sistem Keamanan dan Teknologi Informasi</td>
            <td><span className="bg-info p-2" style={{borderRadius:"10px"}}>Open</span></td>
            <td>24/11/2020 - 10.00 am</td>
            <td><span className="bg-info p-2" style={{borderRadius:"10px"}}>Done</span></td>
          </tr>
          <tr className="border-bottom">
            <td>Quiz Enkripsi Dasar</td>
            <td>Sistem Keamanan dan Teknologi Informasi</td>
            <td><span className="bg-danger p-2" style={{borderRadius:"10px"}}>Closed</span></td>
            <td>24/11/2020 - 10.00 am</td>
           <td><span className="bg-info p-2" style={{borderRadius:"10px"}}>Done</span></td>
          </tr>
          <tr className="border-bottom">
            <td>Quiz Requirement Document</td>
            <td>PPSI</td>
            <td><span className="bg-danger p-2" style={{borderRadius:"10px"}}>Closed</span></td>
            <td>24/11/2020 - 10.00 am</td>
            <td><span className="bg-danger p-2" style={{borderRadius:"10px"}}>Yet</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
