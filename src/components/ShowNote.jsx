import React from "react";
import { CardBody, Typography, CardFooter } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

export default function ShowNote({ note }) {
	return (
		<CardBody className="mx-auto text-center">
			<Typography variant="h3" color="blue-gray" className="mb-2">
				{note.title}
			</Typography>

			<Typography className="flex mx-auto w-10/12 text-center">
				<span className="mr-auto">{note.archived ? "Archived" : ""}</span>
				<span className="ml-auto">{showFormattedDate(note.createdAt)}</span>
			</Typography>

			<Typography className="w-8/12 mx-auto my-10">{note.body}</Typography>
			<CardFooter>
				<Link to="/" className="hover:underline text-red-300">
					Back
				</Link>
			</CardFooter>
		</CardBody>
	);
}

ShowNote.propTypes = {
	note: PropTypes.object.isRequired,
};
