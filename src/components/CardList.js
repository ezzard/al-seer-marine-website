import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Components
import Card from "../components/Card";

// Static Images

// Styles

import styles from "./CardList.module.scss";

const HomeCardList = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: -100,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <motion.article ref={ref} animate={animation} className={styles.card_grid}>
      {props.items.map((item) => {
        console.log(item);
        return (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            currency={item.currency}
            salary={item.salary}
            startDate={`Starting ${item.startDate}`}
            linkTo="#"
            icon={null}
            iconColor={null}
            cardColor={styles.card_bg}
            image={item.image || null}
            cardStyle={item.style}
            // linkTo={`/job-posting/${item.id}`}
            // onClick={props.onDeletePost}
          />
        );
      })}
    </motion.article>
  );
};

export default HomeCardList;
