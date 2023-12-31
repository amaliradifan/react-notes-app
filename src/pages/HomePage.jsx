import Notes from "../components/Notes";
import { getInitialData } from "../utils/index";
import AddNote from "../components/AddNote";
import { useState } from "react";
import Search from "../components/Search";
import ArchiveOption from "../components/ArchiveOption";
import ContainerComponents from "../components/ContainerComponents";

function HomePage() {
	const [notes, setNotes] = useState(getInitialData());
	const [searchTerm, setSearchTerm] = useState("");
	const [isArchived, setIsArchived] = useState(false);

	const archivedNotes = notes.filter((note) => note.archived === isArchived);
	const handleArchive = () => {
		setIsArchived((prevIsArchived) => !prevIsArchived);
	};

	const filteredNotes = archivedNotes.filter(
		(note) =>
			note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			note.body.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const addNote = (note) => {
		setNotes((currNote) => {
			return [
				{
					...note,
					id: new Date().toISOString(),
					createdAt: new Date().toISOString(),
					archived: false,
				},
				...currNote,
			];
		});
	};

	const deleteNote = (id) => {
		setNotes((prevNotes) => {
			return prevNotes.filter((n) => n.id !== id);
		});
	};

	const archiveNote = (id) => {
		setNotes((prevNotes) => {
			return prevNotes.map((note) => {
				if (note.id === id) {
					return {
						...note,
						archived: !note.archived,
					};
				}
				return note;
			});
		});
	};

	return (
		<ContainerComponents>
			<Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
			<AddNote addNote={addNote} />
			<ArchiveOption onToggle={handleArchive} isArchived={isArchived} />
			<Notes
				notes={filteredNotes}
				deleteNote={deleteNote}
				archiveNote={archiveNote}
			/>
		</ContainerComponents>
	);
}

export default HomePage;
