import React from "react";

import SectionHeading from "./SectionHeading";

import { experience } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-fluid portfolio-container px-0">
        <SectionHeading
          n="03"
          label="EXPERIENCE"
          title={
            <>
              Where I've <span className="accent">worked.</span>
            </>
          }
        />

        <div className="timeline">
          {experience.map((job) => (
            <article className="job" key={job.company}>
              <div className="dot"></div>

              <div className="job-period">
                <time>{job.period}</time>
              </div>

              <div>
                <h3>{job.role}</h3>

                <h4>{job.company}</h4>

                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
