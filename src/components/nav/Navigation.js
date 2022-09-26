import React from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/use-media-query";

const Navigation = ({ onClick, isOpen, menuClick }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <>
      {isMobile && (
        <motion.div
          initial={isOpen ? "open" : "closed"}
          animate={isOpen ? "open" : "closed"}
        >
          <MobileNav onClick={onClick} isOpen={isOpen} menuClick={menuClick} />
        </motion.div>
      )}
      {!isMobile && <Nav />}
    </>
  );
};

export default Navigation;
