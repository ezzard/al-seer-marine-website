import React from "react";
import { Scroll, useMotionValue, Frame, useTransform } from "framer";

// Components
import CardList from "../components/CardList";
import Footer from "../components/Footer";

// Images
import boat from "../assets/images/Group_343.jpg";

// Styles
import styles from "./Join.module.scss";
import "../App.scss";

const Join = () => {
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

  const y = useMotionValue(0);
  const titleY = useTransform(y, (value) => value / -1);
  const backgroundImg = useTransform(y, (value) => value / 2);

  return (
    <article height={5000} className={styles.container}>
      {/* <div className={styles.bg_image}></div> */}
      {/* <img className={styles.bg_image} src={boat} /> */}

      <div className={styles.wrapper}>
        <Scroll
          width={1900}
          height={1000}
          contentOffsetY={y}
          onScroll={function () {
            console.log(y.get());
          }}
        >
          <div className={styles.img_container}>
            {/* <Frame background={""} top={180} y={titleY}>
              <h1 center={"x"} className={styles.title}>
                Calling all Super Crew!
              </h1>
            </Frame> */}

            <Frame
              width={"100%"}
              height={"100vh"}
              background={""}
              top={""}
              y={backgroundImg}
            >
              <img className={styles.bg_image} src={boat} />
            </Frame>
          </div>
        </Scroll>

        <Frame
          width={"100%"}
          height={"100vh"}
          background={""}
          top={200}
          y={titleY}
        >
          <div className={styles.titles_container}>
            <h3 className={styles.subtitle}>ARE YOU:</h3>
          </div>
        </Frame>
        {/* <div className={styles.titles_container}>
            <h3 className={styles.subtitle}>ARE YOU:</h3>
            <h3 className={styles.subtitle}>PASSIONATE</h3>
            <h3 className={styles.subtitle}>ADVENTUROUS </h3>
            <h3 className={styles.subtitle}>HARD-WORKING </h3>
            <h3 className={styles.subtitle}>FUN-LOVING</h3>
            <h3 className={`${styles.subtitle} ${styles.margin}`}>CREATIVE</h3>
          </div> */}
        {/* <div className={styles.cta_block}>
            <h4 className={styles.cta_title}>
              If the answer is <strong>YES</strong>, <br /> then we want to hear
              from you.
            </h4>
            <p className={styles.cta_text}>
              As one of the world’s leading yacht management companies we have a
              wide range of roles available at ASM Yachts and can guide you
              through how to become a certified crew member. Take a look at our
              current vacancies or send us your CV and profile directly, letting
              us know why you would be a good fit for the sea <i>life</i>.
            </p>
          </div> */}
      </div>

      {/* <div className={styles.card_section}>
        <h2 className={styles.card_section_title}>Current vacancies</h2>
        <CardList items={jobPostingData} />
      </div> */}
    </article>
  );
};

export default Join;
