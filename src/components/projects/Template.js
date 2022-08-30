import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Template = ({ name, children, linkName, link, img1, img2 }) => {
  return (
    <>
      <div className="container grid">
        <article className="quote-container">
          <h1>{name}</h1>
          <p>{children}</p>
          <div className="link-container">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {linkName}
            </a>
            <BsArrowRight size="1.5rem" />
          </div>
        </article>
      </div>
      <div className="phone-img-container">
        <img src={img1} alt={`${name} on phone`} />
      </div>
      <div className="pad-img-container">
        <img src={img2} alt={`${name} on tablet`} />
      </div>
    </>
  );
};

export default Template;
