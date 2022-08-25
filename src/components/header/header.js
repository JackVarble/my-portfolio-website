import React from "react";
import "./header.scss";

const header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I am</h5>
        <h1>Jack Varble</h1>
        <h5 className="text-light">Frontend Developer</h5>
      </div>
    </header>
  );
};

export default header;
