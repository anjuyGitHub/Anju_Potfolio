import React from "react";

function SectionHeading({ number, label, title, description }) {
  return (
    <div className="section-heading">
      <div className="section-number">{number}</div>

      <div className="section-heading-content">
        <span className="section-kicker">{label}</span>

        <h2>{title}</h2>

        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default SectionHeading;
