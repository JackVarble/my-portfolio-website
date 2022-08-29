import React from "react";
import {
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import { SiJavascript, SiReact, SiGraphql } from "react-icons/si";

import "./Experience.scss";

const Experience = () => {
  return (
    <>
      <div className="container experience-container">
        <article>
          <FaGitAlt />
          <span className="hidden">GIT</span>
        </article>
        <article>
          <FaHtml5 />
          <span className="hidden">HTML</span>
        </article>
        <article>
          <FaCss3Alt />
          <span className="hidden">CSS</span>
        </article>
        <article>
          <SiJavascript />
          <span className="hidden">JAVASCRIPT</span>
        </article>
      </div>
      <div className="container experience-container">
        <article>
          <SiReact />
          <span className="hidden">REACT</span>
        </article>
        <article>
          <FaNodeJs />
          <span className="hidden">NODEJS</span>
        </article>
        <article>
          <SiGraphql />
          <span className="hidden">GRAPHQL</span>
        </article>
        <article>
          <FaDocker />
          <span className="hidden">DOCKER</span>
        </article>
      </div>
    </>
  );
};

export default Experience;
