import React from "react";
import SectionHeading from "./SectionHeading";

import { experience } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container portfolio-container">
        <SectionHeading
          number="03"
          label="EXPERIENCE"
          title={
            <>
              Where I've <span className="gradient-text">worked.</span>
            </>
          }
          description="Professional experience across frontend development, full-stack applications and enterprise integrations."
        />

        <div className="experience-timeline">
          {experience.map((job, index) => (
            <article
              className="experience-item"
              key={`${job.company}-${index}`}
            >
              <div className="experience-marker">
                <span></span>
              </div>

              <div className="experience-period">{job.period}</div>

              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3>{job.role}</h3>
                    <h4>{job.company}</h4>
                  </div>

                  <span className="experience-index">0{index + 1}</span>
                </div>

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
