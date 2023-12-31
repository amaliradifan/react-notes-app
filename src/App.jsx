import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoteDetails from "./pages/NoteDetails";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/notes/:id" element={<NoteDetails />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}
