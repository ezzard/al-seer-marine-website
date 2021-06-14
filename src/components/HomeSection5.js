import React from "react";
import ImageSection from "./ImageSection";
import TextSection from "./TextSection";

import image6 from "../assets/images/image-6.jpg";

function HomeSection5() {
  return (
    <div className="home-section">
      <div className="split">
        <ImageSection img={image6} />
        <TextSection
          number="06"
          title="See"
          description="Uncover the ASM Yachts Story"
        />
      </div>
    </div>
  );
}

export default HomeSection5;
