import React from "react";
import { useState, useEffect } from "react";
import {
  useNavigate,
  Link,
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./Project.css";
import codequest from "/src/assets/codequest.png"

export default function Project() {

  return (
  <div className="projects">
    <h1>⚙️ Projects ⚙️</h1>
    <section className="project-section">
      <div className="project-media">
        <img src={codequest} />
        <button className="project-button"></button> 
        <button className="project-button"></button> 
      </div>
      <div className="project-info">
        <h3 className="project-title">CodeQuest</h3>
        <h4 className="project-skills">(React.js, Node.js, Express.js, PostgreSQL)</h4>
        <p className="project-desc"></p>
      </div>
    </section>

    <section className="project-section">
      <div className="project-media">
        <img  />
        <button className="project-button"></button> 
        <button className="project-button"></button> 
      </div>
      <div className="project-info">
        <h3 className="project-title">LifeTracker</h3>
        <h4 className="project-skills"></h4>
        <p className="project-desc"></p>
      </div>
    </section>

    <section className="project-section">
      <div className="project-media">
        <img  />
        <button className="project-button"></button> 
        <button className="project-button"></button> 
      </div>
      <div className="project-info">
        <h3 className="project-title">CodePath Student Store</h3>
        <h4 className="project-skills"></h4>
        <p className="project-desc"></p>
      </div>
    </section>
  </div>
  )
}
