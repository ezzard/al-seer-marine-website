import React from "react";

import Form from "./Form";

function TextSection(props) {
  return (
    <div className="form-section">
      <div className="form-section-container">
        <div className="number-line">
          <p className="number-section">{props.number}</p>
          <span className="line"></span>
        </div>
        <h1 className="big-title">{props.title}</h1>
        <Form />
      </div>
    </div>
  );
}

export default TextSection;
