import React from "react";
import { useEffect, useRef, useState } from "react";
import ParallaxMessage from "./ParallaxMessage";
import ParallaxTitle from "./ParallaxTitle";
import ParallaxFinal from "./ParallaxFinal";

function Parallax() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <div class="parallax-wrapper">
        <div
          className="bg-sea"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
        <div
          className="bg-boat"
          style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
        />
        <ParallaxMessage message="Calling all Super Crew!" />
        <ParallaxTitle title="ARE YOU:" />
        <ParallaxTitle title="PASSIONATE" />
        <ParallaxTitle title="ADVENTUROUS" />
        <ParallaxTitle title="HARD-WORKING" />
        <ParallaxTitle title="FUN-LOVING" />
        <ParallaxTitle title="CREATIVE" />
        <ParallaxFinal />
      </div>
    </div>
  );
}

export default Parallax;
