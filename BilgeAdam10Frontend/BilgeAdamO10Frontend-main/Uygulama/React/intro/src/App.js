import React from "react";

import Header from "./components/Header";
import WhiteSection from "./components/WhiteSection";

import avatar from "./cem.jpeg";
import "./App.css";

function App() {
  const myList = ["Home", "About", "Skills", "Projects", "Contact"];
  const aboutMe = [
    "About Me",
    "Background",
    `I have been working in the web development industry for over 5 years. During this time, I have gained extensive experience in front-end development and responsive web design.`,
    "Education",
    `I graduated with a degree in Computer Science from XYZ University. My coursework included web development, software engineering, and database management.`,
  ];

  const projects = [
    "Projects",
    "Project 1: E-commerce Website",
    `This project involved creating a fully functional e-commerce
    website from scratch. I implemented features such as product
    listing, shopping cart, user authentication, and payment
    integration. The website was built using React and Redux for state
    management.`,
    "Project 2: Portfolio Website",
    `I designed and developed a personal portfolio website to showcase
    my skills and projects. The website features a clean and modern
    design, and it is optimized for performance and SEO. I used HTML,
    CSS, and JavaScript for the frontend.`,
  ];

  return (
    <div className="App">
      <Header className="Header" myList={myList} />
      <main>
        <section id="home">
          <h1>Welcome to My Website</h1>
          <p>
            Hello, I'm cem, a web developer. Passionate about creating awesome
            websites.
          </p>

          <img src={avatar} alt="Profile" />
          <div className="icons">
            <a href="#" title="Twitter">
              <i className="fa-brands fa-square-twitter fa-xl"></i>
            </a>
            <a href="#" title="Instagram">
              <i className="fa-brands fa-square-instagram fa-xl"></i>
            </a>
            <a href="#" title="LinkedIn">
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
            <a href="#" title="GitHub">
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <a href="#" title="Facebook">
              <i className="fa-brands fa-facebook fa-xl"></i>
            </a>
          </div>
        </section>

        <WhiteSection className="about" myList={aboutMe} />

        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>
              <h4>HTML</h4>
              <p>
                I am proficient in writing clean and semantic HTML code. I have
                experience in using HTML5 features and understanding the
                importance of accessibility.
              </p>
            </li>
            <li>
              <h4>CSS</h4>
              <p>
                I have a strong grasp of CSS and its various properties. I am
                skilled in creating responsive layouts, customizing styles, and
                using CSS frameworks like Bootstrap.
              </p>
            </li>
            <li>
              <h4>JavaScript</h4>
              <p>
                I am experienced in JavaScript and have worked on several
                interactive web projects. I am familiar with modern frameworks
                like React and Angular.
              </p>
            </li>
            <li>
              <h4>Responsive Design</h4>
              <p>
                I have a good understanding of responsive design principles and
                have developed mobile-friendly websites that provide a seamless
                user experience across different devices and screen sizes.
              </p>
            </li>
          </ul>
        </section>

        <WhiteSection className="projects" myList={projects} />

        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <div>
              <label for="userName">Name:</label>
              <input id="userName" name="userName" type="text" required></input>
            </div>
            <div>
              <label for="email">Email:</label>
              <input id="email" name="email" type="email" required></input>
            </div>
            <div>
              <label for="message">Message:</label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="5"
                required
              ></textarea>
            </div>
            <div>
              <input type="submit" value="Send"></input>
            </div>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Cem Mert Şimşek. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
