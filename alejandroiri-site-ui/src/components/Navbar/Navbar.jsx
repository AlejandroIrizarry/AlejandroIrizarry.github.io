import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";

import { HamburgerIcon, PhoneIcon } from "@chakra-ui/icons";

export default function Navbar(props) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const navigate = useNavigate();
  const [navbarVisible, setNavbarVisible] = useState(true);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 850);

  useEffect(() => {
    let prevScrollPos = window.scrollY || window.pageYOffset;

    const handleScroll = () => {
      let currentScrollPos = window.scrollY || window.pageYOffset;

      if (isSmallScreen) {
        setNavbarVisible(prevScrollPos > currentScrollPos);
      } else {
        // On larger screens, always show the navbar
        if (prevScrollPos > currentScrollPos) {
          setNavbarVisible(true);
        } else {
          setNavbarVisible(false);
        }
      }

      prevScrollPos = currentScrollPos;
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 850);
      // Always show the navbar on resize
      setNavbarVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  return (
    <>
      <div className={`navbar ${navbarVisible ? "visible" : "hidden"}`}>
        <div className="nav-content">
          <div className="nav-logo"></div>

          <ul className="nav-links">
            <li id="hamburger-btn" className="hamburger-menu">
              <Menu id="menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  colorScheme="var(--yellow)"
                  style={{ color: "var(--yellow)", borderWidth: "3px" }}
                ></MenuButton>
                <MenuList>
                  <MenuGroup title="Menu">
                    <MenuItem as="a" href="/" className="menu-item">
                      🏠 Home
                    </MenuItem>
                    <MenuItem as="a" href="/#about" className="menu-item">
                      🧑‍💻 About
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem as="a" href="/#experiences" className="menu-item">
                      🚀 Experiences
                    </MenuItem>
                    <MenuItem as="a" href="/#contact" className="menu-item">
                      <PhoneIcon paddingRight={1} />
                      Contact
                    </MenuItem>
                    <MenuItem as="a" href="/projects" className="menu-item">
                      <Link
                        id="menu-projects"
                        to="/projects"
                        onClick={scrollToTop}
                      >
                        ⚙️ Projects
                      </Link>
                    </MenuItem>

                    <MenuItem
                      as="a"
                      href="https://drive.google.com/file/d/1rto40o7eyLStj3louYiAUTVHJ5OLHqeE/view?usp=sharing"
                      className="menu-item"
                    >
                      🪪 Resume
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </li>
            <li className="nav-item">
              <a href="/">
                <span className="hover-underline-animation">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/#about">
                <span className="hover-underline-animation">About</span>
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="hover-underline-animation"
                to="/projects"
                onClick={scrollToTop}
              >
                <span>Projects</span>
              </Link>
            </li>
            <li className="nav-item">
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
