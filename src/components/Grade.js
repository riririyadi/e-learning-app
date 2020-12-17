import React from "react";
import { BsFunnel } from "react-icons/bs";

export default function Grade() {
  return (
    <>
      <h5 className="mb-4 mt-4">Grade</h5>
      <div className="centering mb-2" style={{ width: "300px" }}>
        <BsFunnel size="24px" />
        <input className="ml-4 input-field" placeholder="Search" type="text" />
      </div>
      <table className="table table-borderless table-responsive-sm">
        <thead>
          <tr className="border-bottom">
            <th scope="col">Class</th>
            <th scope="col">Subject</th>
            <th scope="col">Participants</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="border-bottom">
            <td>Umum</td>
            <td>
             Networking
            </td>
            <td>47</td>
            <td>
              <span className="bg-info p-2" style={{ borderRadius: "10px" }}>
                Active
              </span>
            </td>
          </tr>
          <tr className="border-bottom">
            <td>4KA21</td>
              <td>Sistem Keamanan dan Teknologi Informasi</td>
            <td>31</td>
            <td>
              <span className="bg-info p-2" style={{ borderRadius: "10px" }}>
                Active
              </span>
            </td>
          </tr>
          <tr className="border-bottom">
            <td>3KA28</td>
            <td>
             Pemrograman Berbasis Objek
            </td>
            <td>32</td>
            <td>
              <span className="bg-danger p-2" style={{ borderRadius: "10px" }}>
                Closed
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
