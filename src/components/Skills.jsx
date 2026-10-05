import React from "react";
import SectionHeading from "./SectionHeading";

import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container portfolio-container">
        <SectionHeading
          number="02"
          label="TECHNICAL SKILLS"
          title={
            <>
              My <span className="gradient-text">toolbox.</span>
            </>
          }
          description="Technologies and tools I use to design, build and maintain modern web applications."
        />

        <div className="skills-grid">
          {Object.entries(skills).map(([name, list], index) => (
            <article className="skill-card" key={name}>
              <div className="skill-card-header">
                <span className="skill-number">0{index + 1}</span>

                <span className="skill-icon">{name[0]}</span>
              </div>

              <h3>{name}</h3>

              <div className="skill-list">
                {list.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
