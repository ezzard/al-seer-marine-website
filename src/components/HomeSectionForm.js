import React from "react";
import ImageSection from "./ImageSection";
import FormSection from "./FormSection";

import imageForm from "../assets/images/image-form.jpg";

function HomeSectionForm() {
  return (
    <div className="home-section-form">
      <div className="split">
        <FormSection number="07" title="Ask" />

        <ImageSection img={imageForm} />
      </div>
    </div>
  );
}

export default HomeSectionForm;
