import React from "react";
import ImageSection from "./ImageSection";
import TextSection from "./TextSection";

import image1 from "../assets/images/image-1.jpg";

function HomeSection() {
    return (
        <div className="home-section">
            <div className="split">
                <TextSection
                    number="01"
                    title="Run"
                    description="Discover our 360° approach to luxury yacht management"
                    link="/run"
                />
                <ImageSection img={image1} />
            </div>
        </div>
    );
}

export default HomeSection;
