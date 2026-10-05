import React from "react";
import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section id="about" className="section">
      <div className="container-fluid portfolio-container px-0">
        <SectionHeading
          n="01"
          label="ABOUT ME"
          title={
            <>
              Turning ideas into{" "}
              <span className="accent">working products.</span>
            </>
          }
        />

        <div className="row g-5 align-items-center">
          {/* ABOUT TEXT */}

          <div className="col-12 col-lg-7">
            <p className="large">
              I’m a Frontend Developer with hands-on experience building
              scalable web applications using React.js and Node.js.
            </p>

            <p>
              My experience includes enterprise integrations, REST/XML APIs,
              reusable React components, authentication, database-backed
              applications and performance optimization.
            </p>
          </div>

          {/* STATS */}

          <div className="col-12 col-lg-5">
            <div className="stats">
              <div>
                <b>6+</b>
                <span>Months hands-on experience</span>
              </div>

              <div>
                <b>1,000+</b>
                <span>Internal users served</span>
              </div>

              <div>
                <b>10+</b>
                <span>Responsive pages built</span>
              </div>

              <div>
                <b>99%</b>
                <span>Application uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
