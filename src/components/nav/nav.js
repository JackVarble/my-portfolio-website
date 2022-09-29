import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/use-media-query";
import CV from "../../assets/cv.pdf";
import useScrollDirection from "../../hooks/use-scroll-direction";

import "./Nav.scss";

const Nav = () => {
  const isSmall = useMediaQuery("(max-width: 1024px)");
  const scrollVisible = useScrollDirection();

  const nameVariants = {
    hide: {
      x: "-5.5rem",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.4,
      },
    },
  };

  const containerVariants = {
    hide: {
      width: 0,
    },
    visible: {
      width: "max-content",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.4,
      },
    },
  };

  const linkVariants = {
    hide: {
      underline: "false",
    },
    visible: {
      underline: "true",
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 0.4,
      },
    },
  };

  return (
    <nav className="nav" style={{ top: scrollVisible ? "0" : "-60px" }}>
      <motion.a
        href="/#home"
        className="icon-container"
        initial={isSmall ? "visible" : "hide"}
        whileHover="visible"
        animate={isSmall ? "visible" : "hide"}
        variants={linkVariants}
      >
        <AiOutlineHome className="icon" />
        <motion.span className="hidden" variants={containerVariants}>
          <motion.p className="title-nav" variants={nameVariants}>
            Home
          </motion.p>
        </motion.span>
      </motion.a>
      <motion.a
        href="/#about"
        className="icon-container"
        initial={isSmall ? "visible" : "hide"}
        whileHover="visible"
        animate={isSmall ? "visible" : "hide"}
      >
        <FaRegUser size={15} className="icon" />
        <motion.span className="hidden" variants={containerVariants}>
          <motion.p className="title-nav" variants={nameVariants}>
            About
          </motion.p>
        </motion.span>
      </motion.a>
      <motion.a
        href="/#projects"
        className="icon-container"
        initial={isSmall ? "visible" : "hide"}
        whileHover="visible"
        animate={isSmall ? "visible" : "hide"}
      >
        <AiOutlineProject className="icon" />
        <motion.span className="hidden" variants={containerVariants}>
          <motion.p className="title-nav" variants={nameVariants}>
            Projects
          </motion.p>
        </motion.span>
      </motion.a>
      <motion.a
        href="/#contact"
        className="icon-container"
        initial={isSmall ? "visible" : "hide"}
        whileHover="visible"
        animate={isSmall ? "visible" : "hide"}
      >
        <BiMessageSquareDetail className="icon" />
        <motion.span className="hidden" variants={containerVariants}>
          <motion.p className="title-nav" variants={nameVariants}>
            Contact Me
          </motion.p>
        </motion.span>
      </motion.a>
      <a href={CV} target="_blank" rel="noreferrer" className="btn btn-resume">
        My Resumé
      </a>
    </nav>
  );
};

export default Nav;
