import React from "react";

import SectionHeading from "./SectionHeading";

import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="section section-dark">
      <div className="container-fluid portfolio-container px-0">
        <SectionHeading
          n="04"
          label="KEY PROJECTS"
          title={
            <>
              Things I've <span className="accent">built.</span>
            </>
          }
        />

        <div className="row g-3">
          {projects.map((project) => (
            <div className="col-12 col-lg-6" key={project.title}>
              <article
                className={
                  project.featured ? "project featured h-100" : "project h-100"
                }
              >
                <div className="project-top">
                  <span>{project.n}</span>

                  <span>↗</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <div className="tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
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

export default Projects;
