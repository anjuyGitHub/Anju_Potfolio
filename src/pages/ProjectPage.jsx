import React from "react";
import { Link } from "react-router-dom";

import { projects } from "../data/portfolioData";

function ProjectsPage() {
  return (
    <section className="projects-page">
      <div className="container portfolio-container">
        {/* PAGE HEADER */}

        <div className="projects-page-header">
          <div>
            <span className="section-kicker">04 — PROJECTS</span>

            <h1>
              Things I've <span className="gradient-text">built.</span>
            </h1>

            <p>
              A collection of projects covering frontend development, backend
              APIs, database integration and enterprise automation.
            </p>
          </div>

          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>

        {/* PROJECT COUNT */}

        <div className="projects-overview">
          <div>
            <strong>{projects.length}+</strong>
            <span>Selected Projects</span>
          </div>

          <div>
            <strong>React</strong>
            <span>Frontend</span>
          </div>

          <div>
            <strong>Node</strong>
            <span>Backend</span>
          </div>

          <div>
            <strong>REST</strong>
            <span>API Integration</span>
          </div>
        </div>

        {/* PROJECT GRID */}

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${
                project.featured ? "project-card-featured" : ""
              }`}
              key={project.title}
            >
              <div className="project-number">{project.n}</div>

              <div className="project-card-top">
                <span className="project-type">{project.type}</span>

                <span className="project-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h2>{project.title}</h2>

              <p>{project.desc}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-card-footer">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                ) : (
                  <span className="project-placeholder">Private Project</span>
                )}

                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>
                ) : (
                  <span className="project-placeholder">Enterprise</span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM CTA */}

        <div className="projects-bottom-cta">
          <span className="section-kicker">HAVE A PROJECT IN MIND?</span>

          <h2>
            Let's build something <span className="gradient-text">useful.</span>
          </h2>

          <Link to="/#contact" className="button button-primary">
            Let's Connect →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
