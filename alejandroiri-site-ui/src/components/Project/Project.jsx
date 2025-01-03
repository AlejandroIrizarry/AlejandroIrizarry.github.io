import React from "react";
import { useState } from "react";
import "./Project.css";
import poster from "/src/assets/poster.pdf";
import link_arrow from "/src/assets/link_arrow.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LottieAnimation from "../AnimationComponent/AnimationComponent";

import hero_avatar from "/src/assets/me.png";
import pyspace from "/src/assets/pyspace.png";

import Birthday from "../Birthday/Birthday.jsx";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Badge,
  Flex,
  Avatar,
  Text,
} from "@chakra-ui/react";

import { SettingsIcon, InfoIcon } from "@chakra-ui/icons";

import { Collapse, Button } from "@chakra-ui/react";

export default function Project() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <div className="projects">
      <h1>
        <SettingsIcon /> Projects <SettingsIcon />
      </h1>
      <div className="page-desc">
        <p>
          <InfoIcon /> Here are some of the projects that I've worked on during
          my free time or internships. I've worked on a variety of projects,
          ranging from full-stack web applications to mobile applications and
          games. I'm always looking for new projects to work on, so if you have
          any ideas or would like to collaborate on a project together, feel
          free to reach out at{" "}
          <a className="dark-link" href="mailto:alejandro.irizarryn@gmail.com">
            alejandro.irizarryn@gmail.com
          </a>{" "}
          or connect with me on{" "}
          <a
            className="dark-link"
            href="https://www.linkedin.com/in/alejandroirizarry"
          >
            LinkedIn
          </a>{" "}
          ☕️
        </p>
      </div>
      <Box align="center">
        <input
          className="range-slider"
          type="range"
          min="0"
          max="1"
          value={tabIndex}
          onChange={handleSliderChange}
          color="var(--yellow)"
          bg="var(--yellow)"
          colorScheme="var(--yellow)"
        />
        <Tabs
          id="projects"
          index={tabIndex}
          onChange={handleTabsChange}
          align="center"
          variant="enclosed"
        >
          <TabList>
            <Tab
              className="tab-name"
              _selected={{
                color: "var(--medium-gray) !important",
                bg: "var(--yellow)",
              }}
              _hover={{
                color: "var(--medium-gray) !important",
                bg: "var(--dark-gray)",
              }}
              color="#ffff"
            >
              Web Programming
            </Tab>
            <Tab
              className="tab-name"
              _selected={{
                color: "var(--medium-gray) !important",
                bg: "var(--yellow)",
              }}
              _hover={{
                color: "var(--medium-gray) !important",
                bg: "var(--dark-gray)",
              }}
              color="#ffff"
            >
              Other
            </Tab>
          </TabList>
          <a className="github-stats" href="https://git.io/streak-stats">
            <img
              src="https://camo.githubusercontent.com/a1a7ab00cde3b1aee0d206e1547c9a9b80ec91cf8acf22c4d6fb6d0883e64bd4/68747470733a2f2f6769746875622d73746174732d616c7068612e76657263656c2e6170702f6170693f757365726e616d653d416c656a616e64726f4972697a617272792663633d6630656165332674633d3536363535332669633d3536363535332662633d353636353533"
              alt="GitHub Streak"
            />
          </a>
          <TabPanels>
            <TabPanel>
              <b className="dark-link">
                👀 Yoohoo! Here's a tip: Click the app name to visit it, or just
                play with it through the frames below.
              </b>
              <section className="project-section">
                <div className="project-media">
                  <iframe
                    src="https://www.mihonoruprb.com"
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/AlejandroIrizarry/MiHonorUPRB"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a href="https://www.mihonoruprb.com" target="_blank">
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a
                      id="codequest"
                      href="https://www.mihonoruprb.com"
                      target="_blank"
                    >
                      MiHonorUPRB
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools:</b> (React.js, Postgresql, Express.js, Node.js,
                    Tailwind CSS, NextUI, NextUI, Javascript, Render, AWS S3
                    Buckets, Microsoft Azure Auth API, Lottie Animations)
                  </h4>
                  <p className="project-desc">
                    <b>MiHonorUPRB</b> © 2024 is an application for my undergrad
                    dissertation/capstone project. I helped the University of
                    Puerto Rico at Bayamon develop a full-stack web application
                    for the Honors Program so that the program's administration
                    can accept and handle applications from students interested
                    in joining the program. Also, it helps serve as a networking
                    hub and a place to store student academic information and
                    their progress in the program.
                    <Collapse startingHeight={20} in={show}>
                      <br />
                      <h4>
                        <b>What is MiHonorUPRB?</b>
                      </h4>
                      MiHonorUPRB is a web application that allows students from
                      the University of Puerto Rico to apply to the UPRB Honor's
                      Program and keep track of all of their relevant academic
                      information related to the program.
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>

              {/* <section className="project-section">
                <div className="project-media">
                  <iframe
                    src="https://dailyu.vercel.app"
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/AlejandroIrizarry/dailyu-ui"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a href="https://dailyu.vercel.app" target="_blank">
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a
                      id="codequest"
                      href="https://dailyu.vercel.app"
                      target="_blank"
                    >
                      DailyU
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools:</b> (Supabase, Postgresql, Tailwind CSS, Next.js,
                    NextUI, Typescript, Vercel)
                  </h4>
                  <p className="project-desc">
                    <b>DailyU</b> © 2024 is an application that helps users to
                    keep track of their daily tasks. The application is an
                    initiative for me to learn how to develop fast and modern
                    responsive web applications using the latest technologies.
                    The app is built with NextJS, NextUI, Typescript and
                    Supabase for the backend. The app is currently under
                    development and is expected to receive more updates in the
                    future. <br />
                    <Collapse startingHeight={20} in={show}>
                      <br />
                      <h4>
                        <b>What is DailyU?</b>
                      </h4>
                      DailyU is a full-featured Supabaseified NextJS application
                      for users to keep track of their daily tasks. 🚀
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section> */}

              <section className="project-section">
                <div className="project-media">
                  <iframe
                    src="https://www.uprbcommunity.com"
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/AlejandroIrizarry/ConfessionApp"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a href="https://www.uprbcommunity.com/" target="_blank">
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a
                      id="codequest"
                      href="https://www.uprbcommunity.com/"
                      target="_blank"
                    >
                      MiVaquero
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools:</b> (Postgresql, React.js, RESTful API, Node,
                    Express, Google RECaptcha, Chakra UI, AWS S3 Buckets,
                    Nodemailer, JWT, JSON, Multer Middleware, Bcrypt, Crypto,
                    Render)
                  </h4>
                  <p className="project-desc">
                    <b>UPRB Community</b> © 2024 is a social networking web
                    application, released in April 2024, that allows students
                    from the UPRB campus to share their confessions, create
                    discussions and learn about the latest news from the campus.
                    This was developed from scratch as an effort to increase
                    social interaction amongst the student community from the
                    University of Puerto Rico at Bayamon. <br />
                    <b>Key features:</b> user authentication, hashing with
                    bcrypt, nodemailer for email verification and password
                    restoration, modern responsive UI components powered by
                    Chakra UI, Google ReCAPTCHA, Amazon Web Services S3 Buckets
                    implementation for large media files uploads (gifs/images),
                    in-app desktop push notifications, database token cleanup,
                    profile customization and anonymous/public posting in the
                    app feed.
                    <Collapse startingHeight={20} in={show}>
                      <br />
                      <h4>
                        <b>What is UPRB Community?</b>
                      </h4>
                      UPRB Community is a social networking platform for
                      students and faculty from the University of Puerto Rico at
                      Bayamon Campus to share their confessions and create
                      discussions in an user-friendly web application. The app
                      also works as a social media platform for alumnis to meet
                      other people within their own campus. This application is
                      currently under production and is expected to receive more
                      updates. 🚀
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>

              <section className="project-section">
                <div className="project-media">
                  <iframe
                    src="https://www.aleirizarry.com"
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/AlejandroIrizarry/AlejandroIrizarry.github.io"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a href="https://www.aleirizarry.com/" target="_blank">
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a
                      id="codequest"
                      href="https://www.aleirizarry.com/"
                      target="_blank"
                    >
                      Portfolio
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools:</b> (Vite, Create React App, HTML, CSS,
                    JavaScript, ChakraUI, Lottie Animations, Render)
                  </h4>
                  <p className="project-desc">
                    <b>Portfolio</b> © 2024 is a website to showcase my skills
                    and projects as a software developer. Here, you can see
                    projects that I've worked on during my free time or
                    internships, and you can also take some of your precious
                    time to learn more about me. The site is 90% built with my
                    own code, while other parts are built with personalized
                    ChakraUI components and Lottie Animations.
                    <Collapse startingHeight={20} in={show}>
                      <br />
                      <h4>
                        <b>What is Portfolio?</b>
                      </h4>
                      Portfolio is my personal website to showcase some of the
                      projects that I've worked throughout the years as part of
                      my journey of becoming a full-stack software engineer.
                      Every month, I work on building up my skills to become a
                      better and more efficient problem solver. I hope you enjoy
                      my projects and feel free to reach out to me if you have
                      any questions or would like to collaborate on a project
                      together. 🚀
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>

              {/* 2023 */}
              <section className="project-section">
                <div className="project-media">
                  <iframe
                    src="https://codequest.academy"
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/FTLGroupG/codequest"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a href="https://www.codequest.academy/" target="_blank">
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a
                      id="codequest"
                      href="https://www.codequest.academy/"
                      target="_blank"
                    >
                      CodeQuest
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools:</b> (React.js, Node.js, Express.js, PostgreSQL,
                    Context API, JSON Web Token, Lottie Animation, Render,
                    Python Trinket)
                  </h4>
                  <p className="project-desc">
                    <b>CodeQuest</b> © 2023 is a groundbreaking full-stack web
                    application designed to teach Python coding to children aged
                    6-10 in an exciting and interactive manner. 🚀 This
                    application was built for my Software Engineering
                    pre-internship at Salesforce.
                    <Collapse startingHeight={20} in={show}>
                      <br />
                      <h4>
                        <b>What is CodeQuest Academy?</b>
                      </h4>
                      The platform transforms learning into a thrilling
                      adventure by incorporating gamified elements, turning
                      coding exercises into engaging challenges. 🎮 With a
                      user-friendly interface, kids unlock the power of Python
                      while developing problem-solving skills through hands-on
                      activities. 🌟 CodeQuest goes beyond coding, nurturing
                      creativity and encouraging collaboration through
                      mentorship and teamwork. 🌈 As young learners progress,
                      they earn badges and rewards, creating a sense of
                      accomplishment and celebrating their coding journey. 👩‍💻
                      Join us at CodeQuest to empower your child with the gift
                      of coding and open the door to a world of endless
                      possibilities in a fun and inspiring way. 🏆{" "}
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                    <br />
                    <span className="contributor">
                      <Flex>
                        <Avatar src="https://images.squarespace-cdn.com/content/v1/616344cedcf8b409ba8ec99d/0999b510-194b-480e-a7ff-a6b4c32103ea/IMG_0593.jpg?format=2500w" />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Kennedy Parks
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              they/them
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                    <span className="contributor">
                      <Flex>
                        <Avatar src="https://media.licdn.com/dms/image/D4E03AQFJa4yWuAQ4cg/profile-displayphoto-shrink_400_400/0/1663283538763?e=1715817600&v=beta&t=dlxOq4T6gwbD4fcblE2azR5WinSVkxQ7E1mAsonM3wY" />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Favour Onukogu
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              she/her
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>
              <section className="project-section">
                <div className="project-media">
                  <iframe
                    src="https://lifetracker-ui-429a.onrender.com/"
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <button className="project-button">
                      Code<span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                    <a
                      href="https://www.loom.com/embed/31e9f68eb97e47568fc309787f2b779d?sid=8ecacf1b-0dcb-47b7-9115-fbeb698b57ce"
                      target="_blank"
                    >
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a
                      href="https://lifetracker-ui-429a.onrender.com/"
                      target="_blank"
                    >
                      LifeTracker
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools:</b> (React.js, Node.js, Express.js, PostgreSQL,
                    Render)
                  </h4>
                  <p className="project-desc">
                    <b>LifeTracker</b> © 2023 includes a robust authentication
                    system using PostgreSQL and bcrypt, an Express API for
                    user-related activity storage, and multiple models
                    implementing core business logic for life tracking. I wrote
                    SQL queries for user statistics aggregation and summary
                    overviews. The React frontend communicates with the API
                    using an API service class, featuring pages and forms that
                    interact with the server through HTTP requests. The
                    application state is managed on the frontend using useEffect
                    and useState hooks, with user-authenticated JWT tokens
                    stored in the browser's local storage for persistent
                    authentication.
                    <br />
                    <br />
                    <Collapse startingHeight={1} in={show}>
                      <h4>
                        <b>What is the LifeTracker App?</b>
                      </h4>
                      Everywhere around us is data waiting to be collected and
                      utilized. In recent years, we've seen the rise of
                      applications and services that exist to quantify concepts
                      that were previously hard to capture. FitBit, Apple
                      Health, and Woop are all $1 billion dollar services to
                      offer tracking statistics about how we live our lives. The
                      LifeTracker app will do exactly that - track your life by
                      quantifying your activity.
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>
              <section className="project-section">
                <div className="project-media">
                  <iframe
                    src="https://student-store-ui-cwt4.onrender.com/"
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/AlejandroIrizarry/site-week2-project2-student-store-starter/tree/main"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a
                      href="https://www.loom.com/share/3e23512a3ace460788ea7b198b0f5941"
                      target="_blank"
                    >
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a
                      href="https://student-store-ui-cwt4.onrender.com/"
                      target="_blank"
                    >
                      Store
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools: </b>(React.js, Node.js, Express.js, Heroku API,
                    Render)
                  </h4>
                  <p className="project-desc">
                    <b>CodePath Student Store</b> © 2023 has implemented various
                    features for an enhanced shopping experience, allowing users
                    to expand the shopping cart in the left navigation,
                    increment and decrement product quantities with intuitive
                    '+' and '-' buttons, and automatically remove products when
                    their count reaches zero. The shopping cart provides a
                    detailed table with product information, quantities,
                    subtotal, tax, and total. Users can seamlessly checkout and
                    receive a confirmation receipt. Additionally, introduced a
                    dynamic onChange event in the checkout form to update name
                    and email fields while typing. Integrated a visually
                    engaging CSS animation with a floating logo for added user
                    interaction. Used the Heroku API to fetch products:{" "}
                    <a
                      href="https://codepath-store-api.herokuapp.com/store/"
                      target="_blank"
                    >
                      https://codepath-store-api.herokuapp.com/store/
                    </a>
                    <br />
                    <br />
                    <Collapse startingHeight={1} in={show}>
                      <h4>
                        <b>What is CodePath Student Store?</b>
                      </h4>
                      Selling merchandise in the modern era requires digital
                      solutions. For this project, I was tasked with designing
                      and constructing an online student store for the College
                      of CodePath. The web app consists of a frontend user
                      interface for potential customers to browse available
                      goods and a backend API to handle data management. The API
                      was built with Node and Express, and the UI was built with
                      React.
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>
              <section className="project-section">
                <div className="project-media">
                  <iframe
                    src="https://flixster.onrender.com/"
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/AlejandroIrizarry/site-week1-project1-flixster-starter"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a
                      href="https://www.loom.com/share/df3acad7a3bf452180692bfca19d7a35?sid=9ed6743a-a674-46b2-a22c-d50d6f570b15"
                      target="_blank"
                    >
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a href="https://flixster.onrender.com/" target="_blank">
                      Flixster
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools: </b>(HTML, CSS, JavaScript, JSON, TheMovieDB API,
                    Render)
                  </h4>
                  <p className="project-desc">
                    <b>Flixster </b> © 2023 offers users a seamless movie
                    exploration experience by leveraging The Movie Database API.
                    The grid view, identified by the movies-grid ID, displays
                    current movies as a grid of movie cards with the movie-card
                    class. Each card includes essential details such as the
                    movie title (class: movie-title), poster image (class:
                    movie-poster), and votes (class: movie-votes). Users can
                    effortlessly load more movies by clicking the
                    load-more-movies-btn, dynamically expanding the list without
                    refreshing the page. The search functionality is enhanced
                    with a search input (id: search-input), enabling users to
                    query the API by entering text and triggering a search
                    request upon hitting 'Enter.' The search results are
                    presented in a grid view. Additionally, the close-search-btn
                    (id) allows users to exit the search, clear results, and
                    return to the display of current movies. The website
                    prioritizes basic HTML/CSS accessibility features and
                    ensures responsiveness for a seamless user experience across
                    devices.
                    <br />
                    <br />
                    <Collapse startingHeight={1} in={show}>
                      <h4>
                        <b>What is Flixster?</b>
                      </h4>
                      Flixster is a crafted dynamic website showcasing the
                      latest movies currently playing in theaters, seamlessly
                      integrating the Movie Database API to fetch an up-to-date
                      list of films. Utilizing HTML, CSS, and JavaScript, the
                      website provides an engaging and user-friendly interface
                      for users to explore and stay informed about the latest
                      cinematic releases. The Movie Database API was used to
                      fetch the movies:{" "}
                      <a
                        href="https://developer.themoviedb.org/docs/getting-started"
                        target="_blank"
                      >
                        https://developer.themoviedb.org/docs/getting-started
                      </a>
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>
              <section className="project-section">
                <div className="project-media">
                  <iframe
                    src="/projects/birthday"
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/AlejandroIrizarry/AlejandroIrizarry.github.io/tree/main/alejandroiri-site-ui/src/components/Birthday"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a href="/projects/birthday" target="_blank">
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a href="/projects/birthday" target="_blank">
                      Gift
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools: </b>(HTML, CSS, JavaScript, ChakraUI, Lottie
                    Animation, Render)
                  </h4>
                  <p className="project-desc">
                    <b>Gift </b> © 2024 is a special project I built for my
                    partner as a birthday gift card. Feel free to use this
                    template if you like. You will need to install lottie and
                    import the Lottie Animations to your project. Also, you must
                    use ChakraUI for the Timeline Component.
                    <br />
                    <br />
                    <Collapse startingHeight={1} in={show}>
                      <h4>
                        <b>What is Birthday Gift Card Site?</b>
                      </h4>
                      A template site that can be used as a digital birthday
                      gift card for your friends, family or that very special
                      person.
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>
            </TabPanel>
            <TabPanel>
              <section className="project-section">
                <div className="project-media">
                  <iframe
                    src={poster}
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/jilliansabrina/MessageMate"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a
                      href="https://github.com/jilliansabrina/MessageMate"
                      target="_blank"
                    >
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a
                      href="https://drive.google.com/file/d/1lMXPm2VNCLKHGPTDdAX6q3OAXA62ngGo/view?usp=drive_link"
                      target="_blank"
                    >
                      MessageMate
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools:</b> (Python, Sockets Programming, Trinket, PyCharm
                    IDE)
                  </h4>
                  <p className="project-desc">
                    <b>MessageMate</b> is an instant messaging app crafted in
                    Python with a resilient client-server architecture. The
                    server utilizes Python's socket library to adeptly manage
                    concurrent connections, facilitating seamless and
                    instantaneous message exchanges. Tkinter is employed to
                    fashion an intuitive and visually appealing graphical user
                    interface (GUI) for users to interact with. Threading is
                    implemented for the simultaneous handling of multiple client
                    connections, ensuring responsiveness and uninterrupted
                    messaging. The system incorporates robust error-handling
                    mechanisms, enhancing its overall reliability. Additionally,
                    encryption measures can be optionally integrated to bolster
                    message transmission security. Following a client-server
                    model, MessageMate enables real-time connections, message
                    sending, and updates. Prioritizing user-friendly
                    interactions, reliability, and security, the app offers a
                    streamlined and efficient instant messaging experience.
                    <br />
                    <br />
                    <Collapse startingHeight={1} in={show}>
                      <h4>What is MessageMate?</h4>
                      In the contemporary era of pervasive digital connectivity,
                      this project focuses on developing a dynamic chat
                      application that combines network programming and
                      graphical user interface design. The aim is to create a
                      versatile platform that enables instant communication
                      while embodying the complexities of a robust client-server
                      architecture. Recognizing the pivotal role of effective
                      communication in today's fast-paced world, the project
                      aligns with societal trends, serving as a hands-on
                      exploration of network protocols and user interface design
                      intricacies. By addressing challenges such as concurrency,
                      data synchronization, and user-friendly interface design,
                      the project contributes to the broader discussion on how
                      technology can enhance and simplify human connections. The
                      subsequent sections of the scientific poster will detail
                      specific objectives, design principles, tools used, and
                      conclusions drawn from the successful implementation of
                      MessageMate, showcasing not only technical proficiency but
                      also a commitment to advancing communication technology.
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                    <span className="contributor">
                      <Flex>
                        <Avatar src="https://media.licdn.com/dms/image/D4E03AQFwspPLKyKWUQ/profile-displayphoto-shrink_100_100/0/1696024288558?e=1715817600&v=beta&t=Y7cq-FRlxcvOwmsFwh8375DAe_E1kd4F9NP39-2Sfqg" />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Jillian Alvarez
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              she/her
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Full-Stack Developer</Text>
                        </Box>
                      </Flex>
                    </span>
                    <span className="contributor">
                      <Flex>
                        <Avatar src="https://media.licdn.com/dms/image/D5603AQE0uSyDjG9UxA/profile-displayphoto-shrink_100_100/0/1694739138045?e=1715817600&v=beta&t=-lGYQRM_vkCHBBE9ZkK3wnhf43pfdkE4WMH_04wC-oA" />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Ricardo Hernandez
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">IT Specialist & Programmer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>
              <section className="project-section">
                <div className="project-media">
                  <img src={pyspace} />
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/AlejandroIrizarry/Space-Defender"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a href="https://www.codequest.academy/" target="_blank">
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a
                      href="https://replit.com/@alejandroirizarry/Space-Defender"
                      target="_blank"
                    >
                      PySpace
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools:</b> (Python, PyGame, Replit IDE)
                  </h4>
                  <p className="project-desc">
                    <b>PySpace</b> is a PyGame developed during my participation
                    in Capital One's Tech Mini-Mester Software Engineering
                    Externship program.
                    <br />
                    <br />
                    <Collapse startingHeight={1} in={show}>
                      <h4>What is PySpace?</h4>A python game where your main
                      objective is to protect the space stations by shooting
                      arrows to enemy fleets. Will you be able to prove yourself
                      as the best space defender? Let's find out! <br />
                      <br />
                      <b>Instructions:</b> <br />
                      Defend the space stations from enemy fleets til the timer
                      reaches 00:00. Controls to move ship: W - Up S - Down A -
                      Left D - Right
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>
            </TabPanel>
            {/* Database Projects */}
            <TabPanel>
              <section className="project-section"></section>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Routes>
        <Route path="*/birthday" element={<Birthday />} />
      </Routes>
    </div>
  );
}
