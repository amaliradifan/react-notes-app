import { Card } from "@material-tailwind/react";
import Notes from "./components/Notes";
import { getInitialData } from "./utils/index";
import AddNote from "./components/AddNote";
import { useState } from "react";
import Search from "./components/Search";
import ArchiveOption from "./components/ArchiveOption";

function App() {
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
		<div className="w-full p-12 flex justify-center font-sans bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen">
			<Card className="w-3/4 flex items-center bg-gray-50">
				<h1 className="text-6xl font-bold text-cyan text-center mt-6 mb-4">
					Notes App
				</h1>
				<hr className="w-11/12  border-gray-200 my-3" />
				<Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
				<AddNote addNote={addNote} />
				<ArchiveOption onToggle={handleArchive} isArchived={isArchived} />
				<Notes
					notes={filteredNotes}
					deleteNote={deleteNote}
					archiveNote={archiveNote}
				/>
			</Card>
		</div>
	);
}

export default App;
