import React from "react";

function RunText(props) {
  return (
    <div className="run-text-content">
      <h4 className="run-title">{props.runTitle}</h4>
      <p className="firstLine">{props.firstLine}</p>
      <>{props.br}</>
      <p className="run-text">{props.runText}</p>
    </div>
  );
}

export default RunText;
