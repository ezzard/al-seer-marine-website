import React from "react";

function RunText(props) {
  return (
    <details>
      <summary>{props.runTitle}</summary>
      <div className="drop-content">
        <p>{props.firstLine}</p>
        <p>{props.runText}</p>
      </div>
    </details>
  );
}

export default RunText;
