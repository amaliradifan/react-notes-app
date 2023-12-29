import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

export default function ArchiveOption({ isArchived, onToggle }) {
	return (
		<div className="w-10/12">
			<ButtonGroup
				fullWidth
				disableElevation
				variant="contained"
				aria-label="Disabled elevation buttons"
			>
				<Button
					onClick={() => onToggle(false)}
					className={`${
						isArchived ? "color" : "bg"
					}-gradient-to-r from-cyan-500 to-blue-500`}
					variant={isArchived ? "outlined" : "contained"}
				>
					Notes
				</Button>
				<Button
					onClick={() => onToggle(true)}
					className={`${
						isArchived ? "bg" : "color"
					}-gradient-to-r from-cyan-500 to-blue-500`}
					variant={isArchived ? "contained" : "outlined"}
				>
					Archive
				</Button>
			</ButtonGroup>
		</div>
	);
}
