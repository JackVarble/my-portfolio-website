import React from "react";

const Template = ({ name, children, img1, img2 }) => {
  return (
    <>
      <div className="container grid">
        <article className="quote-container">
          <h1>{name}</h1>
          <p>{children}</p>
        </article>
      </div>
      <div className="phone-img-container">
        <img src={img1} alt="project on phone" />
      </div>
      <div className="pad-img-container">
        <img src={img2} alt="project on ipad" />
      </div>
    </>
  );
};

export default Template;
