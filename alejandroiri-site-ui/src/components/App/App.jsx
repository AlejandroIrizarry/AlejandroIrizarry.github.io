import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "../Navbar/Navbar.jsx";
import Home from "../Home/Home.jsx";
import Project from "../Project/Project.jsx";

export default function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
