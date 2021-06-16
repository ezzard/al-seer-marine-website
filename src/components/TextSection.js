import React from "react";
import { Link } from "react-router-dom";

import arrowDark from "../assets/images/arrow-right-dark.svg";

function TextSection(props) {
    console.log(props);
    return (
        <div className="text-section">
            <div className="text-section-container">
                <div className="number-line">
                    <p className="number-section">{props.number}</p>
                    <span className="line"></span>
                </div>
                <h1 className="big-title">{props.title}</h1>
                <p className="description">{props.description}</p>

                <Link to={props.link} className="normal-cta">
                    {/* <a href="" className="normal-cta"> */}
                    <span className="button-text">Learn More</span>
                    <img src={arrowDark} alt="arrow right" />
                    {/* </a> */}
                </Link>
            </div>
        </div>
    );
}

export default TextSection;
