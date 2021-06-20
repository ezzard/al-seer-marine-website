import { React, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import styles from "./ImageSectionForm.module.scss";

function ImageSection(props) {
    const bgImageWidth = 50;

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.8
    });

    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                scale: 1.15,
                opacity: 1,
                transition: {
                    duration: 0.9,
                    delay: 0.2
                }
            });
        }
        if (!inView) {
            animation.start({
                scale: 1.02,
                opacity: 1
            });
        }
    }, [!inView]);
    return (
        <div ref={ref} className={styles.wrapper}>
            <motion.div animate={animation} className={styles.container}>
                <div
                    style={{
                        background: `url(${props.img}) ${bgImageWidth}%/ cover border-box padding-box`
                    }}
                    className={styles.border_blur}
                ></div>
            </motion.div>
        </div>
    );
}

export default ImageSection;
