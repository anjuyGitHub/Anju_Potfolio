import React from "react";

import SectionHeading from "./SectionHeading";

function Education() {
  return (
    <section id="education" className="section">
      <div className="container-fluid portfolio-container px-0">
        <SectionHeading
          n="05"
          label="EDUCATION"
          title={
            <>
              My <span className="accent">academic journey.</span>
            </>
          }
        />

        <div className="row g-3">
          {/* MCA */}

          <div className="col-12 col-lg-6">
            <article className="card h-100">
              <small>2022 — 2024</small>

              <h3>MCA</h3>

              <p>RGPV University</p>

              <span>
                Advanced Algorithms · Web Technologies · DBMS · Software
                Engineering
              </span>
            </article>
          </div>

          {/* BSC */}

          <div className="col-12 col-lg-6">
            <article className="card h-100">
              <small>2019 — 2022</small>

              <h3>B.Sc. Computer Science</h3>

              <p>DAVV University</p>

              <span>
                Programming · Data Structures · Computer Networks · OOP
              </span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
