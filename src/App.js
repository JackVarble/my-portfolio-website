import React, { useState } from "react";
import Navigation from "./components/nav/Navigation";
import Header from "./components/header/header";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";
import { motion } from "framer-motion";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVariant = {
    closed: {
      borderRadius: 0,
      border: "none",
      height: "100vh",
      scale: "1",
      marginTop: 0,
      left: 0,
      overflowY: "auto",
      overflowX: "hidden",
      pointerEvents: "all",
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
        duration: 0.2,
        delay: 0.15,
      },
    },
    open: {
      borderRadius: "20px",
      border: "2px solid var(--color-light)",
      height: "35rem",
      scale: "0.75",
      marginTop: "40%",
      left: "-12rem",
      overflowY: "hidden",
      overflowX: "hidden",
      pointerEvents: "none",
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
        duration: 0.3,
      },
    },
  };

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const menuClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Navigation
        onClick={onClickHandler}
        isOpen={isOpen}
        menuClick={menuClick}
      />
      <motion.div
        className="mobile"
        initial={isOpen ? "open" : "closed"}
        animate={isOpen ? "open" : "closed"}
        variants={openVariant}
      >
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
};

export default App;
