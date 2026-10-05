import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  const experienceStartYear = 2024;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - experienceStartYear;

  return (
    <section id="home" className="hero">
      <div className="hero-grid"></div>

      <div className="container portfolio-container">
        <div className="hero-layout">
          {/* LEFT */}

          <div className="hero-content">
            <div className="hero-intro">
              <span className="hero-status-dot"></span>

              <span>FULL STACK DEVELOPER</span>
            </div>

            <p className="hero-eyebrow">HELLO, I'M ANJU KUMARI</p>

            <h1>
              Building
              <br />
              <span className="gradient-text">scalable digital</span>
              <br />
              experiences.
            </h1>

            <p className="hero-description">
              Frontend Developer specializing in React.js and Node.js, building
              responsive web applications, REST APIs and production-ready
              digital solutions with clean and maintainable code.
            </p>

            {/* STATS */}

            <div className="hero-stats">
              <div className="hero-stat">
                <strong>{yearsOfExperience}+</strong>

                <span>Years Experience</span>
              </div>

              <div className="hero-stat">
                <strong>React + Node</strong>

                <span>Core Stack</span>
              </div>

              <div className="hero-stat">
                <strong>Full Stack</strong>

                <span>Development</span>
              </div>
            </div>

            {/* ACTIONS */}

            <div className="hero-actions">
              <Link to="/projects" className="button button-primary">
                View My Work
                <span>↗</span>
              </Link>

              <a href="/Anju_Kumari_Resume.pdf" download className="button">
                Download Resume
                <span>↓</span>
              </a>

              <a href="#contact" className="button">
                Let's Connect
              </a>
            </div>

            {/* TECHNOLOGIES */}

            <div className="hero-technologies">
              <span>CORE TECHNOLOGIES</span>

              <div>
                <b>React.js</b>
                <b>Node.js</b>
                <b>JavaScript</b>
                <b>REST APIs</b>
                <b>TypeScript</b>
              </div>
            </div>
          </div>

          {/* RIGHT CODE CARD */}

          <div className="hero-visual">
            <div className="code-card">
              <div className="code-card-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span>anju.js</span>

                <span className="code-status">● online</span>
              </div>

              <pre>
                {`const developer = {
  name: "Anju Kumari",
  role: "Full Stack Developer",

  stack: [
    "React.js",
    "Node.js",
    "JavaScript"
  ],

  focus: [
    "Clean UI",
    "REST APIs",
    "Scalable Apps"
  ]
};`}
              </pre>

              <div className="code-card-footer">
                <span className="status-dot"></span>

                <span>Currently working as Full Stack Developer</span>
              </div>
            </div>

            {/* DECORATIVE ELEMENT */}

            <div className="floating-badge">
              <span>✦</span>
              Clean Code
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line"></span>
      </div>
    </section>
  );
}

export default Hero;
