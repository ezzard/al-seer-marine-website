import React from "react";

import logo from "../assets/images/Logo-ASM.png";
import social from "../assets/images/social.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-top">
            <a href="#" className="logo">
              <img src={logo} alt="logo" />
            </a>
            <a href="#" className="social">
              <img src={social} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyrights © 2021. Al Seer Marine. All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
