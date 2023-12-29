import React from "react";
import Note from "./Note";

export default function Notes({ notes, deleteNote, archiveNote }) {
	return (
		<div className="w-full flex justify-center flex-wrap mb-10">
			{notes.length === 0 ? (
				<h1 className="text-gray-500 text-3xl mt-10">Tidak ada catatan </h1>
			) : (
				notes.map((note, index) => (
					<Note
						key={note.id}
						note={note}
						index={index}
						deleteNote={() => deleteNote(note.id)}
						archiveNote={() => archiveNote(note.id)}
					/>
				))
			)}
		</div>
	);
}
