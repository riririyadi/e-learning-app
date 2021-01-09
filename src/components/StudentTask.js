import React, { useContext } from "react";
import { BsFunnel } from "react-icons/bs";
import { LayoutContext } from "./NewLayout";

export default function StudentTask() {
  const { isDarkMode } = useContext(LayoutContext);
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
      <h5 className="mb-4">
        <b>Task</b>
      </h5>
       <div className="d-flex">
        <div className="centering">
          <h6>List of Tasks</h6>
        </div>
        <div className="centering mb-2 ml-auto" style={{ width: "200px" }}>
          <BsFunnel size="24px" />
          <input
            className={
              isDarkMode ? "ml-4 input-field-dark-mode" : "ml-4 input-field"
            }
            placeholder="Search"
            type="text"
          />
        </div>
      </div>
      <table className="table table-borderless table-responsive-sm">
        <thead>
          <tr className={`${isDarkMode ? "tr-dark" : "tr-light"}`}>
            <th scope="col">Task Name</th>
            <th scope="col">Class</th>
            <th scope="col">Status</th>
            <th scope="col">Due Date</th>
            <th scope="col">Job Done</th>
          </tr>
        </thead>
        <tbody className={isDarkMode ? "bg-darks" : "bg-white"}>
          {taskData.map((task, i) => (
            <tr key={i} className={`${isDarkMode ? "tr-dark" : "tr-light"}`}>
              <td>{task.task_name}</td>
              <td>{task.class}</td>
              <td>
                <span
                  className={`status ${
                    task.status === "open" ? "open" : "closed"
                  } ${isDarkMode ? "text-white dark-open" : null} `}
                >
                  {task.status}
                </span>
              </td>
              <td>{task.due_date}</td>
              <td>
                <span
                  className={`status ${
                    task.job_done === "done" ? "open" : "closed"
                  } ${isDarkMode ? "text-white dark-open" : null} `}
                >
                  {task.job_done}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
