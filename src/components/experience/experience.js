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
            <article>
              <FaGitAlt />
            </article>
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
            <article>
              <FaHtml5 />
            </article>
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
            <article>
              <FaCss3Alt />
            </article>
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
            <article>
              <SiJavascript />
            </article>
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
            <article>
              <SiReact />
            </article>
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
            <article>
              <FaNodeJs />
            </article>
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
            <article>
              <SiGraphql />
            </article>
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
            <article>
              <FaDocker />
            </article>
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
