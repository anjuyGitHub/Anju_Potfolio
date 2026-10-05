import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div>
        <p className="eyebrow">06 — CONTACT</p>

        <h2>
          Let's build something <span className="gradient">great.</span>
        </h2>

        <p>
          I'm open to frontend and full-stack opportunities where I can
          contribute, learn and grow.
        </p>

        <a className="btn primary" href="mailto:your-email@example.com">
          Get In Touch ↗
        </a>

        <div className="links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href="mailto:your-email@example.com">Email</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
