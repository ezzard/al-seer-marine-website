// import Image from "next/image";

// Components
import NavBtn from "../components/NavBtn";

// Images
import arrowIcon from "../assets/images/arrow_card_btn.svg";

// Styles
import styles from "./Card.module.scss";

const Card = (props) => {
    // console.log(props.image);
    let image;

    if (props.image) {
        image = (
            <div className={styles.img_wrapper}>
                <img className={styles.image} src={props.image} alt="" />
            </div>
        );
    } else if (props.image && props.iconColor) {
        image = (
            <div className={styles.img_wrapper}>
                <img className={`${styles.image} ${props.iconColor}`} src={props.image} alt="" />
            </div>
        );
    } else {
        image = null;
    }

    return (
        // <section className={`${styles.card} ${props.cardColor}`}>
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
        // </section>
    );
};

export default Card;
