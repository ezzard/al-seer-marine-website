import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { SidebarData } from "./SidearData";
import "./Navbar.css";
import "../../src/App.scss";
import { IconContext } from "react-icons";
import menu from "../assets/images/menu.png";
import logo from "../assets/images/Logo-ASM.png";
import logoSidebar from "../assets/images/logo-sidebar.svg";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="container">
            <Link to="#" className="menu-bars">
              <img
                src={menu}
                alt="Menu"
                className="mobile-menu"
                onClick={showSidebar}
              />
            </Link>
            <Link to="#" className="logo">
              <img
                src={logo}
                alt="Logo"
                className="mobile-menu"
                onClick={showSidebar}
              />
            </Link>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              {/* <Link to="#" className="menu-bars">
                * <AiIcons.AiOutlineClose /> 
              </Link> */}
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <h3 className="menu-text">{item.title}</h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
