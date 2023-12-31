import React from "react";
import { Input } from "@material-tailwind/react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PropTypes from "prop-types";

export default function Search({ searchTerm, onSearchChange }) {
	return (
		<div className="w-5/12">
			<Input
				label="Search Note"
				icon={<SearchOutlinedIcon />}
				value={searchTerm}
				onChange={(e) => onSearchChange(e.target.value)}
			/>
		</div>
	);
}

Search.propTypes = {
	searchTerm: PropTypes.string.isRequired,
	onSearchChange: PropTypes.func.isRequired,
};
