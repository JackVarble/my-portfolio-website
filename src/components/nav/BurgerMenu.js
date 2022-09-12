import React from "react";
import { motion } from "framer-motion";

import "./MobileNav.scss";

const BurgerMenu = ({ onClick }) => {
  const burgerMenuLeftVariantTop = {
    closed: {
      rotate: 0,
      x: 0,
      y: 0,
      transition: {
        type: "transition",
        duration: 0.2,
      },
    },
    open: {
      rotate: "45deg",
      x: "3px",
      y: "5px",
      transition: {
        type: "transition",
        duration: 0.2,
      },
    },
  };

  const burgerMenuRightVariantTop = {
    closed: {
      rotate: 0,
      x: 0,
      y: 0,
      transition: {
        type: "transition",
        duration: 0.2,
      },
    },
    open: {
      rotate: "-45deg",
      x: "-3px",
      y: "5px",
      transition: {
        type: "transition",
        duration: 0.2,
      },
    },
  };

  const burgerMenuLeftVariantMiddle = {
    closed: {
      x: 0,
      opacity: 1,
      transition: {
        type: "transition",
        duration: 0.2,
      },
    },
    open: {
      x: "-2rem",
      opacity: 0,
      transition: {
        type: "transition",
        duration: 0.2,
      },
    },
  };

  const burgerMenuLeftVariantBottom = {
    closed: {
      rotate: 0,
      x: 0,
      y: 0,
      transition: {
        type: "transition",
        duration: 0.2,
      },
    },
    open: {
      rotate: "-45deg",
      x: "3px",
      y: "-5px",
      transition: {
        type: "transition",
        duration: 0.2,
      },
    },
  };

  const burgerMenuRightVariantBottom = {
    closed: {
      rotate: 0,
      x: 0,
      y: 0,
      transition: {
        type: "transition",
        duration: 0.2,
      },
    },
    open: {
      rotate: "45deg",
      x: "-3px",
      y: "-5px",
      transition: {
        type: "transition",
        duration: 0.2,
      },
    },
  };

  const burgerMenuRightVariantMiddle = {
    closed: {
      x: 0,
      opacity: 1,
      transition: {
        type: "transition",
        duration: 0.1,
      },
    },
    open: {
      x: "2rem",
      opacity: 0,
      transition: {
        type: "transition",
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div className="burger-menu" onClick={onClick}>
      <motion.div
        className="burger-bar-left"
        variants={burgerMenuLeftVariantTop}
      ></motion.div>
      <motion.div
        className="burger-bar-right"
        variants={burgerMenuRightVariantTop}
      ></motion.div>
      <motion.div
        className="burger-bar-left"
        variants={burgerMenuLeftVariantMiddle}
      ></motion.div>
      <motion.div
        className="burger-bar-right"
        variants={burgerMenuRightVariantMiddle}
      ></motion.div>
      <motion.div
        className="burger-bar-left"
        variants={burgerMenuLeftVariantBottom}
      ></motion.div>
      <motion.div
        className="burger-bar-right"
        variants={burgerMenuRightVariantBottom}
      ></motion.div>
    </motion.div>
  );
};

export default BurgerMenu;
