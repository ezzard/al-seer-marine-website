import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Components
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Parallax from "../components/Parallax";

// Images
import boat from "../assets/images/Group_343.jpg";

// Styles
import styles from "./Join.module.scss";
import "../App.scss";

function Join() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  let jobPostingData = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin ",
      currency: "USD",
      salary: "100,000",
      startDate: "01/06/2020",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin ",
      currency: "USD",
      salary: "100,000",
      startDate: "01/06/2020",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin ",
      currency: "USD",
      salary: "100,000",
      startDate: "01/06/2020",
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin ",
      currency: "USD",
      salary: "100,000",
      startDate: "01/06/2020",
    },
    {
      id: 5,
      title: "Lorem Ipsum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin ",
      currency: "USD",
      salary: "100,000",
      startDate: "01/06/2020",
    },
    {
      id: 6,
      title: "Lorem Ipsum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin ",
      currency: "USD",
      salary: "100,000",
      startDate: "01/06/2020",
    },
    {
      id: 7,
      title: "Lorem Ipsum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin ",
      currency: "USD",
      salary: "100,000",
      startDate: "01/06/2020",
    },
    {
      id: 8,
      title: "Lorem Ipsum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin ",
      currency: "USD",
      salary: "100,000",
      startDate: "01/06/2020",
    },
  ];

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.1,
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
    <>
      {/* <article className={styles.container}>
        <Scroll
          width={1900}
          height={1000}
          contentOffsetY={y}
          dragEnabled={false}
          onScroll={onScroll}
        >
          <img
            height={5000}
            y={backgroundImg}
            className={styles.bg_image}
            src={boat}
          />

          <Frame
            style={{ position: "absolute" }}
            background={""}
            top={200}
            y={titleY}
          >
            <div className={styles.titles_container}>
              <h3 right={300} className={styles.subtitle}>
                ARE YOU:
              </h3>
            </div>
          </Frame>

          <Frame
            style={{ position: "absolute" }}
            background={""}
            top={1200}
            y={titleY}
          >
            <div className={styles.titles_container}>
              <h3 right={300} className={styles.subtitle}>
                ARE dasdas
              </h3>
            </div>
          </Frame>
        </Scroll>
      </article>  */}

      <Parallax />
      <div ref={ref} className={styles.card_section}>
        <motion.h2 animate={animation} className={styles.card_section_title}>
          Current vacancies
        </motion.h2>
        <CardList items={jobPostingData} />
      </div>
    </>
  );
}

export default Join;
