import React from "react";

function Hero() {
  // Resume ke according professional experience start year
  const experienceStartYear = 2024;

  const currentYear = new Date().getFullYear();

  const yearsOfExperience = currentYear - experienceStartYear;

  return (
    <section id="home" className="hero section">
      <div className="container-fluid portfolio-container px-0">
        <div className="row align-items-center g-5">
          {/* ================= LEFT SIDE ================= */}

          <div className="col-12 col-lg-7">
            <div className="hero-content">
              <p className="hero-eyebrow">HELLO, I'M ANJU KUMARI</p>

              <h1>
                Frontend Developer
                <br />
                <span className="gradient">
                  building scalable
                  <br />
                  digital experiences.
                </span>
              </h1>

              <p className="hero-text">
                Frontend Developer specializing in React.js and Node.js,
                building responsive web applications, REST APIs and
                production-ready digital solutions with clean and maintainable
                code.
              </p>

              <div className="hero-meta">
                <div className="hero-meta-item">
                  <strong>{yearsOfExperience}+</strong>
                  <span>Years Experience</span>
                </div>

                <div className="hero-meta-divider"></div>

                <div className="hero-meta-item">
                  <strong>React + Node</strong>
                  <span>Core Stack</span>
                </div>

                <div className="hero-meta-divider"></div>

                <div className="hero-meta-item">
                  <strong>Full Stack</strong>
                  <span>Development</span>
                </div>
              </div>

              <div className="actions">
                <a className="btn primary" href="#projects">
                  View My Work
                  <span>↗</span>
                </a>

                <a className="btn" href="/Anju_Kumari_Resume.pdf" download>
                  Download Resume
                  <span>↓</span>
                </a>

                <a className="btn" href="#contact">
                  Let's Connect
                </a>
              </div>

              <div className="hero-technologies">
                <span className="tech-label">CORE TECHNOLOGIES</span>

                <div className="tags">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>JavaScript</span>
                  <span>REST APIs</span>
                  <span>TypeScript</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="col-12 col-lg-5">
            <div className="hero-visual">
              <div className="code-card">
                <div className="bar">
                  <span className="window-dots">● ● ●</span>

                  <span>anju.js</span>
                </div>

                <pre>
                  {`const developer = {
  name: "Anju Kumari",

  role: "Frontend Developer",

  experience: "${yearsOfExperience}+ years",

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

                <div className="availability">
                  <span className="status-dot"></span>
                  Currently working as Full Stack Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
