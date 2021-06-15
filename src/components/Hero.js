import React from "react";
import { Link } from "react-router-dom";

import arrowDown from "../assets/images/arrow-down.png";
import arrow from "../assets/images/arrow-right.png";
import BackgroundSlider from "react-background-slider";
import image1 from "../assets/images/hero-img-1.jpg";
import image2 from "../assets/images/hero-img-2.jpg";
import image3 from "../assets/images/hero-img-3.jpg";

function Hero(props) {
  return (
    <section className="hero">
      <BackgroundSlider
        images={[image1, image2, image3]}
        duration={6}
        transition={1}
      />
      <div className="container">
        <div className="left-column">
          <h3>{props.heroText}</h3>
          <Link to="/join">
            <a href="" className="primary-cta">
              <span className="button-text">
                <p>Join Us</p>
              </span>
              <img src={arrow} alt="arrow right" />
            </a>
          </Link>
        </div>

        <div className="right-column">
          <a href="" className="secondary-cta">
            <span className="button-text">More</span>
            <img src={arrowDown} alt="arrow dowm" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
