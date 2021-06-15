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
            subtitle="Meet our VIP Crew"
            firstLine={
              <span>
                Superyachts need super crews.{" "}
                <strong>That is where you come in.</strong>{" "}
              </span>
            }
            blockText="Yachting is one of the most exciting and dynamic industries in the world.  Joining the crew of a superyacht introduces you to a world of adventure, travel and friendship.  At ASM Yachts we provide you with the experience and training to work on some of the world’s most beautiful vessels in some of the world’s most amazing places.  "
          />
        </div>
      </div>

      <div className="bg-neutral">
        <SubHero
          tallerTitle="You bring the passion, we’ll do the rest "
          blockText={
            <span className="blue-text">
              At ASM Yachts we are looking for talented, dedicated individuals
              who know how to go the extra mile. Whatever your level of
              experience, we can provide the right training and certifications
              to get you on the water and into a job that is fulfilling and
              rewarding. Our Crew Management Division will help you find the
              right position, coordinate your training and match you with the
              perfect crew team. Once you are on board, they take care of all
              the nitty gritty including administration, HR &amp; payroll
              services, insurance and transport.
            </span>
          }
        />
      </div>
      <div className="bg-white">
        <SubHero
          tallerTitle="Get ready for limitless possibilities "
          blockText={
            <span className="blue-text">
              We are extremely proud of the diverse team at ASM Yachts, spanning
              a variety of backgrounds and over 47 different nationalities. We
              believe in investing our staff at every level from training to
              benefits to promotional opportunities. Our entire team knows that
              they have the support and guidance they need to meet their
              potential and go the extra mile for our guests. Ultimately, when
              you join ASM Yachts, you are joining a family, destined for the
              extraordinary.{" "}
            </span>
          }
        />
      </div>
      <div className="footer-navigation-crew">
        <div className="button-description">
          <p>
            If you want to find out more about whether you have what it takes to
            join our super crew and how to apply, visit our careers page
          </p>
        </div>
        <div className="vl"></div>
        <div className="button-description">
          <a href="/own">OWN</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Crew;
