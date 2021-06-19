import React from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import arrowDark from "../assets/images/arrow-right-dark.svg";

function TextSection(props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: -40,
        opacity: 0,
      });
    }
  }, [inView]);

  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation2.start({
        scaleX: 1,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      });
    }
    if (!inView) {
      animation2.start({
        scaleX: 0,
        opacity: 0,
      });
    }
  }, [inView]);

  const animation3 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation3.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
          delay: 0.3,
        },
      });
    }
    if (!inView) {
      animation3.start({
        y: -40,
        opacity: 0,
      });
    }
  }, [inView]);

  const animation4 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation4.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6,
        },
      });
    }
    if (!inView) {
      animation4.start({
        y: -40,
        opacity: 0,
      });
    }
  }, [inView]);

  const animation5 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation5.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6,
        },
      });
    }
    if (!inView) {
      animation5.start({
        x: -240,
        opacity: 0,
      });
    }
  }, [inView]);

  console.log(props);
  return (
    <div ref={ref} className="text-section">
      <div className="text-section-container">
        <div className="number-line">
          <motion.p animate={animation} className="number-section">
            {props.number}
          </motion.p>
          <motion.span animate={animation2} className="line"></motion.span>
        </div>
        <motion.h1 animate={animation3} className="big-title">
          {props.title}
        </motion.h1>
        <motion.p animate={animation4} className="description">
          {props.description}
        </motion.p>

        <Link to={props.link} className="normal-cta">
          {/* <a href="" className="normal-cta"> */}
          <motion.span animate={animation} className="button-text">
            Learn More
          </motion.span>
          <motion.img animate={animation5} src={arrowDark} alt="arrow right" />
          {/* </a> */}
        </Link>
      </div>
    </div>
  );
}

export default TextSection;
