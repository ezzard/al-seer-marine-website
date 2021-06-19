import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

import arrowDown from "../assets/images/arrow-down.png";
import arrow from "../assets/images/arrow-right.png";
import BackgroundSlider from "react-background-slider";
import image1 from "../assets/images/hero-img-1.jpg";
import image2 from "../assets/images/hero-img-2.jpg";
import image3 from "../assets/images/hero-img-3.jpg";
import scroll from "../assets/images/vertical-scroll.png";

function Hero(props) {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: -200,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="hero">
      <BackgroundSlider
        images={[image1, image2, image3]}
        duration={6}
        transition={1}
      />
      <div className="container">
        <div className="left-column">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          >
            A LEADING YACHT &amp; <br /> MARINE COMPANY
          </motion.h3>
          {/* <h3>{props.heroText}</h3> */}
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
        <div className="vertical-scroll">
          <motion.img
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            src={scroll}
            alt="Scroll"
          />
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

export default Hero;
