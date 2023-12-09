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
      <iframe src="https://codequest.academy" frameborder="0" width="100%" height="400" webkitallowfullscreen mozallowfullscreen allowfullscreen  ></iframe>
        <br/>
        <span className="project-button-container">
          <a href="https://github.com/FTLGroupG/codequest" target="_blank"><button className="project-button">Source Code<span></span><span></span><span></span><span></span></button></a>
          <a href="https://www.codequest.academy/" target="_blank"><button className="project-button">Demo<span></span><span></span><span></span><span></span></button></a>
        </span>
      </div>
      <div className="project-info">
        <h3 className="project-title"><a href="https://www.codequest.academy/" target="_blank">CodeQuest</a></h3>
        <h4 className="project-skills"><b>Tools:</b> (React.js, Node.js, Express.js, PostgreSQL, Context API, JSON Web Token, Lottie Animation, Render)</h4>
        <p className="project-desc"><b>CodeQuest</b> is a groundbreaking full-stack web application designed to teach Python coding to children aged 6-10 in an exciting and interactive manner. 🚀 This application was built for my Software Engineering pre-internship at Salesforce.<br/><br/><h4>What is CodeQuest Academy?</h4>The platform transforms learning into a thrilling adventure by incorporating gamified elements, turning coding exercises into engaging challenges. 🎮 With a user-friendly interface, kids unlock the power of Python while developing problem-solving skills through hands-on activities. 🌟 CodeQuest goes beyond coding, nurturing creativity and encouraging collaboration through mentorship and teamwork. 🌈 As young learners progress, they earn badges and rewards, creating a sense of accomplishment and celebrating their coding journey. 👩‍💻 Join us at CodeQuest to empower your child with the gift of coding and open the door to a world of endless possibilities in a fun and inspiring way. 🏆 </p>
      </div>
    </section>

    <section className="project-section">
      <div className="project-media">
        
      <iframe src="https://lifetracker-ui-429a.onrender.com/" frameborder="0" width="100%" height="400" webkitallowfullscreen mozallowfullscreen allowfullscreen  ></iframe>
        <br/>
        <span className="project-button-container">
          <button className="project-button">Source Code<span></span><span></span><span></span><span></span></button>
          <a href="https://www.loom.com/embed/31e9f68eb97e47568fc309787f2b779d?sid=8ecacf1b-0dcb-47b7-9115-fbeb698b57ce" target="_blank"><button className="project-button">Demo<span></span><span></span><span></span><span></span></button></a>
        </span>
      </div>
      <div className="project-info">
        <h3 className="project-title"><a href="https://lifetracker-ui-429a.onrender.com/" target="_blank">LifeTracker</a></h3>
        <h4 className="project-skills"><b>Tools:</b> (React.js, Node.js, Express.js, PostgreSQL, Render)</h4>
        <p className="project-desc"><b>LifeTracker</b>  includes a robust authentication system using PostgreSQL and bcrypt, an Express API for user-related activity storage, and multiple models implementing core business logic for life tracking. I wrote SQL queries for user statistics aggregation and summary overviews. The React frontend communicates with the API using an API service class, featuring pages and forms that interact with the server through HTTP requests. The application state is managed on the frontend using useEffect and useState hooks, with user-authenticated JWT tokens stored in the browser's local storage for persistent authentication.<br/><br/><h4>What is the LifeTracker App?</h4>Everywhere around us is data waiting to be collected and utilized. In recent years, we've seen the rise of applications and services that exist to quantify concepts that were previously hard to capture. FitBit, Apple Health, and Woop are all $1 billion dollar services to offer tracking statistics about how we live our lives. The LifeTracker app will do exactly that - track your life by quantifying your activity.</p>
      </div>
    </section>

    <section className="project-section">
      <div className="project-media">
      <iframe src="https://student-store-ui-cwt4.onrender.com/" frameborder="0" width="100%" height="400" webkitallowfullscreen mozallowfullscreen allowfullscreen  ></iframe>
        <br/>
        <span className="project-button-container">
          <a href="https://github.com/AlejandroIrizarry/site-week2-project2-student-store-starter/tree/main" target="_blank"><button className="project-button">Source Code<span></span><span></span><span></span><span></span></button></a>
          <a href="https://www.loom.com/share/3e23512a3ace460788ea7b198b0f5941" target="_blank"><button className="project-button">Demo<span></span><span></span><span></span><span></span></button></a>
        </span>
      </div>
      <div className="project-info">
        <h3 className="project-title">
