import React from "react";
import ImageSection from "./ImageSection";
import TextSection from "./TextSection";

import image3 from "../assets/images/image-3.jpg";

function HomeSection2() {
    return (
        <div className="home-section">
            <div className="split">
                <TextSection
                    number="03"
                    title="Create"
                    description="Fuel your dreams with our bespoke Yacht Building division"
                    link="/create"
                />
                <ImageSection img={image3} />
            </div>
        </div>
    );
}

export default HomeSection2;
