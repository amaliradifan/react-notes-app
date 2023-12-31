import React from "react";
import { Button } from "@material-tailwind/react";
import ContainerComponents from "../components/ContainerComponents";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
	return (
		<ContainerComponents notFound={"notFound"}>
			<div className=" flex flex-col justify-center items-center h-1/2">
				<h1 className="text-4xl font-bold text-cyan text-center mt-6 mb-4">
					Page Not Found
				</h1>
				<Link to="/">
					<Button className="bg-gradient-to-r from-cyan-500 to-blue-500">
						Home
					</Button>
				</Link>
			</div>
		</ContainerComponents>
	);
}
