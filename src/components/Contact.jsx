import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid"></div>

      <div className="container contact-container">
        <span className="section-kicker">06 — CONTACT</span>

        <h2>
          Let's build something <span className="gradient-text">great.</span>
        </h2>

        <p>
          I'm open to frontend and full-stack opportunities where I can
          contribute, learn and grow.
        </p>

        <a className="button button-dark" href="mailto:your-email@example.com">
          Get In Touch
          <span>↗</span>
        </a>

        <div className="contact-links">
          <a
            href="https://github.com/anjuyGitHub/Anju_Potfolio"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>

          <a href="mailto:your-email@example.com">Email ↗</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
