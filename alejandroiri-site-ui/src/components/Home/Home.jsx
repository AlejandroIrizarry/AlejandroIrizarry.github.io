import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import hero_avatar from "/src/assets/me.jpg";
import About from "../About/About.jsx";
import down_arrow from "../../assets/down-arrow.svg";
import LottieAnimation from "../AnimationComponent/AnimationComponent";
import totoro from "/src/assets/totoro.json";
import noface from "/src/assets/no-face.json";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleGetResumeClick = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1UG368ZRQ33QuPmvIlOXbak5d30oDYXw_/view?usp=sharing";

    // Open the PDF file in a new tab
    window.open(pdfUrl, "_blank");
  };

  const handleExperiencesClick = () => {
    // Close the modal
    onClose();

    // Navigate to the desired URL
    navigate("/#experiences");

    // Scroll to the #experiences section
    setTimeout(() => {
      const experiencesSection = document.getElementById("experiences");
      if (experiencesSection) {
        experiencesSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Adjust the delay as needed
  };

  return (
    <span>
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <div id="home" className="home">
        <div className="hero">
          <div className="hero-content">
            <div className="hero-info">
              <h2 className="hero-intro">
                HI THERE
                <span className="ghibli">
                  <LottieAnimation animationData={noface} />
                </span>
                ! I'M
              </h2>
              <h1>Alejandro Irizarry</h1>
              <h2 className="hero-intro">
                Full-Stack Software Engineer
                <span className="ghibli">
                  <LottieAnimation animationData={totoro} />
                </span>
              </h2>
              <p>
                Computer Science <span id="at">@</span> University of Puerto
                Rico
              </p>
              <div className="hero-btns">
                <Button className="button" onClick={handleGetResumeClick}>
                  Get Resume
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </Button>
                <Button className="button" onClick={onOpen}>
                  About Me
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </Button>
                <Link to="/projects">
                  <Button className="button" onClick={onOpen}>
                    Projects
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </Button>
                </Link>
              </div>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                  style={{
                    color: "var(--yellow)",
                    backgroundColor: "var(--medium-gray)",
                  }}
                >
                  <ModalHeader>About me:</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody style={{ color: "var(--yellow)" }}>
                    Hello, there! I'm <b>Alejandro Irizarry Negrón</b>, a born
                    and raised Puerto Rican who is proud to be Latino and
                    Boricua 🇵🇷!
                    <br />
                    <br />
                    🎓 I'm currently pursuing undergraduate studies in a
                    Bachelors Degree of Science under the Computer Science major
                    at the
                    <b> University of Puerto Rico - Bayamon Campus</b> (Class of
                    2025).
                    <br />
                    <br />
                    🚀 My interests are heavily focused on{" "}
                    <b>
                      full-stack web programming and advancing the
                      representation of Latinx+ people in the tech industry.{" "}
                    </b>
                    I find pleasure in solving problems and working with others
                    to do so. Feel free to check out the whole site that I
                    developed with lots of ♡ and ☕️!
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      style={{
                        color: "var(--yellow)",
                        backgroundColor: "var(--medium-gray)",
                      }}
                      colorScheme="var(--yellow)"
                      mr={3}
                      onClick={onClose}
                      _hover={{
                        color: "black",
                        backgroundColor: "var(--clear-yellow)",
                      }}
                      className="modal-button"
                    >
                      Close
                    </Button>
                    <Button
                      style={{
                        color: "var(--yellow)",
                        backgroundColor: "var(--medium-gray)",
                      }}
                      colorScheme="var(--yellow)"
                      variant="ghost"
                      onClick={handleExperiencesClick}
                      className="modal-button"
                    >
                      Experiences
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
            <div className="hero-img">
              <img src={hero_avatar} alt="Alejandro Irizarry"></img>
            </div>
          </div>
        </div>
        <div className="arrow floating-image-down">
          <a href="#about">
            <img src={down_arrow} />
          </a>
        </div>
        <About></About>
      </div>
    </span>
  );
}
