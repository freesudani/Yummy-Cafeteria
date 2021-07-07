import React from "react";
import aboutImage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          asperiores atque doloremque, architecto quibusdam possimus rerum
          similique corporis vero debitis dolor culpa natus ullam neque tempore
          saepe consequuntur reiciendis aspernatur.
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
