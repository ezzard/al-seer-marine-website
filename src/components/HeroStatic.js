import React from "react";

import arrowDown from "../assets/images/arrow-down.png";
import arrow from "../assets/images/arrow-right.png";

function HeroStatic(props) {
  return (
    <section className="hero-static">
      <div className="container">
        <div className="left-column">
          <h3>{props.heroText}</h3>
          <a href="" className="primary-cta">
            <span className="button-text">
              <p>Join Us</p>
            </span>
            <img src={arrow} alt="arrow right" />
          </a>
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

export default HeroStatic;
