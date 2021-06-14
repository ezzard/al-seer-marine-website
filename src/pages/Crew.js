import React from "react";

import HeroStatic from "../components/HeroStatic";
import SubHero from "../components/SubHero";
import BackgroundVideo from "../components/BackgroundVideo";

import video from "../assets/videos/210315_ASM_Edit_V4.mp4";

import "../App.scss";
import Footer from "../components/Footer";

function Crew() {
  return (
    <div className="crew">
      {/* <div class="bg-crew">
        <BackgroundVideo videoSource="../assets/videos/210315_ASM_Edit_V4.mp4" />
        <HeroStatic heroText="Create" />
      </div>
      <div className="bg-sub-hero">
        <div className="sub-hero-viewport">
          <SubHero
            number="05"
            line={<span></span>}
            bigTitle="Crew"
            firstLine="Dream, Build, Support.  It might sound a little like the ABCs, but this simple, three step ethos is why ASM Yachts has cultivated an award-winning reputation for bespoke yacht craftsmanship."
            blockText="Through ASM Yachts you can experience true serenity aboard some of the world’s most beautiful and decadent vessels.  All of the yachts and superyachts we operate are designed to provide a totally unforgettable adventure, in which the slightest want is effortlessly catered for. Our team are on hand 24/7 to ensure that every second of your trip is tailored to your specific needs.  At ASM Yachts, you know you are getting the best."
          />
        </div>
      </div>
      <div className="bg-neutral">
        <SubHero
          mediumTitle="You bring the passion, we’ll do the rest "
          blockText="At ASM Yachts we have the expertise and the imagination to help you implement the right look and feel for your existing yacht.  From choosing a designer to monitoring recondition to negotiating contracts, your dedicated account manager will handle all of the repairs, maintenance, renovation, servicing, remodelling and reconstruction that are necessary to get your yacht to where you want it.  Our vast network of suppliers and partners allows our team to deliver exceptional, tailored results that are cost-effective and always on-schedule."
          bold={<br />}
          subText="Remember, at ASM Yachts, we have you covered, from bow to stern.  "
        />
      </div>
      <div className="bg-white">
        <SubHero
          mediumTitle="Get ready for limitless possibilities "
          blockText="At ASM Yachts we have the expertise and the imagination to help you implement the right look and feel for your existing yacht.  From choosing a designer to monitoring recondition to negotiating contracts, your dedicated account manager will handle all of the repairs, maintenance, renovation, servicing, remodelling and reconstruction that are necessary to get your yacht to where you want it.  Our vast network of suppliers and partners allows our team to deliver exceptional, tailored results that are cost-effective and always on-schedule."
          bold={<br />}
          subText="Remember, at ASM Yachts, we have you covered, from bow to stern.  "
        />
      </div> */}
      <div class="v-header header-container">
        <div class="fullscreen-video-wrap">
          <video src={video} autoplay="true" loop="true" muted></video>
        </div>
        <div class="header-overlay"></div>
      </div>

      <div className="bg-sub-hero">
        <div className="sub-hero-viewport">
          <SubHero
            number="05"
            line={<span></span>}
            bigTitle="Crew"
            firstLine="Dream, Build, Support.  It might sound a little like the ABCs, but this simple, three step ethos is why ASM Yachts has cultivated an award-winning reputation for bespoke yacht craftsmanship."
            blockText="Through ASM Yachts you can experience true serenity aboard some of the world’s most beautiful and decadent vessels.  All of the yachts and superyachts we operate are designed to provide a totally unforgettable adventure, in which the slightest want is effortlessly catered for. Our team are on hand 24/7 to ensure that every second of your trip is tailored to your specific needs.  At ASM Yachts, you know you are getting the best."
          />
        </div>
      </div>

      <div className="bg-neutral">
        <SubHero
          mediumTitle="You bring the passion, we’ll do the rest "
          blockText="At ASM Yachts we have the expertise and the imagination to help you implement the right look and feel for your existing yacht.  From choosing a designer to monitoring recondition to negotiating contracts, your dedicated account manager will handle all of the repairs, maintenance, renovation, servicing, remodelling and reconstruction that are necessary to get your yacht to where you want it.  Our vast network of suppliers and partners allows our team to deliver exceptional, tailored results that are cost-effective and always on-schedule."
          bold={<br />}
          subText="Remember, at ASM Yachts, we have you covered, from bow to stern.  "
        />
      </div>
      <div className="bg-white">
        <SubHero
          mediumTitle="Get ready for limitless possibilities "
          blockText="At ASM Yachts we have the expertise and the imagination to help you implement the right look and feel for your existing yacht.  From choosing a designer to monitoring recondition to negotiating contracts, your dedicated account manager will handle all of the repairs, maintenance, renovation, servicing, remodelling and reconstruction that are necessary to get your yacht to where you want it.  Our vast network of suppliers and partners allows our team to deliver exceptional, tailored results that are cost-effective and always on-schedule."
          bold={<br />}
          subText="Remember, at ASM Yachts, we have you covered, from bow to stern.  "
        />
      </div>
      <Footer />
    </div>
  );
}

export default Crew;
