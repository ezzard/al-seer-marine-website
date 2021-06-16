// Components
import Card from "../components/Card";

// Static Images

// Styles

import styles from "./CardList.module.scss";

const HomeCardList = (props) => {
    return (
        <article className={styles.card_grid}>
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
        </article>
    );
};

export default HomeCardList;
