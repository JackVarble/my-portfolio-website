import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import BurgerMenu from "./BurgerMenu";
import { motion } from "framer-motion";

import "./MobileNav.scss";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="mobile-nav"
      initial={isOpen ? "open" : "closed"}
      animate={isOpen ? "open" : "closed"}
    >
      <div className="icon-container burger-container">
        <BurgerMenu onClick={onClickHandler} />
      </div>
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
    </motion.nav>
  );
};

export default MobileNav;
