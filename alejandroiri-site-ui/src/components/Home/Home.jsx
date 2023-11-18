import React, { useEffect, useContext } from "react";
import "./Home.css";
import { Link, Navigate } from "react-router-dom";
import lottie from "lottie-web";
import hero_avatar from "/src/assets/me.jpg"
import About from "../About/About.jsx"
import down_arrow from "../../assets/down-arrow.svg"
import resume from "/src/assets/resume.pdf"

export default function Home() {
    return (
        <div id="home" className="home">
            <div className="hero">
                <div className="hero-content">
                    <div className="hero-info">
                        <h2>HI THERE 👋! I'M</h2>
                        <h1>Alejandro Irizarry</h1>
                        <h2>Software Engineer <span>•</span> Developer</h2>
                        <p>Computer Science <span id="at">@</span> University of Puerto Rico <span id="tags">‹/›</span> Full-Stack Developer at Salesforce ☁</p>
                        <div className="hero-btns">
                            <a href={resume} download><button type="button">Get Resume<span></span><span></span><span></span><span></span></button></a>
                            <a href="#about"><button type="button">About Me
                            <span></span><span></span><span></span><span></span></button></a>
                        </div>
                    </div>
                    <div className="hero-img">
                        <img src={hero_avatar} alt="Alejandro Irizarry"></img>
                    </div>
                </div>
            </div>
            <div className="arrow floating-image-down"><a href="#about"><img src={down_arrow}/></a></div>

            <About></About>
        </div>
    )
}