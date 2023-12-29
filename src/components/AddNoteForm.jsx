import React, { useState } from "react";
import {
	Card,
	Input,
	Textarea,
	Button,
	Typography,
} from "@material-tailwind/react";

export function AddNoteForm({ addNote }) {
	const [formData, setFormData] = useState({
		title: "",
		body: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "title" && value.length <= 50) {
			setFormData((prevData) => ({
				...prevData,
				[name]: value,
			}));
		} else if (name === "body") {
			setFormData((prevData) => ({
				...prevData,
				[name]: value,
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.title.trim() === "" || formData.body.trim() === "") {
			alert("Title and Note cannot be empty");
			return;
		}
		const newNote = {
			title: formData.title,
			body: formData.body,
		};
		addNote(newNote);
		setFormData({
			title: "",
			body: "",
		});
	};

	return (
		<Card color="transparent" shadow={false} className="flex items-center">
			<Typography variant="h4" color="blue-gray">
				Add Note
			</Typography>
			<form className="mt-5 mb-2 w-10/12" onSubmit={handleSubmit}>
				<div className="mb-1 flex flex-col gap-6 mb-3 relative">
					<Typography
						variant="h6"
						color="blue-gray"
						className="-mb-3 text-start"
					>
						Title
					</Typography>
					<Input
						name="title"
						size="lg"
						placeholder="Title"
						className="!border-t-blue-gray-200 focus:!border-t-gray-900"
						labelProps={{
							className: "before:content-none after:content-none",
						}}
						value={formData.title}
						onChange={handleChange}
					/>
					<span className="absolute top-1 right-2 text-gray-400">
						{formData.title.length}/50
					</span>
				</div>

				<div className="w-full">
					<Textarea
						label="Note"
						name="body"
						value={formData.body}
						onChange={handleChange}
					/>
				</div>
				<Button
					type="submit"
					className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500"
					fullWidth
				>
					Add Note
				</Button>
			</form>
		</Card>
	);
}
