import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import HeroStatic from "./components/HeroStatic";
import SubHero from "./components/SubHero";
import RunContent from "./components/RunContent";

import "./App.scss";

function Run() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

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

    return (
        <div className="run">
            <div className="bg-run">
                <HeroStatic heroText="Run" />
            </div>
            <div ref={ref} class="bg-sub-hero">
                <div className="sub-hero-viewport">
                    <SubHero
                        line={<motion.span animate={animation2}></motion.span>}
                        number="01"
                        bigTitle="Run"
                        subtitle="Discover our 360° approach to luxury yacht management"
                        firstLine="Because you deserve the best."
                        blockText="As the world of superyachts enters a new frontier, ASM Yachts is making waves as the name to trust in yacht management.  Our expert team is available around the clock to provide you with full-service support, tailored to your needs.  From berthing to operations, accounts to crew, technical support to emergency response, we have the knowledge and experience to protect your investment, both on and off the water.  That way, you can focus on living your ocean life to the fullest."
                    />
                </div>
            </div>
            <RunContent />
            <div className="footer-navigation">
                <div className="button-description">
                    <p>Click to visit:</p>
                    <a href="/ask">ASK</a>
                </div>
            </div>
        </div>
    );
}

export default Run;
