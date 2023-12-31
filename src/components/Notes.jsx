import React from "react";
import Note from "./Note";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Notes({ notes, deleteNote, archiveNote }) {
	return (
		<div className="w-full flex justify-center flex-wrap mb-10">
			{notes.length === 0 ? (
				<h1 className="text-gray-500 text-3xl mt-10">Tidak ada catatan </h1>
			) : (
				notes.map((note, index) => (
					<Link
						key={note.id}
						to={`/notes/${note.id}`}
						className="my-3 w-10/12 transform hover:translate-y-[-10px] transition-transform duration-300 ease-in-out"
					>
						<Note
							key={note.id}
							note={note}
							index={index}
							deleteNote={() => deleteNote(note.id)}
							archiveNote={() => archiveNote(note.id)}
						/>
					</Link>
				))
			)}
		</div>
	);
}

Notes.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.object).isRequired,
	deleteNote: PropTypes.func.isRequired,
	archiveNote: PropTypes.func.isRequired,
};
