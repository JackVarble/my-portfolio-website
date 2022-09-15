import React from "react";
import ActionButtons from "./actionButtons";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.png";
import "./header.scss";

const header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h5>HELLO I'M</h5>
        <h1>Jack Varble</h1>
        <h5 className="text-light">FRONTEND DEVELOPER</h5>
        <ActionButtons />
        <HeaderSocials />

        <div className="img-container">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
