// import Image from "next/image";

// Components
import NavBtn from "../components/NavBtn";

// Images
import arrowIcon from "../assets/images/arrow_card_btn.svg";

// Styles
import styles from "./Card.module.scss";

const Card = (props) => {
    // console.log(props.image);
    let card;
    let icon;
    let image;

    if (props.image && props.iconColor) {
        image = (
            <div className={styles.img_wrapper}>
                <img className={`${styles.image} ${props.iconColor}`} src={props.image} alt="" />
            </div>
        );
    } else if (props.image) {
        image = (
            <div className={styles.img_wrapper}>
                <img className={styles.image} src={props.image} alt="" />
            </div>
        );
    } else {
        image = null;
    }

    if (props.cardStyle === "with_image") {
        card = (
            <div className={styles.card}>
                {image}
                <div>
                    <h4 className={styles.title_alt}>{props.title}</h4>
                    <p className={styles.text_alt}>{props.description}</p>
                </div>
            </div>
        );
    } else {
        card = (
            <div className={`${styles.card} ${props.cardColor}`}>
                {image}
                <div>
                    <h4 className={styles.title}>{props.title}</h4>
                    <div className={styles.title_wrapper}>
                        <p className={styles.text}>{props.description}</p>
                        <p className={styles.salary}>
                            {props.currency}
                            <span> {props.salary}</span>
                        </p>
                        <p className={styles.text}>{props.startDate}</p>
                        <NavBtn
                            // link="/job-post"
                            link="#"
                            name="View Vacancy "
                            btnStyle={styles.card_btn}
                            textStyle={styles.card_text}
                            iconColor={styles.card_icon}
                            icon={arrowIcon}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return card;
};

export default Card;
