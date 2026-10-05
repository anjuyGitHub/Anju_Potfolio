import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <span className="footer-logo">
            Anju<span>.</span>
          </span>

          <p>Frontend Developer · React.js · Node.js</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>

          <Link to="/projects">Projects</Link>

          <a href="/#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Anju Kumari
        </div>
      </div>
    </footer>
  );
}

export default Footer;
