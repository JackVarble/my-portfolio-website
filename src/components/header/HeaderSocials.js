import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header-socials text-light">
      <a
        href="https://linkedin.com/in/john-varble-a234b875/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <BsLinkedin size={24} />
      </a>
      <a
        href="https://github.com/JackVarble"
        rel="noreferrer noopener"
        target="_blank"
      >
        <BsGithub size={24} />
      </a>
    </div>
  );
};

export default HeaderSocials;
