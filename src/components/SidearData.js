import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import logoSidebar from "../assets/images/logo-sidebar.svg";

export const SidebarData = [
  {
    title: <img src={logoSidebar} alt="logo" />,
    path: "/",
    icon: "",
    cName: "nav-text",
  },
  {
    title: "Run",
    path: "/run",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Explore",
    path: "/explore",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Create",
    path: "/create",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Own",
    path: "/own",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Crew",
    path: "/crew",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Join",
    path: "/join",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "See",
    path: "/see",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Ask",
    path: "/ask",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
];
