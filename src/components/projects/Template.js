import React from "react";
import Phone from "../../assets/iphone-mockupNBC.webp";

const Template = () => {
  return (
    <>
      <div className="container">
        <h1>Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          aspernatur sapiente ducimus illum laboriosam culpa ratione blanditiis
          ea suscipit quae ad excepturi, enim voluptate dolorum, commodi placeat
          perferendis molestias repudiandae.
        </p>
      </div>
      <div className="phone-img-container">
        <img src={Phone} alt="project on phone" />
      </div>
    </>
  );
};

export default Template;
