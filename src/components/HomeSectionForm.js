import React from "react";
import ImageSection from "./ImageSection";
import TextSection from "./TextSection";

import imageForm from "../assets/images/image-form.jpg";

function HomeSectionForm() {
  return (
    <div className="home-section">
      <div className="split">
        <TextSection
          number="01"
          title="Ask"
          description="Discover our 360° approach to luxury yacht management"
        />
        <ImageSection img={imageForm} />
      </div>
    </div>
  );
}

export default HomeSectionForm;
