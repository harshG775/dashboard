import "./App.css";
import Sidebar from "./layouts/sidebar/SideBar";

import { BrowserRouter,Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Setting from "./pages/settings/Setting";
import BusinessDetails from "./pages/settings/businessDetails/BusinessDetails";
import Journal from "./pages/journal/Journal";

import All from "./pages/all/All";
import Create from "./pages/create/Create";
import Return from "./pages/return/return";

import NotFound404 from "./pages/notfound404/NotFound404";





export default function App() {

	return (
		<BrowserRouter>
            <Sidebar/>
			
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/settings" element={<Setting />} />
				<Route path="/settings/business-details" element={<BusinessDetails />} />


				<Route path="/:contentType/All" element={<All />} />

				<Route path="/:contentType/create" element={<Create />} />
				<Route path="/transactions/:contentType/create" element={<Create />} />

				<Route path="/:contentType/return" element={<Return />} />

				<Route path="/journal" element={<Journal />} />


				<Route path="*" element={<NotFound404 />} />
			</Routes>

		</BrowserRouter>
	);
}

