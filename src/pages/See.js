import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import HeroStatic from "../components/HeroStatic";
import SubHero from "../components/SubHero";
import SmallCards from "../components/SmallCards";
import CardList from "../components/CardList";
import Footer from "../components/Footer";

// images
import image1 from "../assets/images/card_img_1.jpg";
import image2 from "../assets/images/card_img_2.jpg";
import image3 from "../assets/images/card_img_3.jpg";
import image4 from "../assets/images/image-crew.jpg";

import "../App.scss";

import styles from "../pages/See.module.scss";

function See() {
  let cards = [
    {
      image: image1,
      title: "Largest Fleet",
      description: "We manage some of the largest superyachts in the world",
      style: "with_image",
    },
    {
      image: image2,
      title: "Service",
      description: "We provide a bespoke, tailored service",
      style: "with_image",
    },
    {
      image: image3,
      title: "Experience",
      description:
        "Our team is highly experienced in major construction and refit projects",
      style: "with_image",
    },
    {
      image: image4,
      title: "24/7",
      description: "Our on-call crew of over 500 is available 24/7",
      style: "with_image",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
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

  return (
    <div className="see">
      <div class="bg-see">
        <HeroStatic heroText="See" />
      </div>
      <div className="bg-sub-hero">
        <div className="sub-hero-viewport">
          <SubHero
            number="06"
            line={<span></span>}
            bigTitle="See"
            subtitle="Uncover the ASM Yachts Story"
            break={
              <span>
                <br />
              </span>
            }
            title="Simply Superior."
            firstLine="Who needs more than that?  "
            blockText="     
At ASM Yachts, we don’t believe in waffle or fluff.  We believe in keeping things simple, so our results speak for themselves. Our trusted, straightforward approach is why our clients keep coming back to us again and again.     "
          />
        </div>
      </div>
      <div className="bg-neutral">
        <SubHero
          mediumTitle="Who We Are "
          firstLine="Simply?"
          blockText={
            <span>
              ASM Yachts is a{" "}
              <strong>leading independent yacht management company</strong> that
              puts you first.
              <br />
              <br />
              Our record of excellence spans the fields of maritime design,
              technology, construction and management for clients across the
              globe. We have a dynamic, multi-cultural team of over 1,200
              employees includes master mariners, chief engineers, ex flag &
              class surveyors, HR managers, financial experts, accountants,
              procurement team and project managers. They ensure that ASM Yachts
              is capable of looking after every aspect of yachting including:
            </span>
          }
        />
      </div>
      <div className="bg-cards">
        <SmallCards />
      </div>
      <div className="bg-white">
        <SubHero
          mediumTitle="Why ASM"
          blockText={
            <span className="blue-text">
              Because we are a complete superyacht management service provider
              that can deliver the <strong>WOW factor.</strong>
              <br />
              <br />
              Yes it sounds simple, but it makes all the difference. At ASM
              Yachts we know how to make dreams come true. Our track record in
              conceptual design and innovative technology has resulted in some
              of the most pioneering projects in the industry. We are also
              committed to maintaining a bespoke approach that is{" "}
              <strong>tailored to each individual client </strong>
              so you can be assured of{" "}
              <strong>extraordinary results and complete privacy</strong>,
              whatever your nautical needs. ASM Yachts has the precision,
              imagination and expertise you have been looking for.
            </span>
          }
        />
      </div>
      <div ref={ref} className={styles.card_section}>
        <motion.h2 animate={animation} className={styles.card_section_title}>
          More reasons to choose ASM
        </motion.h2>
        <CardList items={cards} />
      </div>
      <Footer />
    </div>
  );
}

export default See;
