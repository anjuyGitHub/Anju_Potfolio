import React from "react";

import SectionHeading from "./SectionHeading";

import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="section section-dark">
      <div className="container-fluid portfolio-container px-0">
        <SectionHeading
          n="02"
          label="TECHNICAL SKILLS"
          title={
            <>
              My <span className="accent">toolbox.</span>
            </>
          }
        />

        <div className="row g-3">
          {Object.entries(skills).map(([name, list]) => (
            <div className="col-12 col-sm-6 col-lg-3" key={name}>
              <article className="card h-100">
                <i>{name[0]}</i>

                <h3>{name}</h3>

                <div className="tags">
                  {list.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
