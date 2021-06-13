import React from "react";

import "../App.scss";

function SubHero(props) {
    return (
        <div className="sub-hero">
            <div className="sub-hero-container">
                <div className="number-line">
                    <p className="number-section">{props.number}</p>
                    {/* <span className="line"></span> */}
                    {props.line}
                </div>
                <div className="split">
                    <div className="big-title">
                        <h1>{props.bigTitle}</h1>
                        <h4>{props.mediumTitle}</h4>
                        <p>{props.subtitle}</p>
                    </div>
                    <div className="subtitle-text">
                        <h3>{props.title}</h3>
                        <p className="firstLine">{props.firstLine}</p>
                        <p className="block-text">{props.blockText}</p>
                        <>{props.bold}</>
                        <p className="sub-text">{props.subText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubHero;
