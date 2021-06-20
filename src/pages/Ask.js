import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import HeroStatic from "../components/HeroStatic";
import SubHero from "../components/SubHero";

import map2 from "../assets/images/map-2.png";

import "../App.scss";
import Form from "../components/Form";

function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 1, delay: 0.2 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
        >
            {children}
        </motion.div>
    );
}

function Ask() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.7,
                    delay: 0.3
                }
            });
        }
        if (!inView) {
            animation.start({
                y: -40,
                opacity: 0
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
                    delay: 0.7
                }
            });
        }
        if (!inView) {
            animation2.start({
                scaleX: 0,
                originX: 0,
                opacity: 0
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
                    delay: 0.5
                }
            });
        }
        if (!inView) {
            animation3.start({
                y: -40,
                opacity: 0
            });
        }
    }, [inView]);

    const animation4 = useAnimation();

    useEffect(() => {
        if (inView) {
            animation4.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1.1,
                    delay: 0.8
                }
            });
        }
        if (!inView) {
            animation4.start({
                x: 100,
                opacity: 0
            });
        }
    }, [inView]);

    const animation5 = useAnimation();

    useEffect(() => {
        if (inView) {
            animation5.start({
                opacity: 1,
                transition: {
                    duration: 1,
                    delay: 0.5
                }
            });
        }
        if (!inView) {
            animation5.start({
                opacity: 0
            });
        }
    }, [inView]);

    return (
        <div className="ask">
            <div class="bg-ask">
                <HeroStatic heroText="Ask" />
            </div>
            <div ref={ref} className="sub-hero-ask">
                <div className="sub-hero">
                    <div className="sub-hero-container">
                        <div className="number-line">
                            <motion.p animate={animation3} className="number-section">
                                07
                            </motion.p>
                            <motion.span animate={animation2} className="line"></motion.span>
                        </div>
                        <div className="split">
                            <motion.div animate={animation} className="big-title">
                                <h1>Ask</h1>
                            </motion.div>
                            <motion.div animate={animation4}>
                                <Form />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <FadeInWhenVisible>
                <div class="map-container-ask">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d14451.035515710984!2d55.156761622574756!3d25.110022247584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d25.1111762!2d55.159460499999994!5e0!3m2!1sen!2sco!4v1623443541813!5m2!1sen!2sco"
                        width="85%"
                        height="100%"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>

                    {/* <motion.img animate={animation5} src={map2} alt="Dubai's Map" /> */}
                </div>
            </FadeInWhenVisible>
        </div>
    );
}

export default Ask;
