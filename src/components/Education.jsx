import React from "react";
import SectionHeading from "./SectionHeading";

const education = [
  {
    year: "2022 — 2024",
    degree: "MCA",
    university: "RGPV University",
    subjects:
      "Advanced Algorithms · Web Technologies · DBMS · Software Engineering",
  },
  {
    year: "2019 — 2022",
    degree: "B.Sc. Computer Science",
    university: "DAVV University",
    subjects: "Programming · Data Structures · Computer Networks · OOP",
  },
];

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container portfolio-container">
        <SectionHeading
          number="05"
          label="EDUCATION"
          title={
            <>
              My <span className="gradient-text">academic journey.</span>
            </>
          }
          description="The academic foundation behind my software development journey."
        />

        <div className="education-grid">
          {education.map((item, index) => (
            <article className="education-card" key={item.degree}>
              <div className="education-top">
                <span>{item.year}</span>

                <span>0{index + 1}</span>
              </div>

              <h3>{item.degree}</h3>

              <h4>{item.university}</h4>

              <p>{item.subjects}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
