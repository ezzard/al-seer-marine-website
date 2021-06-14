import React from "react";

import HeroStatic from "../components/HeroStatic";
import SubHero from "../components/SubHero";
import RunContent from "../components/RunContent";

import map1 from "../assets/images/map-1.png";

import "../App.scss";
import Footer from "../components/Footer";

function Explore() {
  return (
    <div className="run">
      <div class="bg-explore">
        <HeroStatic heroText="Explore" />
      </div>
      <div className="sub-hero-viewport">
        <SubHero
          line={<span></span>}
          number="02"
          bigTitle="Explore"
          firstLine="Dreaming of the trip of a lifetime?  Let ASM Yachts take you there."
          blockText="Through ASM Yachts you can experience true serenity aboard some of the world’s most beautiful and decadent vessels.  All of the yachts and superyachts we operate are designed to provide a totally unforgettable adventure, in which the slightest want is effortlessly catered for. Our team are on hand 24/7 to ensure that every second of your trip is tailored to your specific needs.  At ASM Yachts, you know you are getting the best."
        />
      </div>
      <div class="map-container">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d14451.035515710984!2d55.156761622574756!3d25.110022247584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d25.1111762!2d55.159460499999994!5e0!3m2!1sen!2sco!4v1623443541813!5m2!1sen!2sco"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe> */}

        <img src={map1} alt="Dubai's Map" />
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
