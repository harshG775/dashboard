import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Setting from "./pages/settings/Setting";
import BusinessDetails from "./pages/settings/businessDetails/BusinessDetails";
import Journal from "./pages/journal/Journal";

import NotFound404 from "./pages/notfound404/NotFound404";

export default function PageRoutes() {
    return (
        <>
        
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/settings" element={<Setting />} />
            <Route path="/settings/business-details" element={<BusinessDetails />} />

            <Route path="/journal" element={<Journal />} />

            <Route path="*" element={<NotFound404 />} />
        </Routes>
        </>
    )
}

