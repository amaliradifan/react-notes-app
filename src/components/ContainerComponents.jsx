import React from "react";
import { Card } from "@material-tailwind/react";
import PropTypes from "prop-types";

export default function ContainerComponents({ children, notFound }) {
	return (
		<div className="w-full p-12 flex justify-center font-sans bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen">
			<Card className="w-3/4 flex items-center bg-gray-50">
				<h1 className="text-6xl font-bold text-cyan text-center mt-6 mb-4">
					{notFound ? "404" : "Notes App"}
				</h1>
				<hr className="w-11/12  border-gray-200 my-3" />
				{children}
			</Card>
		</div>
	);
}

ContainerComponents.propTypes = {
	notFound: PropTypes.string,
	children: PropTypes.node.isRequired,
};
