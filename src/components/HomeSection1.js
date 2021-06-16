import React from "react";
import ImageSection from "./ImageSection";
import TextSection from "./TextSection";

import image2 from "../assets/images/image2.jpg";

function HomeSection1() {
    return (
        <div className="home-section">
            <div className="split">
                <ImageSection img={image2} />
                <TextSection
                    number="02"
                    title="Explore"
                    description="Experience the trip of a lifetime on the ocean waves"
                    link="/explore"
                />
            </div>
        </div>
    );
}

export default HomeSection1;
