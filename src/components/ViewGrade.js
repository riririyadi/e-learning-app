import React, { useContext } from "react";
import { LayoutContext } from "./NewLayout";
import { BsFunnel } from "react-icons/bs"

export default function ViewGrade() {
	const { isDarkMode } = useContext(LayoutContext);

	return (
		<div>
			<h5 className="mb-4">
				<b>Grade</b>
			</h5>
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
							<td>{data.participant}</td>
							<td>{data.t1}</td>
							<td>{data.q1}</td>
							<td>{data.t2}</td>
							<td>{data.q2}</td>
							<td>{data.t3}</td>
							<td>{data.q3}</td>
							<td>{data.t4}</td>
							<td>{data.q4}</td>
							<td>{data.t5}</td>
							<td>{data.q5}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

const classGrade = [
	{
		participant: "Lionel Andres Messi",
		t1: 67,
		q1: 47,
		t2: 90,
		q2: 88,
		t3: 91,
		q3: 77,
		t4: 88,
		q4: 24,
		t5: 83,
		q5: 89,
	},
	{
		participant: "Bukayo Saka",
		t1: 67,
		q1: 47,
		t2: 90,
		q2: 88,
		t3: 91,
		q3: 77,
		t4: 88,
		q4: 24,
		t5: 83,
		q5: 89,
	},
	{
		participant: "Kai Havertz",
		t1: 67,
		q1: 17,
		t2: 90,
		q2: 88,
		t3: 91,
		q3: 77,
		t4: 88,
		q4: 24,
		t5: 83,
		q5: 89,
	},
	{
		participant: "Sadio Mane",
		t1: 67,
		q1: 47,
		t2: 90,
		q2: 88,
		t3: 91,
		q3: 77,
		t4: 88,
		q4: 24,
		t5: 83,
		q5: 89,
	},
];
