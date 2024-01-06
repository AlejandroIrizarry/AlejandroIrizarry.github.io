import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const navigate = useNavigate();
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY || window.pageYOffset;

    const handleScroll = () => {
      let currentScrollPos = window.scrollY || window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener when the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <>
      <div className={`navbar ${navbarVisible ? "visible" : "hidden"}`}>
        {/* Your existing navbar content */}
        <div className="nav-content">
          <div className="nav-logo"></div>
          <ul className="nav-links">
            <li>
              <a href="/">
                <span className="hover-underline-animation">Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <span className="hover-underline-animation">About</span>
              </a>
            </li>
            <li>
              <Link
                className="hover-underline-animation"
                to="/projects"
                onClick={scrollToTop}
              >
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <a href="/#contact">
                <span className="hover-underline-animation">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
