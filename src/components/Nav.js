import React from "react";

import menu from "../assets/images/menu.png";
import logo from "../assets/images/Logo ASM.png";

function Nav() {
  return (
    <div className="nav-bar">
      <div className="container">
        <img src={menu} alt="Menu" className="mobile-menu" />
        <a href="" className="logo">
          <img src={logo} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
