import React from "react";
import aboutImage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENT</h1>
        <p>
          Lorem ipsum dolar sit amet consectetur adispisicinf elit. Ipsa eum cum
          expedita. Voluptuas ratione beatae sunt incidunt , in delectus
          doloremque aliquid , iure rempora ad nobis.
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
    </div>
  );
}

export default About;
