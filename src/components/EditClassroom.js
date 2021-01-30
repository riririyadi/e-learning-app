import React, { useState, useContext, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import CustomModal from "./Modal";
import { LayoutContext } from "./NewLayout";
import axios from "axios";
import {Loader} from "./Loader";

export default function EditClassroom() {
	let { id } = useParams();
	let history = useHistory();
	const { isDarkMode } = useContext(LayoutContext);
	const [classroom, setClassroom] = useState({})
	const [isOpen, setIsOpen] = useState(false);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	function handleOpenModal() {
		setIsOpen(!isOpen);
	}

 function handleChange(e) {
    const { name, value } = e.target;
    setClassroom({ ...classroom, [name]: value });
  }

	const token = localStorage.getItem("token");

	const header = {
		"Authorization": `Bearer ${token}`,
		"Content-Type": "application/json",
	};

	const getDetailClassroom = async () => {
		try {
			const res = await axios.get(
				`http://elearning.havicrm.tk/api/classroom/${id}`,
				{
					headers: header,
				}
			);
			console.log(res.data);
			setClassroom(res.data)
		} catch (err) {
			console.log(err);
			setError(err.message);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		document.title = "E-learning | Classroom";
	getDetailClassroom();
	}, [])

	const updateDetailClassroom = async(e) => {
		e.preventDefault();
		try{
			const res = await axios.post(
						`http://elearning.havicrm.tk/api/classroom/${id}`, classroom,
						{
							headers: header,
						})
						history.push("/u/classroom")

		}catch(err){console.log(err)}
	} 

	const Confirmation = () => {
		return (
			<div className="p-4">
				<div style={{ fontSize: "14px" }}>
					<h6 style={{ textAlign: "center" }}>
						Do you want to proceed?
					</h6>
					<div className="centering pt-4">
						<div>
							<Link to="/u/classroom">
								<button className="button mr-2" onClick={updateDetailClassroom}>Yes</button>
							</Link>
							<button
								className="button"
							onClick={handleOpenModal}
							>
								No
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	};
	return (
		<>
			<h5 className="mb-4">
				<b>Edit Classroom</b>
			</h5>
			{isLoading? <div className="centering" style={{minHeight: "calc(100vh - 220px)"}}><Loader/></div>: <>{error ? <div className="centering" style={{minHeight:"calc(100vh - 220px)",color:"red"}}>{error}</div>:
			<div
				className={`${
					isDarkMode ? "bg-darks" : "bg-white"
				} shadow-sm p-4 mt-4 mb-4`}
				style={{ borderRadius: "10px" }}
			>
				<div className="row mb-2">
					<div className="col-md-4">Class Name:</div>
					<div className="col-md-8">
						<input
							type="text"
							value={classroom.name||""}
							onChange={handleChange}
							name="name"
							className={
								isDarkMode
									? "input-field-dark-mode"
									: "input-field"
							}
							placeholder="Enter a class name"
							style={{ width: "100%" }}
						/>
					</div>
				</div>
				<div className="row mb-2">
					<div className="col-md-4">Subject:</div>
					<div className="col-md-8">
						<input
							type="text"
							value={classroom.subject||""}
							onChange={handleChange}
							name="subject"
							className={
								isDarkMode
									? "input-field-dark-mode"
									: "input-field"
							}
							placeholder="Enter subject name"
							style={{ width: "100%" }}
						/>
					</div>
				</div>
				<div className="row mb-2">
					<div className="col-md-4">Class Description:</div>
					<div className="col-md-8">
						<textarea
							type="text"
							value={classroom.description||""}
							onChange={handleChange}
							name="description"
							className={
								isDarkMode
									? "input-field-dark-mode"
									: "input-field"
							}
							placeholder="Enter class description"
							style={{ width: "100%", height: "150px" }}
						/>
					</div>
				</div>
				<div className="row mb-2">
					<div className="col-md-4">Max Number of Students:</div>
					<div className="col-md-8">
						<input
							type="text"
							value={classroom.max_student||""}
							onChange={handleChange}
							name="max_student"
							className={
								isDarkMode
									? "input-field-dark-mode"
									: "input-field"
							}
							placeholder="50"
							style={{ width: "100%" }}
						/>
					</div>
				</div>
				<button
					className="button mt-2"
					onClick={handleOpenModal}
					style={{ padding: "5px 30px", borderRadius: "30px" }}
				>
					Save
				</button>
			</div>}</>}
			<CustomModal
				isOpen={isOpen}
				onRequestClose={handleOpenModal}
				componentToPass={<Confirmation />}
			/>
		</>
	);
}
