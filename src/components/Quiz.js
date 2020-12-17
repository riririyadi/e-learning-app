import React from "react";
import { BsFunnel, BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";

export default function Quiz() {
  return (
    <div>
       <h5 className="mb-4 mt-4">Quiz List</h5>
      <div className="centering mb-2" style={{ width: "300px" }}>
        <BsFunnel size="24px" />
        <input className="ml-4 input-field" placeholder="Search" type="text" />
      </div>
   <table className="table table-borderless table-responsive-sm">
        <thead>
          <tr className="border-bottom">
            <th scope="col">Quiz Name</th>
            <th scope="col">Class</th>
            <th scope="col">Subject</th>
            <th scope="col">Status</th>
            <th scope="col">Due Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="border-bottom">
            <td>Quiz Blockchain</td>
            <td>Publik</td>
            <td>Sistem Keamanan dan Teknologi Informasi</td>
            <td>
              <span className="bg-info p-2" style={{ borderRadius: "10px" }}>
                Open
              </span>
            </td>
            <td>24/11/2020 - 10.00 am</td>
            <td>
              <span
                className="p-2 mr-2"
                style={{ backgroundColor: "yellow", borderRadius: "5px" }}
              >
                <BiPencil size="20px" />
              </span>
              <span
                className="p-2"
                style={{ backgroundColor: "red", borderRadius: "5px" }}
              >
                <BsTrash size="20px" />
              </span>
            </td>
          </tr>
          <tr className="border-bottom">
            <td>Quiz Enkripsi Dasar</td>
              <td>Publik</td>
            <td>Sistem Keamanan dan Teknologi Informasi</td>
            <td>
              <span className="bg-danger p-2" style={{ borderRadius: "10px" }}>
                Closed
              </span>
            </td>
            <td>24/11/2020 - 10.00 am</td>
            <td>
              <span
                className="p-2 mr-2"
                style={{ backgroundColor: "yellow", borderRadius: "5px" }}
              >
                <BiPencil size="20px" />
              </span>
              <span
                className="p-2"
                style={{ backgroundColor: "red", borderRadius: "5px" }}
              >
                <BsTrash size="20px" />
              </span>
            </td>
          </tr>
          <tr className="border-bottom">
            <td>Quiz Requirement Document</td>
              <td>4KA21</td>
            <td>PPSI</td>
            <td>
              <span className="bg-danger p-2" style={{ borderRadius: "10px" }}>
                Closed
              </span>
            </td>
            <td>24/11/2020 - 10.00 am</td>
            <td>
              <span
                className="p-2 mr-2"
                style={{ backgroundColor: "yellow", borderRadius: "5px" }}
              >
                <BiPencil size="20px" />
              </span>
              <span
                className="p-2"
                style={{ backgroundColor: "red", borderRadius: "5px" }}
              >
                <BsTrash size="20px" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
