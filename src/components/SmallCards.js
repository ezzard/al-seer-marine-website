import React from "react";

import icon1 from "../assets/images/icon-1.svg";
import icon2 from "../assets/images/icon-02.svg";
import icon3 from "../assets/images/icon-03.svg";
import icon4 from "../assets/images/icon-04.svg";
import icon5 from "../assets/images/icon-05.svg";
import icon6 from "../assets/images/icon-06.svg";
import icon7 from "../assets/images/icon-07.svg";
import icon8 from "../assets/images/icon-08.svg";
import icon9 from "../assets/images/icon-09.svg";
import icon10 from "../assets/images/icon-10.svg";
import icon11 from "../assets/images/icon-11.svg";
import icon12 from "../assets/images/icon-12.svg";
import icon13 from "../assets/images/icon-13.svg";

function SmallCards() {
  return (
    <div className="centered">
      <div className="small-cards">
        <div className="col-1">
          <div className="card-single">
            <img src={icon1} alt="Special Program Management Icon" />
            <p>Special Project Management</p>
          </div>
          <div className="card-single">
            <img src={icon2} alt="Special Program Management Icon" />
            <p>New Build Management</p>
          </div>
          <div className="card-single">
            <img src={icon3} alt="Special Program Management Icon" />
            <p>Refits &amp; Retrofit Management </p>
          </div>
          <div className="card-single">
            <img src={icon4} alt="Special Program Management Icon" />
            <p>Technical Management </p>
          </div>
          <div className="card-single">
            <img src={icon5} alt="Special Program Management Icon" />
            <p>Procurement &amp; Full Accounting / Financial Services</p>
          </div>
          <div className="card-single">
            <img src={icon6} alt="Special Program Management Icon" />
            <p>Warehouse &amp; Logistical Support</p>
          </div>
          <div className="card-single">
            <img src={icon7} alt="Special Program Management Icon" />
            <p>Legal, Compliance, ISM / ISPS Management </p>
          </div>
        </div>
        <div className="col-2">
          <div className="card-single">
            <img src={icon8} alt="Special Program Management Icon" />
            <p>Insurance &amp; Claims Management </p>
          </div>
          <div className="card-single">
            <img src={icon9} alt="Special Program Management Icon" />
            <p>Crew Management, Payroll &amp; Recruitment </p>
          </div>
          <div className="card-single">
            <img src={icon10} alt="Special Program Management Icon" />
            <p>Crew Training</p>
          </div>
          <div className="card-single">
            <img src={icon11} alt="Special Program Management Icon" />
            <p>F &amp; B and Event Management </p>
          </div>
          <div className="card-single">
            <img src={icon12} alt="Special Program Management Icon" />
            <p>Sales &amp; Charter Management </p>
          </div>
          <div className="card-single">
            <img src={icon13} alt="Special Program Management Icon" />
            <p>Shore Facilities &amp; Asset Management</p>
          </div>
        </div>
      </div>
      <div className="paragraph-container">
        <p className="cards-description">
          At ASM Yachts we believe that every yacht should look its best and
          operate at the highest level wherever it is in the world. That is why
          our team will always go the extra mile to provide you with a
          stress-free, extraordinary experience whilst on the ocean waves.
        </p>
      </div>
    </div>
  );
}

export default SmallCards;
