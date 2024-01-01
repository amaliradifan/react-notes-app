import Notes from "../components/Notes";
import { getInitialData } from "../utils/index";
import AddNote from "../components/AddNote";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import ArchiveOption from "../components/ArchiveOption";
import ContainerComponents from "../components/ContainerComponents";

function HomePage() {
	const [notes, setNotes] = useState(() => {
		const storedNotes = localStorage.getItem("notes");
		return storedNotes ? JSON.parse(storedNotes) : getInitialData();
	});
	const [searchTerm, setSearchTerm] = useState("");
	const [isArchived, setIsArchived] = useState(false);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

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
			const updatedNotes = [
				{
					...note,
					id: Date.now(),
					createdAt: new Date().toISOString(),
					archived: false,
				},
				...currNote,
			];
			return updatedNotes;
		});
	};

	const deleteNote = (id) => {
		setNotes((prevNotes) => {
			const updatedNotes = prevNotes.filter((n) => n.id !== id);
			return updatedNotes;
		});
	};

	const archiveNote = (id) => {
		setNotes((prevNotes) => {
			const updatedNotes = prevNotes.map((note) => {
				if (note.id === id) {
					return {
						...note,
						archived: !note.archived,
					};
				}
				return note;
			});
			return updatedNotes;
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
