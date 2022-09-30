import { useState, useEffect } from "react";
import { debounce } from "../utilities/debounce";

const useScrollDirection = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = document.getElementsById("scroll").scrollY;

    console.log("working");

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    const windowRep = document.getElementsById("scroll");
    windowRep.addEventListener("scroll", handleScroll);

    return () => windowRep.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return visible;
};

export default useScrollDirection;
