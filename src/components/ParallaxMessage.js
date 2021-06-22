import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

function ParallaxMessage(props) {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1.2,
          delay: 0.3,
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
      <section ref={ref} class="first panel ">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
        >
          {props.message}
        </motion.h2>
      </section>
    </div>
  );
}

export default ParallaxMessage;
