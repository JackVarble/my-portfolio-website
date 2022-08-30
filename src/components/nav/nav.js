import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <a href="/#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <FaRegUser size={15} />
      </a>
      <a href="/#projects">
        <AiOutlineProject />
      </a>
      <a href="/#contact">
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
