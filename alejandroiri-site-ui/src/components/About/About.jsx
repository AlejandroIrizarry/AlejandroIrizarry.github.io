import React, { useEffect, useContext } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import LottieAnimation from "../AnimationComponent/AnimationComponent";
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
import instagram from "/src/assets/instagram.svg";
import up_arrow from "/src/assets/up-arrow.svg";
import capitalone from "/src/assets/capitalone.svg";
import star from "/src/assets/star.svg";
import google_ale from "/src/assets/google_ale.png";
import salesforce_ale from "/src/assets/salesforce_ale.jpg";
import web_cert from "/src/assets/web_cert.png";
import flag from "/src/assets/Flag.json";
import firstbank from "/src/assets/firstbank.png";
import uprb from "/src/assets/uprb.png";

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
            I'm a <span className="markup-light">23</span>-year old{" "}
            <span className="markup-light">Software Engineer</span>.
          </h2>
        </div>
        <div className="about-section-media">
          <LottieAnimation animationData={programmer} />
        </div>
      </div>
      <div className="hidden about-section">
        <div className="about-section-media">
          <LottieAnimation animationData={flag} />
        </div>
        <div className="about-section-text">
          <h2>
            Born and raised at the island of{" "}
            <span className="markup-dark">Puerto Rico</span>.{" "}
            <span className="markup-dark">#Boricua</span>InTech{" "}
          </h2>
        </div>
      </div>

      <div className="hidden about-section">
        <div className="about-section-text">
          <h2>
            <span className="markup-light">Developing</span> web apps <br />
            is my <span className="markup-light">jam!</span> 🧑🏻‍💻
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
          date="September 2025 - Present • SOON!"
          iconStyle={{
            display: "flex",
            background: "white",
            color: "#fff",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          icon={
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Junior Software Engineer
            <br />
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Full-Time</h4>
          <small>Salesforce • San Francisco, California (On-site)</small>
          <p>
            <ul>
              <li>
                • Flow Builder Experience Team (Software Engineering AMTS - New
                Grad)
              </li>
            </ul>
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
          date="September 2024 - June 2025 • 10 mos"
          iconStyle={{
            display: "flex",
            background: "white",
            color: "#fff",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          icon={
            <img src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg" />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Here to Observe (H2O) Planetary Science Division Program
            <br />
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Apprenticeship</h4>
          <small>NASA • Houston, Texas (Hybrid)</small>
          <p>
            <ul>
              <li>
                • A STEM engagement initiative by NASA’s Planetary Science
                Division aimed at increasing the participation of historically
                underrepresented students in STEM by providing opportunities to
                observe and interact with NASA mission teams through mentorship,
                cohort-building, and student-led programs. The program awards
                eligible institutions up to $75,000 per year to support
                participation, with the goal of inspiring and maintaining an
                interest in STEM careers.
              </li>
              <a
                className="dark-link"
                href="https://science.nasa.gov/planetary-science/programs/here-to-observe-h2o/"
              >
                https://science.nasa.gov/planetary-science/programs/here-to-observe-h2o/
              </a>
            </ul>
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
          date="May 2024 - Aug 2024 • 4 mos"
          iconStyle={{
            display: "flex",
            background: "white",
            color: "#fff",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          icon={
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Software Engineer Intern
            <br />
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Internship</h4>
          <small>Salesforce • San Francisco, California (On-site)</small>
          <p>
            <ul>
              <li>
                • Performing end-to-end development, for 12 weeks, in the Flow
                Builder Experience Team for the Automation Services platform in
                Salesforce Marketing Cloud.
              </li>
              <li>
                • Resolved critical bugs, raising and merging 5+ PRs, while
                significantly enhancing the UI for the Flow Builder Platform by
                leveraging TypeScript and Lightning Web Components, ensuring
                seamless and intuitive interactions.
              </li>
              <li>
                • Implemented comprehensive web accessibility features,
                including intuitive keyboard shortcuts for undo, redo, and save
                actions, boosting tool accessibility by 30% and ensuring a more
                inclusive user experience.
              </li>
              <li>
                • Documented development processes, identified 6+ critical bugs
                during bug bashes, and ensured streamlined workflows and
                effective knowledge transfer in scrum meetings.
              </li>
              <li>
                • Engineered a unified dashboard on the Salesforce Data Cloud
                platform, consolidating customer engagement data from email and
                SMS campaigns, resulting in a 40% increase in data accessibility
                and a 25% boost in campaign performance insights for all
                Salesforce customers.
              </li>
            </ul>
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
            Software Engineer Fellow (Empowers Summit)
            <br />
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Student Program
          </h4>
          <small>Bloomberg • New York City Metropolitian Area (On-site)</small>
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
            Software Engineer Consultant
            <br />
            <small>Tech Fellowship Program</small>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Contract</h4>
          <small>CodePath • San Francisco, California (Remote)</small>
          <p>
            <ul>
              <li>
                • Mentoring students on web development technologies for
                full-stack applications through a tech fellowship.
              </li>
              <li>
                • Conducting weekly office hours to assist students with their
                projects.
              </li>
              <li>
                • Performing code reviews and providing feedback to students.
              </li>
            </ul>
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
          icon={
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
            <br />
            <small>Futureforce Tech Launchpad Program</small>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Internship</h4>
          <small>Salesforce • San Francisco, California (On-site)</small>
          <p>
            Full-Stack Web Development using the PERN Stack (PostgreSQL,
            Express, React, Node) at the 10 weeks Software Engineering
            <a
              className="dark-link"
              href="https://info.codepath.org/futureforce-tech-launchpad"
            >
              <b> Futureforce Tech Launchpad </b>
            </a>
            sophomore internship program.
            <br />
            <p>
              Built a full-stack web application for the capstone with 2 other
              interns. The application is{" "}
              <Link className="dark-link" onClick={scrollToTop} to="/projects">
                <b>CodeQuest</b>
              </Link>
              , a platform to teach kids to code in Python in a fun and gamified
              & interactive way.
            </p>
            <ul>
              <li>
                • Handpicked among the top 2.4%, of 2,500+ candidates for the
                esteemed Futureforce Tech Launchpad, a 10- week intensive
                full-stack web development internship, collaborating with
                leading software engineers.
              </li>
              <li>
                • Spearheaded the development of a cutting-edge coding education
                app during an intensive 6-week period full of sprints,
                delivering a fully functional full-stack application (CodeQuest
                App in Projects Section).
              </li>
              <li>
                • Demonstrated proficiency in database architecture, front-end &
                back-end, rigorous testing and seamless deployment through the
                development of five apps, while leading daily scrum meetings to
                reach milestones.
              </li>
            </ul>
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
          <small>Google • Austin, Texas (On-site)</small>
          <br />
          <br />
          <h3 className="vertical-timeline-element-title">
            Software Engineer Extern <small>• 3 mos</small>
            <br />
            <small>Google Mentor Program</small>
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
              className="dark-link"
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
              src={firstbank}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Internship</h4>
          <small>FirstBank • San Juan, Puerto Rico (On-site)</small>
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
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Internship</h4>
          <small>MMM Holdings, LLC. • San Juan, Puerto Rico (On-site)</small>
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
            Bank of America • University of Puerto Rico at Rio Piedras (On-site)
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
          <small>
            Professional Hospital Guaynabo • Guaynabo, Puerto Rico (On-site)
          </small>
          <br />
          <br />
          <h3 className="vertical-timeline-element-title">
            IT Systems Administrator <small>• 4 mos</small>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Part-Time</h4>
          <p>
            Systems analysis, IT infrastructure management and respond to user
            queries.
          </p>
          <br />
          <h3 className="vertical-timeline-element-title">
            Laboratory Systems Intern <small>• 3 mos</small>
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
            Software Engineer Extern
            <br />
            <small>Tech Mini-Mester Program</small>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Externship</h4>
          <small>Capital One • McLean, Virginia (Remote)</small>
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
          date="Graduation: May 2025"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<img style={{ borderRadius: "50px" }} src={uprb} />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science - B.S. Degree
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Computer Science
          </h4>
          <small>University of Puerto Rico at Bayamon • GPA: 3.89/4.0</small>
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
              <li>• The Internet Society</li>
            </ul>
            <br />
            <b>
              Coursework:
              <br />
            </b>
            Data Structures, Databases, Commercial Programming, Web App
            Programming, Computer Architecture, Information Security, Data
            Communications, Calculus, Linear Programming, Discrete Mathematics,
            Information Systems, Operating Systems
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
              Certifications:
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
            <span className="markup-light"> Let's connect!</span> 🫱🏻‍🫲🏿
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
            href="https://instagram.com/alejandrocodes/"
          >
            <img src={instagram} alt="Instagram logo" />
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
          © 2024.
          <br />
          <small>All rights reserved.</small>
        </h4>
        <h5> Updated on July 19, 2024.</h5>
        <h5>Built with React.js ☕️</h5>
      </div>
    </div>
  );
}
