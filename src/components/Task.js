import React from "react";
import { BsFunnel, BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";

export default function Task() {
  const taskData = [
    {
      task_name: "Task 1",
      class: "PPSI",
      status: "open",
      due_date: "23 Desember 2020 - 12:00 AM",
      job_done: "yet",
    },
    {
      task_name: "Task 2",
      class: "Algoritma Pemrograman",
      status: "closed",
      due_date: "24 Desember 2020 - 11:00 AM",
      job_done: "done",
    },
    {
      task_name: "Task 3",
      class: "Sistem Basis Data",
      status: "closed",
      due_date: "25 Desember 2020 - 10:00 PM",
      job_done: "done",
    },
    {
      task_name: "Task 4",
      class: "Analisis Kerja Sistem",
      status: "open",
      due_date: "05 January 2021 - 03:00 PM",
      job_done: "yet",
    },
  ];

  return (
    <>
      <h5 className="mb-4 mt-4">Task List</h5>
      <div className="centering mb-2" style={{ width: "300px" }}>
        <BsFunnel size="24px" />
        <input className="ml-4 input-field" placeholder="Search" type="text" />
      </div>
      <table className="table table-borderless table-responsive-sm">
        <thead>
          <tr className="border-bottom">
            <th scope="col">Task Name</th>
            <th scope="col">Class</th>
            <th scope="col">Subject</th>
            <th scope="col">Status</th>
            <th scope="col">Due Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="border-bottom">
            <td>Task Blockchain</td>
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
            <td>Task Enkripsi Dasar</td>
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
            <td>Task Requirement Document</td>
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
    </>
  );
}
