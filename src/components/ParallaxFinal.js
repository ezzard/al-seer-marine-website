import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

function ParallaxFinal(props) {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.1,
          delay: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: 50,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.section animate={animation} class="last panel ">
        <h3>
          If the answer is <span>YES</span>, then we want to hear from you.
        </h3>
        <p>
          As one of the world’s leading yacht management companies we have a
          wide range of roles available at ASM Yachts and can guide you through
          how to become a certified crew member. Take a look at our current
          vacancies or send us your CV and profile directly, letting us know why
          you would be a good fit for the sea life.
        </p>
      </motion.section>
    </div>
  );
}

export default ParallaxFinal;
