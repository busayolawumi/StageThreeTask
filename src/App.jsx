import React from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Pages />
			</BrowserRouter>
		</div>
	);
};

export default App;
