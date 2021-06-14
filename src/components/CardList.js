// Components
import Card from "../components/Card";

// Static Images

// Styles

import styles from "./CardList.module.scss";

const HomeCardList = (props) => {
    return (
        <article className={styles.card_grid}>
            {props.items.map((jobPosting) => {
                console.log(jobPosting);
                return (
                    <Card
                        key={jobPosting.id}
                        id={jobPosting.id}
                        title={jobPosting.title}
                        description={jobPosting.description}
                        currency={jobPosting.currency}
                        salary={jobPosting.salary}
                        startDate={`Starting ${jobPosting.startDate}`}
                        linkTo={`/job-posting/1`}
                        icon={null}
                        iconColor={null}
                        cardColor={styles.card_bg}
                        // linkTo={`/job-posting/${jobPosting.id}`}
                        // onClick={props.onDeletePost}
                    />
                );
            })}
        </article>
    );
};

export default HomeCardList;
