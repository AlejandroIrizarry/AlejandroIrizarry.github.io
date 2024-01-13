import React, { useEffect, useContext } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import LottieAnimation from "../AnimationComponent/AnimationComponent";
import flag from "/src/assets/Flag.json";
import programmer from "/src/assets/Programmer.json";
import react_logo from "/src/assets/React.json";
import college from "/src/assets/college.json";
import google from "/src/assets/Google.json";
import salesforce from "/src/assets/Salesforce.svg";
import projects from "/src/assets/projects.json";
import codey from "/src/assets/Codey.json";
import github from "/src/assets/github-logo.svg";
import gmail from "/src/assets/gmail-logo.svg";
import linkedin from "/src/assets/linkedin-logo.svg";
import twitter from "/src/assets/twitter.svg";
import up_arrow from "/src/assets/up-arrow.svg";
import capitalone from "/src/assets/capitalone.svg";
import star from "/src/assets/star.svg";
import google_ale from "/src/assets/google_ale.png";
import salesforce_ale from "/src/assets/salesforce_ale.jpg";
import web_cert from "/src/assets/web_cert.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function About() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  /*
   * Scrolling Animation
   */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
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
          <h2>
            I'm a <span className="markup-light">22</span>-year old{" "}
            <span className="markup-light">Software Engineer</span>.
          </h2>
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
          <h2>
            Born and raised at the island of{" "}
            <span className="markup-dark">Puerto Rico</span>.{" "}
            <span className="markup-dark">#Boricua</span>InTech
          </h2>
        </div>
      </div>

      <div className="hidden about-section">
        <div className="about-section-text">
          <h2>
            <span className="markup-light">Web Development</span> is <br />
            my <span className="markup-light">passion</span> 🧑🏻‍💻
          </h2>
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
          <h2>
            I go to the{" "}
            <span className="markup-dark">
              University <br />
              of Puerto Rico
            </span>{" "}
            at the Bayamon Campus.
          </h2>
        </div>
      </div>

      <div className="hidden about-section">
        <div className="about-section-text">
          <h2>
            I've been able to <br /> secure{" "}
            <span className="markup-light">experiences</span> at <br />
            <span className="markup-light">Big Tech</span> companies.
          </h2>
        </div>
        <div className="about-section-media" id="companies">
          <LottieAnimation animationData={google} />
          <img id="salesforce" src={salesforce} />
          <span id="company-left">
            <LottieAnimation animationData={codey} id="codey" />
          </span>
        </div>
      </div>

      <span id="experiences"></span>
      <VerticalTimeline animate={true} lineColor={"var(--yellow)"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  white",
          }}
          date="May 2024 - Present • 4 mos"
          iconStyle={{
            display: "flex",
            background: "white",
            color: "#fff",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          icon={<img src={salesforce} />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern (Upcoming 2024)
            <br />
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Internship</h4>
          <small>Salesforce • San Francisco, California</small>
          <p>
            Selected for a 12 weeks Summer 2024 software engineering senior
            internship.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  white",
          }}
          date="Dec 2023 • 1 mo"
          iconStyle={{
            display: "flex",
            background: "white",
            color: "#fff",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          icon={
            <img
              style={{ borderRadius: "50px" }}
              src="https://pbs.twimg.com/profile_images/1016326195221352450/KCcdUN0v_400x400.jpg"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Empowers Scholar
            <br />
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Student Program
          </h4>
          <small>Bloomberg • New York City Metropolitian Area</small>
          <p>
            Selected as one of the 30 out of 1200 applicants to participate in a
            software engineering-focused diversity program, exploring the tech
            industry, enhancing soft & technical skills, and discussing
            authentic self-expression for fostering inclusivity.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  white",
          }}
          date="Jul 2023 - Nov 2023 • 5 mos"
          iconStyle={{
            display: "flex",
            background: "white",
            color: "#fff",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          icon={
            <img src="https://mlt.org/wp-content/uploads/2018/09/codepath-1x1_solid-transparent-300x300.png" />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineering Consultant
            <br />
            <small>Tech Fellowship Program</small>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Part-Time</h4>
          <small>CodePath • San Francisco, California</small>
          <p>
            Mentoring students on web development technologies for full-stack
            applications through a tech fellowship.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  white",
          }}
          date="Jun 2023 - Aug 2023 • 3 mos"
          iconStyle={{
            display: "flex",
            background: "white",
            color: "#fff",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          icon={<img src={salesforce} />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Pre-Intern
            <br />
            <small>Futureforce Tech Launchpad Program</small>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Internship</h4>
          <small>Salesforce • San Francisco, California</small>
          <p>
            Full-Stack Web Development using the PERN Stack (PostgreSQL,
            Express, React, Node) at the 10 weeks Software Engineering
            <a href="https://info.codepath.org/futureforce-tech-launchpad">
              <b> Futureforce Tech Launchpad </b>
            </a>
            pre-internship program.
            <br />
            <p>
              Built a full-stack web application for the capstone with 2 other
              interns. The application is{" "}
              <Link onClick={scrollToTop} to="/projects">
                <b>CodeQuest</b>
              </Link>
              , a platform to teach kids to code in Python in a fun and
              interactive way.
            </p>
            <span className="timeline-img-container">
              <img className="timeline-img" src={salesforce_ale} />
            </span>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  white",
          }}
          date="Apr 2023 - Jul 2023 • 4 mos"
          iconStyle={{
            display: "flex",
            background: "white",
            color: "#fff",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          icon={<LottieAnimation animationData={google} />}
        >
          <small>Google • Austin, Texas</small>
          <br />
          <br />
          <h3 className="vertical-timeline-element-title">
            Software Engineering Extern <small>• 3 mos</small>
            <br />
            <small>Google Buddy Program</small>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Externship</h4>
          <p>
            Participated in group sessions with Googlers, received resources on
            leadership and professional development, immersed myself during
            technical workshops, experienced 1-on-1 meetings, acquired
            mentorship from Software Engineers and received personalized tech
            readiness programming.
          </p>
          <br />
          <h3 className="vertical-timeline-element-title">
            Google Latinx Student Leadership Scholar <small>• 2 mos</small>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Student Program
          </h4>
          <p>
            Built solutions with Googlers to increase Latinx+ representation in
            tech. Selected as one of the 50 student leaders, from 1500+
            applicants, to attend the 7th cohort of the{" "}
            <a
              href="https://buildyourfuture.withgoogle.com/events/latinxstudentleadershipsummit"
              target="_blank"
            >
              <b>Latinx Student Leadership Summit</b>
            </a>
            .
          </p>
          <span className="timeline-img-container">
            <img className="timeline-img" src={google_ale} />
          </span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2022 - Nov 2022 • 4 mos"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={
            <img
              style={{
                borderRadius: "50px",
                height: "100%",
                width: "100%",
              }}
              src="https://media.licdn.com/dms/image/D560BAQF-5aZrWqbSmA/company-logo_100_100/0/1686091059961/firstbankpr_logo?e=1712793600&v=beta&t=gib-8uwhvitj851O9nFbkrez3MMp2ErGdV-8fObNmjY"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Software Development Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Internship</h4>
          <small>FirstBank • San Juan, Puerto Rico</small>
          <p>Comptroller Department developing low-code applications</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2022 - Jul 2022 • 2 mos"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={
            <img
              width="30px"
              height="10px"
              src="https://blog.mmm-pr.com/wp-content/uploads/2021/04/cropped-favicon-1.png"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Software Development Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Internship</h4>
          <small>MMM Holdings, LLC. • San Juan, Puerto Rico</small>
          <p>Database Management Mapping</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2022 - Apr 2022 • 3 mos"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={
            <img src="https://cdn.freebiesupply.com/logos/large/2x/bank-of-america-4-logo-png-transparent.png" />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Jobs Initiative Participant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Certification Program
          </h4>
          <small>
            Bank of America • University of Puerto Rico at Rio Piedras
          </small>
          <p>
            Participated in workshops for minority students to gain skills in
            finance & tech
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jun 2021 - Dec 2021 • 7 mos"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={
            <img src="https://www.hrzkit.com/wp-content/uploads/2019/08/Professional-Hospital-Trans-200x150.png" />
          }
        >
          <small>Professional Hospital Guaynabo • Guaynabo, Puerto Rico</small>
          <br />
          <br />
          <h3 className="vertical-timeline-element-title">
            Information Systems Officer <small>• 4 mos</small>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Full-Time</h4>
          <p>
            Systems analysis, IT infrastructure management and respond to user
            queries.
          </p>
          <br />
          <h3 className="vertical-timeline-element-title">
            Information Systems Intern <small>• 3 mos</small>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Internship</h4>

          <p>
            Refactor laboratory database system for clinical lab tests and
            internal procedures.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jul 2021 - Aug 2021 • 2 mos"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<img src={capitalone} />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineering Extern, Tech Mini-Mester
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Externship</h4>
          <small>Capital One • McLean, Virginia</small>
          <p>
            <ul>
              <li>
                • Successfully completed an immerse training with Capital One’s
                Tech organization.
              </li>
              <li>
                • Gained skills in Agile, Cyber Security, Data Engineering,
                Machine Learning & AI, Mobile Development, and Software
                Engineering.
              </li>
              <li>
                • Gained opportunities for mentorship and training to build on
                current skills in topics like Software Development, Agile
                framework, Machine Learning, Cyber and more{" "}
                <li>
                  • Received soft skill training in teamwork, communication,
                  mentorship and imposter syndrome
                </li>
              </li>
              <li>
                • Grew my network by connecting with Capital One leaders and
                facilitators via LinkedIn
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2019 - May 2025 • 6 yrs"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={
            <img
              style={{ borderRadius: "50px" }}
              src="https://media.licdn.com/dms/image/D4E0BAQGdLzrOS2UklQ/company-logo_200_200/0/1667502406126/university_of_puerto_rico_logo?e=1712793600&v=beta&t=VvJ56yn8n2ph5QaAr2oevYh0mtrtnjlRGbO-t3EC3-A"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelors Degree
          </h4>
          <small>University of Puerto Rico at Bayamon</small>
          <p>
            <b>Extraccuricular & Organizations:</b>
            <ul>
              <li>• Honors Studies Program (President)</li>
              <li>• Hispanic Scholarship Fund Scholar</li>
              <li>• National Society of Collegiate Scholars</li>
              <li>• ColorStack.org Member</li>
              <li>• CodePath.org Campus Ambassador</li>
              <li>
                • Association for Computer Science Students (Association for
                Computing Machinery)
              </li>
            </ul>
            <br />
            <b>
              Coursework:
              <br />
            </b>
            Data Structures, Databases, Commercial Programming, Web App
            Programming, Computer Architecture, Information Security, Data
            Communications
            <br />
            <br />
            <b>
              Awards:
              <br />
            </b>
            <ul>
              <li>
                • Wells Fargo Scholarship:{" "}
                <small>
                  Awarded a scholarship to support my college education from a
                  pool of 124,754 applicants.
                </small>
              </li>
              <li>
                • NSCS New Member Award:{" "}
                <small>
                  Awarded annual scholarship given to 100 outstanding new
                  members across the country.
                </small>
              </li>
            </ul>
            <br />
            <b>
              Certifications
              <br />
            </b>
            <ul className="timeline-certificates">
              <span className="timeline-img-container">
                <li>Web Development</li>
                <a
                  href="https://drive.google.com/file/d/1lah7X-TNtnn8lsvbFGmKyj46EXpN9CI4/view?usp=sharing"
                  target="_blank"
                >
                  <img
                    className="timeline-cert-codepath"
                    src={web_cert}
                    alt="codepath web development course certificate"
                  />
                </a>
              </span>
              <span className="timeline-img-container">
                <li>Crash Course on Python</li>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/CEJQTUK67W4Y"
                  target="_blank"
                >
                  <img
                    className="timeline-cert"
                    src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~CEJQTUK67W4Y/CERTIFICATE_LANDING_PAGE~CEJQTUK67W4Y.jpeg"
                    alt="google crash course on python certificate"
                  />
                </a>
              </span>
              <span className="timeline-img-container">
                <li>Intro to Git and Github</li>
                <a href="https://www.coursera.org/account/accomplishments/verify/DCKBLLEW5HG2">
                  <img
                    className="timeline-cert"
                    src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~CEJQTUK67W4Y/CERTIFICATE_LANDING_PAGE~CEJQTUK67W4Y.jpeg"
                    alt="google intro to git and github certificate"
                  />
                </a>
              </span>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-element"
          iconStyle={{
            background: "var(--yellow)",
            color: "#fff",
          }}
          icon={<img src={star} />}
        />
      </VerticalTimeline>

      <div className="hidden about-section">
        <div className="about-section-media">
          <LottieAnimation animationData={projects} />
        </div>
        <div className="about-section-text">
          <h2>
            Check out<span className="markup-dark"> my projects</span>
            <br /> by{" "}
            <Link to="/projects" id="click" onClick={scrollToTop}>
              <span className="markup-dark">clicking here</span>
            </Link>
          </h2>
        </div>
      </div>

      <footer id="contact" className="animation contact-section">
        <div className="contact-section-text">
          <h2>
            Don't be a stranger,
            <br />
            <span className="markup-light"> Let's connect</span>! 🫱🏻‍🫲🏿
          </h2>
        </div>
        <div className="contact-section-media float-area">
          <a
            className="logo hidden floating-image-up"
            target="_blank"
            style={{ "--order": 1 }}
            href="mailto:alejandro.irizarryn@gmail.com"
          >
            <img src={gmail} alt="Gmail logo" />
          </a>

          <a
            className="logo hidden floating-image-down"
            target="_blank"
            style={{ "--order": 2 }}
            href="https://github.com/AlejandroIrizarry"
          >
            <img src={github} alt="Github logo" />
          </a>

          <a
            className="logo hidden floating-image-up"
            target="_blank"
            style={{ "--order": 3 }}
            href="https://www.linkedin.com/in/alejandroirizarry"
          >
            <img src={linkedin} alt="LinkedIn logo" />
          </a>

          <a
            className="logo hidden floating-image-down"
            target="_blank"
            style={{ "--order": 4 }}
            href="https://twitter.com/aleirizarryn/"
          >
            <img src={twitter} alt="Twitter logo" />
          </a>
        </div>
      </footer>
      <div id="up-arrow" className="arrow floating-image-up">
        <a href="#home" onClick={scrollToTop}>
          <img src={up_arrow} />
        </a>
      </div>
      <div id="copyright">
        <h4>
          Developed by <span className="markup-light">Alejandro Irizarry</span>{" "}
          © 2024
        </h4>
        <h5> Updated on January 13, 2024.</h5>
        <h5>Built with React.js ☕️</h5>
      </div>
    </div>
  );
}
