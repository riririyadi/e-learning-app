import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LayoutContext } from "./NewLayout";
import { BsFunnel } from "react-icons/bs";
import { Loader } from "./Loader";
import axios from "axios";

export default function ViewGrade() {
	const { isDarkMode } = useContext(LayoutContext);
	let { id } = useParams();
  const token = localStorage.getItem("token");
const [classGrade, setClassGrade] = useState([]);
const [error, setError] = useState("");
const [isLoading, setIsLoading] = useState(false);
  const header = {
    Authorization: `Bearer ${token}`,
  };


const getClassroomGrade = async() => {
	try{
		setIsLoading(true);
		const res = await axios.get(`http://elearning.havicrm.tk/api/grade/${id}`, {headers: header})
		console.log(res.data);
		setClassGrade(res.data)
	}catch(err){
		console.log(err)
		setError(err.message);
	}
	setIsLoading(false);
}

useEffect(() => {
	document.title = "E-learning | Grade"
	getClassroomGrade();
}, [])

	return (
		<div>
			<h5 className="mb-4">
				<b>Grade</b>
			</h5>

			{isLoading ? (<div className="main-area-center-loader"><Loader/></div>): (
				<>{error ? <div className="main-area-center-error">{error}</div>: 
      <div className="p-4" style={isDarkMode ?{backgroundColor:"#1F1F23", borderRadius:"10px"} : {backgroundColor:"white", borderRadius:"10px"}}>
			   <div className="d-flex pt-2">
        <div className="centering">
          <h6>PPSI - 4KA21</h6>
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
					<th scope="col"><input type="checkbox"/></th>
						<th scope="col">Participant</th>
						<th scope="col">Task 1</th>
						<th scope="col">Quiz 1</th>
						<th scope="col">Task 2</th>
						<th scope="col">Quiz 2</th>
						<th scope="col">Task 3</th>
						<th scope="col">Quiz 3</th>
						<th scope="col">Task 4</th>
						<th scope="col">Quiz 4</th>
						<th scope="col">Task 5</th>
						<th scope="col">Quiz 5</th>
					</tr>
				</thead>
				<tbody className={isDarkMode ? "bg-darks" : "bg-white"}>
					{classGrade.map((data, i) => (
						<tr
							key={i}
							className={`${isDarkMode ? "tr-dark" : "tr-light"}`}
						>
						<td><input type="checkbox"/></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					))}
				</tbody>
			</table>
			</div>}</>)}
		</div>
	);
}

