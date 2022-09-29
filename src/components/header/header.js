import React from "react";
import ActionButtons from "./actionButtons";
import ME from "../../assets/me.png";
import "./header.scss";

const header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <div className="tagline-container">
          <h2 className="hello">HELLO I'M</h2>
          <h1 className="name">Jack Varble</h1>
          <h2 className="stinger">
            WEB DEVELOPER
            <br />
            DESIGN ENTHUSIAST
          </h2>
          <ActionButtons />
        </div>
        <div className="img-container">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default header;
