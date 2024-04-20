import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Expertise from "../pages/Expertise";
import Contact from "../pages/Contact";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='home' />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="expertise" element={<Expertise />}/>
            <Route path="contact" element={<Contact />}/>

            <Route path="*" element={<Home />} />
        </Routes>
    )
};

export default Routers;