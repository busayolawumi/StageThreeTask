import React from "react";
import Login from "./Login";
import Gallery from "./Gallery";
import { Route, Routes, useLocation } from "react-router-dom";
import Error from "./Error";

function Pages() {
	const location = useLocation();

	return (
		<div>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Login />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/error" element={<Error />} />
			</Routes>
		</div>
	);
}

export default Pages;
