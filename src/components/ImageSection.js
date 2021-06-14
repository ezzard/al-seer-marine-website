import React from "react";

function ImageSection(props) {
  return (
    <div className="image-section">
      <img src={props.img} alt="Yacht interior" />
    </div>
  );
}

export default ImageSection;
