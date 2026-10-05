import React from "react";

function SectionHeading({ n, label, title }) {
  return (
    <div className="heading">
      <span>{n}</span>

      <div>
        <p className="eyebrow">{label}</p>

        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default SectionHeading;
