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
          {/* LEFT SIDE */}
          <div className="col-12 col-lg-7">
            <p className="eyebrow">HELLO, I'M ANJU KUMARI</p>

            <h1>
              Frontend
              <br />
              Developer
              <br />
              <span className="gradient">
                building
                <br />
                scalable digital
                <br />
                experiences.
              </span>
            </h1>

            <p className="hero-text">
              Frontend Developer specializing in React.js and Node.js, building
              responsive web applications, REST APIs and production-ready
              digital solutions with clean and maintainable code.
            </p>

            {/* EXPERIENCE INFO */}
            <div className="hero-meta">
              <div className="hero-meta-item">
                <strong>{yearsOfExperience}+</strong>
                <span>Years Experience</span>
              </div>

              <div className="hero-meta-item">
                <strong>React + Node</strong>
                <span>Core Stack</span>
              </div>

              <div className="hero-meta-item">
                <strong>Full Stack</strong>
                <span>Development</span>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="actions">
              <a className="btn primary" href="#projects">
                View My Work ↗
              </a>

              <a className="btn" href="/Anju-Kumari-Resume.pdf" download>
                Download Resume ↓
              </a>

              <a className="btn" href="#contact">
                Let's Connect
              </a>
            </div>

            {/* TECHNOLOGY TAGS */}
            <div className="tags">
              <span>React.js</span>
              <span>Node.js</span>
              <span>JavaScript</span>
              <span>REST APIs</span>
              <span>TypeScript</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-12 col-lg-5">
            <div className="code-card">
              <div className="bar">● ● ● &nbsp; anju.js</div>

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

              <small>● Currently working as Full Stack Developer</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
