import React from "react";
import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container portfolio-container">
        <SectionHeading
          number="01"
          label="ABOUT ME"
          title={
            <>
              Turning ideas into{" "}
              <span className="gradient-text">working products.</span>
            </>
          }
          description="A frontend-focused developer with full-stack experience and a strong interest in building practical digital products."
        />

        <div className="about-grid">
          {/* LEFT */}

          <div className="about-content">
            <div className="about-intro">
              <span className="about-line"></span>

              <p>
                I’m a <strong>Frontend Developer</strong> with hands-on
                experience building scalable web applications using{" "}
                <span className="accent">React.js</span> and{" "}
                <span className="accent">Node.js.</span>
              </p>
            </div>

            <p className="about-description">
              My experience includes enterprise integrations, REST/XML APIs,
              reusable React components, authentication, database-backed
              applications and performance optimization.
            </p>

            <p className="about-description">
              I focus on creating clean, responsive and maintainable
              applications with strong attention to user experience, reusable
              architecture and reliable backend integrations.
            </p>

            <div className="about-highlights">
              <div className="about-highlight">
                <span>01</span>

                <div>
                  <strong>Clean Development</strong>

                  <p>Reusable and maintainable code</p>
                </div>
              </div>

              <div className="about-highlight">
                <span>02</span>

                <div>
                  <strong>Problem Solving</strong>

                  <p>Practical solutions for real problems</p>
                </div>
              </div>

              <div className="about-highlight">
                <span>03</span>

                <div>
                  <strong>Full Stack Thinking</strong>

                  <p>Frontend, APIs and database integration</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="about-stats">
            <div className="mini-heading">
              <span>MY EXPERIENCE</span>
              <i></i>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <strong>6+</strong>
                <span>Months hands-on experience</span>
              </div>

              <div className="stat-card">
                <strong>1,000+</strong>
                <span>Internal users served</span>
              </div>

              <div className="stat-card">
                <strong>10+</strong>
                <span>Responsive pages built</span>
              </div>

              <div className="stat-card">
                <strong>99%</strong>
                <span>Application uptime</span>
              </div>
            </div>

            <div className="stats-note">
              <span className="status-dot"></span>

              <span>Focused on reliable and user-friendly applications.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
