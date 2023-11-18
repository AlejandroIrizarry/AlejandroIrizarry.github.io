import React, { useEffect, useContext } from "react";
import "./About.css";
import { Link, Navigate } from "react-router-dom";
import lottie from "lottie-web";
import LottieAnimation from "../AnimationComponent/AnimationComponent";
import laptop from "/src/assets/Laptop.json"
import flag from "/src/assets/Flag.json"
import programmer from "/src/assets/Programmer.json"
import react_logo from "/src/assets/React.json"
import college from "/src/assets/college.json"
import google from "/src/assets/Google.json"
import salesforce from "/src/assets/Salesforce.svg"
import projects from "/src/assets/projects.json"
import codey from "/src/assets/Codey.json"
import github from "/src/assets/github-logo.svg"
import gmail from "/src/assets/gmail-logo.svg"
import instagram from "/src/assets/instagram.svg"
import linkedin from "/src/assets/linkedin-logo.svg"
import twitter from "/src/assets/twitter.svg"
import up_arrow from "/src/assets/up-arrow.svg"

export default function About() {

      /*
   * Scrolling Animation
  */
  
      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        });
      
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
      
        // Clean up the observer when the component unmounts
        return () => {
          hiddenElements.forEach((el) => observer.unobserve(el));
        };
      }, []); // The empty dependency array ensures that this effect runs only once after the initial render.
  
     return (
        <div id="about" className="about">
            <div className="hidden about-section">
                <div className="about-section-text">
                    <h2>I'm a <span className="markup">22</span>-year old <span className="markup">Software Engineer</span>.</h2>
                </div>
                <div className="about-section-media">
                <LottieAnimation animationData={programmer} />
                </div>
            </div>
            <div className="hidden about-section">
                <div className="about-section-media">
                <LottieAnimation id="pr" animationData={flag} />
                </div>
                <div className="about-section-text">
                    <h2>Born and raised at the island of <span className="markup">Puerto Rico</span>. <span className="markup">#Boricua</span>InTech</h2>
                </div>
            </div>


            <div className="hidden about-section">
                <div className="about-section-text">
                    <h2><span className="markup">Web Development</span> is <br />my <span className="markup">passion</span> 🧑‍💻</h2>
                </div>
                <div className="about-section-media">
                <LottieAnimation animationData={react_logo} />
                </div>
            </div>
            <div className="hidden about-section">
                <div className="about-section-media">
                <LottieAnimation animationData={college} />
                </div>
                <div className="about-section-text">
                    <h2>I go to the <span className="markup">University <br />of Puerto Rico</span> at the Bayamon Campus.</h2>
                </div>
            </div>
            
            <div className="hidden about-section">
                <div className="about-section-text">
                    <h2>I've been able to <br /> secure <span className="markup">experiences</span> at <br /><span className="markup">Big Tech</span> companies 👉</h2>
                </div>
                <div className="about-section-media" id="companies">
                    <LottieAnimation animationData={google} />
                    <img id="salesforce" src={salesforce} />
                    <span id="company-left">
                        <LottieAnimation animationData={codey} id="codey" />
                    </span>
                </div>
            </div>
            <div className="hidden about-section">
                <div className="about-section-media">
                <LottieAnimation animationData={projects} />
                </div>
                <div className="about-section-text">
                    <h2>Check out<span className="markup"> my projects</span><br/> by <a href="/projects" id="click"><span className="markup">clicking here</span></a> 👀</h2>
                </div>
            </div>



            <footer id="contact" className="animation contact-section">
            <div className="contact-section-text">
                    <h2>Don't be a stanger,<br/><span className="markup"> Let's connect</span>! 🤝</h2>
                </div>
                <div className="contact-section-media float-area">
                    <a className="logo hidden floating-image-up" target="_blank" style={{"--order": 1}} href="mailto:alejandro.irizarryn@gmail.com"><img src={gmail} alt="Gmail logo"/></a>

                    <a className="logo hidden floating-image-down" target="_blank" style={{"--order": 2}} href="https://github.com/AlejandroIrizarry"><img src={github} alt="Github logo"/></a>

                    <a className="logo hidden floating-image-up" target="_blank" style={{"--order": 3}} href="https://www.linkedin.com/in/alejandroirizarry"><img src={linkedin} alt="LinkedIn logo"/></a>

                    <a className="logo hidden floating-image-down" target="_blank" style={{"--order": 4}} href="https://twitter.com/aleirizarryn/"><img src={twitter} alt="Twitter logo"/></a>
                </div>
            </footer>
            <div id="up-arrow" className="arrow floating-image-up"><a href="#home"><img src={up_arrow}/></a></div>
            <div id="copyright">
                <h4>© 2023 – Site designed and developed by <span className="markup">Alejandro Irizarry</span>.</h4>
                <h5>Updated on November 16, 2023 🌐</h5>
            </div>
        </div>
     )
}