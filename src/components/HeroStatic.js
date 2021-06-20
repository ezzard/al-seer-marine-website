import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import arrowDown from "../assets/images/arrow-down.png";
import arrow from "../assets/images/arrow-right.png";

function HeroStatic(props) {
  return (
    <section className="hero-static">
      <div className="container">
        <div className="left-column">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          >
            {props.heroText}
          </motion.h3>
          <Link to="/join">
            <motion.a
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              href=""
              className="primary-cta"
            >
              <span className="button-text">
                <p>Join Us</p>
              </span>
              <img src={arrow} alt="arrow right" />
            </motion.a>
          </Link>
        </div>

        <div className="right-column">
          <a href="" className="secondary-cta">
            <motion.span
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="button-text"
            >
              More
            </motion.span>
            <motion.img
              initial={{ opacity: 0, y: -250 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              src={arrowDown}
              alt="arrow dowm"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroStatic;
