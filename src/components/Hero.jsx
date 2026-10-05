import React from "react";

function Hero() {
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
                useful digital
                <br />
                experiences.
              </span>
            </h1>

            <p className="hero-text">
              I build responsive web applications with React.js and Node.js,
              focusing on clean UI, reliable APIs and production-ready
              solutions.
            </p>

            <div className="actions">
              <a className="btn primary" href="#projects">
                View My Work ↗
              </a>

              <a className="btn" href="#contact">
                Let's Connect
              </a>
            </div>

            <div className="tags">
              <span>React.js</span>
              <span>Node.js</span>
              <span>JavaScript</span>
              <span>REST APIs</span>
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
  stack: ["React", "Node.js"],
  mindset: "Build • Learn • Improve"
};`}
              </pre>

              <small>● available for opportunities</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
