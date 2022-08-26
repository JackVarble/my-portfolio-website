import React from "react";
import useScrollPosition from "../../hooks/use-scroll-position";
import { FaRegUser } from "react-icons/fa";
import { BiMessageSquareDetail, BiBook } from "react-icons/bi";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import "./nav.scss";

const Nav = () => {
  const scrollPosition = useScrollPosition();

  const navClasses =
    scrollPosition > window.innerHeight ? "nav-top" : "nav-bottom";

  return (
    <nav className={navClasses}>
      <a href="/#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <FaRegUser size={15} />
      </a>
      <a href="/#experience">
        <BiBook />
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
