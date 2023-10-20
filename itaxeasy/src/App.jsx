import "./App.css";
// import Sidebar from "./layouts/sidebar/SideBar";

import PageRoutes from "./PageRoutes"

import { BrowserRouter } from "react-router-dom";






export default function App() {

	return (
		<BrowserRouter>
            {/* <Sidebar/> */}
			<PageRoutes />
		</BrowserRouter>
	);
}

