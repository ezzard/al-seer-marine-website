import React from "react";
import ImageSection from "./ImageSection";
import TextSection from "./TextSection";

import image5 from "../assets/images/image-5.jpg";

function HomeSection4() {
  return (
    <div className="home-section">
      <div className="split">
        <TextSection number="05" title="Join" description="Meet our VIP Crew" />
        <ImageSection img={image5} />
      </div>
    </div>
  );
}

export default HomeSection4;