<a href="https://student-store-ui-cwt4.onrender.com/" target="_blank">College of CodePath - Student Store</a></h3>
        <h4 className="project-skills"><b>Tools: </b>(React.js, Node.js, Express.js, Heroku API, Render)</h4>
        <p className="project-desc"><b>CodePath Student Store</b> has implemented various features for an enhanced shopping experience, allowing users to expand the shopping cart in the left navigation, increment and decrement product quantities with intuitive '+' and '-' buttons, and automatically remove products when their count reaches zero. The shopping cart provides a detailed table with product information, quantities, subtotal, tax, and total. Users can seamlessly checkout and receive a confirmation receipt. Additionally, introduced a dynamic onChange event in the checkout form to update name and email fields while typing. Integrated a visually engaging CSS animation with a floating logo for added user interaction. Used the Heroku API to fetch products: <a href="https://codepath-store-api.herokuapp.com/store/" target="_blank">https://codepath-store-api.herokuapp.com/store/</a><br/><br/><h4>What is CodePath Student Store?</h4>Selling merchandise in the modern era requires digital solutions. For this project, I was tasked with designing and constructing an online student store for the College of CodePath. The web app consists of a frontend user interface for potential customers to browse available goods and a backend API to handle data management. The API was built with Node and Express, and the UI was built with React.</p>
      </div>
    </section>

    <section className="project-section">
      <div className="project-media">
      <iframe src="https://flixster.onrender.com/" frameborder="0" width="100%" height="400" webkitallowfullscreen mozallowfullscreen allowfullscreen  ></iframe>
        <br/>
        <span className="project-button-container">
          <a href="https://github.com/AlejandroIrizarry/site-week1-project1-flixster-starter" target="_blank"><button className="project-button">Source Code<span></span><span></span><span></span><span></span></button></a>
          <a href="https://www.loom.com/share/df3acad7a3bf452180692bfca19d7a35?sid=9ed6743a-a674-46b2-a22c-d50d6f570b15" target="_blank"><button className="project-button">Demo<span></span><span></span><span></span><span></span></button></a>
        </span>
      </div>
      <div className="project-info">
        <h3 className="project-title"><a href="https://flixster.onrender.com/" target="_blank">Flixster</a></h3>
        <h4 className="project-skills"><b>Tools: </b>(HTML, CSS, JavaScript, JSON, TheMovieDB API, Render)</h4>
        <p className="project-desc"><b>Flixster </b>
        offers users a seamless movie exploration experience by leveraging The Movie Database API. The grid view, identified by the movies-grid ID, displays current movies as a grid of movie cards with the movie-card class. Each card includes essential details such as the movie title (class: movie-title), poster image (class: movie-poster), and votes (class: movie-votes). Users can effortlessly load more movies by clicking the load-more-movies-btn, dynamically expanding the list without refreshing the page. The search functionality is enhanced with a search input (id: search-input), enabling users to query the API by entering text and triggering a search request upon hitting 'Enter.' The search results are presented in a grid view. Additionally, the close-search-btn (id) allows users to exit the search, clear results, and return to the display of current movies. The website prioritizes basic HTML/CSS accessibility features and ensures responsiveness for a seamless user experience across devices.
        <br/><br/><h4>What is Flixster?</h4>
        Flixster is a crafted dynamic website showcasing the latest movies currently playing in theaters, seamlessly integrating the Movie Database API to fetch an up-to-date list of films. Utilizing HTML, CSS, and JavaScript, the website provides an engaging and user-friendly interface for users to explore and stay informed about the latest cinematic releases. The Movie Database API was used to fetch the movies: <a href="https://developer.themoviedb.org/docs/getting-started" target="_blank">https://developer.themoviedb.org/docs/getting-started</a></p>
      </div>
    </section>

  </div>
  )
}
