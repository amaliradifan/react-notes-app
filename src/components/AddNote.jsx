import React, { useState } from "react";
import { Collapse, Card, Button, CardBody } from "@material-tailwind/react";
import { AddNoteForm } from "./AddNoteForm";

function AddNote({ addNote }) {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => setOpen((cur) => !cur);

	return (
		<div className="mt-4 mb-6 text-center w-10/12">
			<Button
				className="bg-gradient-to-r from-cyan-500 to-blue-500"
				onClick={toggleOpen}
			>
				Add Note +
			</Button>
			<Collapse open={open}>
				<Card className="my-4 mx-auto w-full">
					<CardBody>
						<AddNoteForm addNote={addNote} />
					</CardBody>
				</Card>
			</Collapse>
		</div>
	);
}

export default AddNote;
