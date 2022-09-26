import React from "react";
import ME from "../../assets/me-about.jpg";
import Experience from "../experience/Experience";
import { FaAward, FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.scss";

const About = () => {
  return (
    <section id="about">
      <h5>GET TO KNOW SOME THINGS</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>EXPERIENCE</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about-card">
              <FaUsers className="about-icon" />
              <h5>CLIENTS</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>PROJECTS</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            perspiciatis sed culpa molestias officia repudiandae quasi, esse
            beatae eveniet eius cupiditate corporis quam, tempore blanditiis
            provident dolorem exercitationem, voluptatibus dolor?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
      <Experience />
    </section>
  );
};

export default About;
