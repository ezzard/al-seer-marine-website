import React from "react";

import HeroStatic from "../components/HeroStatic";
import SubHero from "../components/SubHero";

import map2 from "../assets/images/map-2.png";

import "../App.scss";
import Footer from "../components/Footer";
import Form from "../components/Form";

function Ask() {
  return (
    <div className="ask">
      <div class="bg-ask">
        <HeroStatic heroText="Ask" />
      </div>
      <div className="sub-hero-ask">
        <div className="sub-hero">
          <div className="sub-hero-container">
            <div className="number-line">
              <p className="number-section">07</p>
              <span className="line"></span>
            </div>
            <div className="split">
              <div className="big-title">
                <h1>Ask</h1>
              </div>
              <div>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map-container-ask">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d14451.035515710984!2d55.156761622574756!3d25.110022247584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d25.1111762!2d55.159460499999994!5e0!3m2!1sen!2sco!4v1623443541813!5m2!1sen!2sco"
          width="85%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
       */}
        <img src={map2} alt="Dubai's Map" />
      </div>
      <Footer />
    </div>
  );
}

export default Ask;
