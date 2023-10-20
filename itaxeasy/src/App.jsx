import "./App.css";
import Sidebar from "./layouts/sidebar/Sidebar";

import PageRoutes from "./PageRoutes"

import { BrowserRouter, Routes, Route } from "react-router-dom";






export default function App() {

	return (
		<BrowserRouter>
            <Sidebar/>
			<PageRoutes />
		</BrowserRouter>
	);
}

