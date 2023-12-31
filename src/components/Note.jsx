import React from "react";
import "animate.css";
import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";
import { showFormattedDate } from "../utils";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import PropTypes from "prop-types";

export default function Note({ note, index, deleteNote, archiveNote }) {
	const animationDelay = `${index * 0.1}s`;

	return (
		<Card
			className={`animate__animated animate__fadeInDown`}
			style={{ animationDelay }}
		>
			<CardBody>
				<Typography variant="h5" color="blue-gray" className="mb-2">
					{note.title}
				</Typography>
				<Typography>{note.body}</Typography>
			</CardBody>
			<CardFooter className="pt-0 flex items-center justify-between">
				<div>
					<Button
						onClick={(e) => {
							e.preventDefault();
							archiveNote();
						}}
						className="bg-gradient-to-r from-cyan-500 to-blue-500"
					>
						{note.archived ? (
							<UnarchiveIcon fontSize="small" className="me-1 -mt-1" />
						) : (
							<ArchiveOutlinedIcon fontSize="small" className="me-1 -mt-1" />
						)}
						{note.archived ? "Unarchive" : "Archive"}
					</Button>
					<button
						className="text-red-500 ms-5 hover:underline "
						onClick={(e) => {
							e.preventDefault();
							deleteNote();
						}}
					>
						Delete
					</button>
				</div>
				<Typography className="font-normal">
					{showFormattedDate(note.createdAt)}
				</Typography>
			</CardFooter>
		</Card>
	);
}

Note.propTypes = {
	note: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	archiveNote: PropTypes.func.isRequired,
	deleteNote: PropTypes.func.isRequired,
};
