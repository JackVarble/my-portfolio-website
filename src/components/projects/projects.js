import React from "react";
import Template from "./Template";
import Phone from "../../assets/iphone-mockupNBC.webp";
import iPad from "../../assets/iPad-mockupNBC.webp";
import "./projects.scss";

const projects = () => {
  return (
    <section id="projects">
      <Template
        name="Northlake Bible Church"
        link="https://www.northlakebible.org/"
        linkName="LINK TO NORTHLAKE"
        img1={Phone}
        img2={iPad}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum
        veritatis blanditiis ipsam officia quaerat perferendis unde iure placeat
        a aperiam quasi deserunt? Numquam totam accusamus, voluptate natus
        quibusdam veniam.
      </Template>
      <Template
        name="Northlake Bible Church"
        link="https://www.northlakebible.org/"
        linkName="LINK TO NORTHLAKE"
        img1={Phone}
        img2={iPad}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum
        veritatis blanditiis ipsam officia quaerat perferendis unde iure placeat
        a aperiam quasi deserunt? Numquam totam accusamus, voluptate natus
        quibusdam veniam.
      </Template>
    </section>
  );
};

export default projects;
