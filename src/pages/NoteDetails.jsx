import { useParams } from "react-router-dom";
import ContainerComponents from "../components/ContainerComponents";
import ShowNote from "../components/ShowNote";
import { useState } from "react";
import { getInitialData } from "../utils";

function NoteDetails() {
	const [notes, setNotes] = useState(() => {
		const storedNotes = localStorage.getItem("notes");
		return storedNotes ? JSON.parse(storedNotes) : getInitialData();
	});
	const { id } = useParams();
	const getNote = (id) => {
		if (!id) {
			return null;
		}

		const filteredNotes = notes.filter((note) => note.id === id);

		if (!filteredNotes.length) {
			return null;
		}

		return filteredNotes[0];
	};
	return (
		<>
			<ContainerComponents>
				<ShowNote note={getNote(Number(id))} />
			</ContainerComponents>
		</>
	);
}

export default NoteDetails;
