import React from "react";
import CV from "../../assets/cv.pdf";

const actionButtons = () => {
  return (
    <div className="action-buttons">
      <a href={CV} download className="btn">
        Download Resumé
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default actionButtons;
