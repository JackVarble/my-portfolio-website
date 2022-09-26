import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import BurgerMenu from "./BurgerMenu";
import { motion } from "framer-motion";

import "./MobileNav.scss";

const MobileNav = ({ onClick, menuClick }) => {
  const navbarVariant = {
    closed: {
      backgroundColor: "var(--color-bg)",
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
        duration: 0.1,
        delay: 0.25,
      },
    },
    open: {
      backgroundColor: "transparent",
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
        duration: 0.1,
      },
    },
  };

  const menuVariant = {
    closed: {
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
        duration: 0.01,
      },
    },
    open: {
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
        duration: 0.1,
        delayChildren: 0.1,
        staggerChildren: 0.03,
      },
    },
  };

  const menuItemVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
        duration: 0.01,
      },
    },
    closed: {
      opacity: 0,
      y: "-2rem",
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
        duration: 0.01,
      },
    },
  };

  return (
    <>
      <motion.nav className="mobile-nav" variants={navbarVariant}>
        <div className="burger-container">
          <BurgerMenu onClick={onClick} />
        </div>
        <motion.div className="mobile-nav" variants={menuVariant}>
          <motion.a
            href="/#home"
            onClick={menuClick}
            className="icon-container first"
            variants={menuItemVariant}
          >
            <AiOutlineHome size={26} className="icon" />
            <p className="title-nav">Home</p>
          </motion.a>
          <motion.a
            href="/#about"
            onClick={menuClick}
            className="icon-container"
            variants={menuItemVariant}
          >
            <FaRegUser size={24} className="icon" />
            <p className="title-nav">About</p>
          </motion.a>
          <motion.a
            href="/#projects"
            onClick={menuClick}
            className="icon-container"
            variants={menuItemVariant}
          >
            <AiOutlineProject size={26} className="icon" />
            <p className="title-nav">Projects</p>
          </motion.a>
          <motion.a
            href="/#contact"
            onClick={menuClick}
            className="icon-container"
            variants={menuItemVariant}
          >
            <BiMessageSquareDetail size={26} className="icon" />
            <p className="title-nav">Contact Me</p>
          </motion.a>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default MobileNav;
