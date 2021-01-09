import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CustomModal from "./Modal";
import { LayoutContext } from "./NewLayout";
import { BsPlusCircle } from "react-icons/bs";
import { FiCheckCircle, FiPlus } from "react-icons/fi";
import { IoIosCreate } from "react-icons/io";

export default function EditClassroom() {
	const { isDarkMode } = useContext(LayoutContext);
	const [isOpen, setIsOpen] = useState(false);
	function handleOpenModal() {
		setIsOpen(!isOpen);
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
								<button className="button mr-2">Yes</button>
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
				<div className="row mb-2">
					<div className="col-md-4">Class Duration (Hours):</div>
					<div className="col-md-8">
						<input
							type="text"
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
			</div>
			<CustomModal
				isOpen={isOpen}
				onRequestClose={handleOpenModal}
				componentToPass={<Confirmation />}
			/>
		</>
	);
}