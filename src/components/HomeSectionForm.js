import React from "react";
import ImageSectionForm from "./ImageSectionForm";
import FormSection from "./FormSection";

import imageForm from "../assets/images/image-form.jpg";

function HomeSectionForm() {
    return (
        <div className="home-section-form">
            {/* <div className="split"> */}
            <FormSection number="07" title="Ask" />
            <ImageSectionForm img={imageForm} />
            {/* </div> */}
        </div>
    );
}

export default HomeSectionForm;
