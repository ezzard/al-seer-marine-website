import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import "../App.scss";

function SubHero(props) {
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
          delay: 0.7,
        },
      });
    }
    if (!inView) {
      animation2.start({
        scaleX: 0,
        originX: 0,
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
        opacity: 1,
        transition: {
          duration: 0.9,
          delay: 0.8,
        },
      });
    }
    if (!inView) {
      animation5.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div ref={ref} id="subhero" className="sub-hero">
      <div className="sub-hero-container">
        <div className="number-line">
          <motion.p animate={animation} className="number-section">
            {props.number}
          </motion.p>
          {/* <span className="line"></span> */}
          {props.line}
        </div>
        <div className="split">
          <div className="big-title">
            <motion.h1 animate={animation3}>{props.bigTitle}</motion.h1>
            <motion.h4 animate={animation3}>{props.mediumTitle}</motion.h4>
            <motion.h5 animate={animation3}>{props.tallerTitle}</motion.h5>
            <motion.p animate={animation4}>{props.subtitle}</motion.p>
          </div>
          <motion.div animate={animation5} className="subtitle-text">
            <h3>{props.title}</h3>
            <>{props.break}</>
            <p className="firstLine">{props.firstLine}</p>
            <p className="block-text">{props.blockText}</p>
            <>{props.bold}</>
            <p className="sub-text">{props.subText}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SubHero;
