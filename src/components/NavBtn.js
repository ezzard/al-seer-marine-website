import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./NavBtn.module.scss";

/*
Awaits ==>

 <NavBtn
    link="/job-post"
    name="View Vacancy"
    btnStyle={styles.btnStyle}
    textStyle={styles.textStyle}
    iconColor={styles.iconColor}
    icon={arrowIcon}
/>

*/

const NavBtn = (props) => {
    return (
        <Link to={props.link} className={props.btnStyle || styles.btn}>
            <span className={props.textStyle || styles.text}>{props.name}</span>
            <img className={`${styles.icon} ${props.iconColor}`} src={props.icon} alt="" />
        </Link>
    );
};

export default NavBtn;
