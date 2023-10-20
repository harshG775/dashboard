import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import NotFound404 from "./pages/notfound404/NotFound404";

export default function PageRoutes() {
    return (
        <>
        
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="*" element={<NotFound404 />} />
        </Routes>
        </>
    )
}

