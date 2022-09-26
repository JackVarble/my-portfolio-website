import React from "react";
import {
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import { SiJavascript, SiReact, SiGraphql } from "react-icons/si";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/use-media-query";

import "./Experience.scss";

const Experience = () => {
  const isSmall = useMediaQuery("(max-width: 1024px)");

  const nameVariants = {
    hide: {
      y: "-1.5rem",
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        duration: 0.4,
      },
    },
  };

  return (
    <>
      <h4 className="title">SKILLS I HAVE</h4>

      <div className="initial-container">
        <div className="container experience-container">
          <motion.div
            className="grid-item"
            initial={isSmall ? "visible" : "hide"}
            whileHover="visible"
            animate={isSmall ? "visible" : "hide"}
          >
            <FaGitAlt className="icon" />
            <div className="hidden">
              <motion.div className="name" variants={nameVariants}>
                GIT
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="grid-item"
            initial={isSmall ? "visible" : "hide"}
            whileHover="visible"
            animate={isSmall ? "visible" : "hide"}
          >
            <FaHtml5 className="icon" />
            <div className="hidden">
              <motion.div className="name" variants={nameVariants}>
                HTML
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="grid-item"
            initial={isSmall ? "visible" : "hide"}
            whileHover="visible"
            animate={isSmall ? "visible" : "hide"}
          >
            <FaCss3Alt className="icon" />
            <div className="hidden">
              <motion.div className="name" variants={nameVariants}>
                CSS
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="grid-item"
            initial={isSmall ? "visible" : "hide"}
            whileHover="visible"
            animate={isSmall ? "visible" : "hide"}
          >
            <SiJavascript className="icon" />
            <div className="hidden">
              <motion.div className="name" variants={nameVariants}>
                JAVASCRIPT
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="initial-container">
        <div className="container experience-container">
          <motion.div
            className="grid-item"
            initial={isSmall ? "visible" : "hide"}
            whileHover="visible"
            animate={isSmall ? "visible" : "hide"}
          >
            <SiReact className="icon" />
            <div className="hidden">
              <motion.div className="name" variants={nameVariants}>
                REACT
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="grid-item"
            initial={isSmall ? "visible" : "hide"}
            whileHover="visible"
            animate={isSmall ? "visible" : "hide"}
          >
            <FaNodeJs className="icon" />
            <div className="hidden">
              <motion.div className="name" variants={nameVariants}>
                NODEJS
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="grid-item"
            initial={isSmall ? "visible" : "hide"}
            whileHover="visible"
            animate={isSmall ? "visible" : "hide"}
          >
            <SiGraphql className="icon" />
            <div className="hidden">
              <motion.div className="name" variants={nameVariants}>
                GRAPHQL
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="grid-item"
            initial={isSmall ? "visible" : "hide"}
            whileHover="visible"
            animate={isSmall ? "visible" : "hide"}
          >
            <FaDocker className="icon" />
            <div className="hidden">
              <motion.div className="name" variants={nameVariants}>
                DOCKER
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Experience;
