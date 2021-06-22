import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

function ParallaxTitle(props) {
  const { ref, inView } = useInView({
    threshold: 0.85,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div>
      <section ref={ref} class="panel">
        <motion.h1 animate={animation}>{props.title}</motion.h1>
      </section>
    </div>
  );
}

export default ParallaxTitle;
