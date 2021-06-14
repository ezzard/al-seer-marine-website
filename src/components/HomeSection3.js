import React from "react";
import ImageSection from "./ImageSection";
import TextSection from "./TextSection";

import image4 from "../assets/images/image-4.jpg";

function HomeSection3() {
  return (
    <div className="home-section">
      <div className="split">
        <ImageSection img={image4} />
        <TextSection
          number="04"
          title="Own"
          description="Work with our expert Yacht Brokerage Team"
        />
      </div>
    </div>
  );
}

export default HomeSection3;
