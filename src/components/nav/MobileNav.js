import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { motion } from "framer-motion";

import "./MobileNav.scss";

const MobileNav = () => {
  return (
    <nav className="mobile-nav">
      <a href="/#" className="icon-container">
        <AiOutlineHome className="icon" />
        <p className="title-nav">Home</p>
      </a>
      <a href="/#about" className="icon-container">
        <FaRegUser size={15} className="icon" />
        <p className="title-nav">About</p>
      </a>
      <a href="/#projects" className="icon-container">
        <AiOutlineProject className="icon" />
        <p className="title-nav">Projects</p>
      </a>
      <a href="/#contact" className="icon-container">
        <BiMessageSquareDetail className="icon" />
        <p className="title-nav">Contact Me</p>
      </a>
    </nav>
  );
};

export default MobileNav;
