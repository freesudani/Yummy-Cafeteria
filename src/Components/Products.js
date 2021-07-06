import React from "react";
import Productbox from "./Productbox";
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";

function Products() {
  return (
    <div id="products">
      <h1>PICK YOUR MEAL</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea sunt
        ducimu
      </p>
      <div className="a-container">
        <Productbox image={pimage1} title="Large Burger" />
        <Productbox image={pimage2} title="LE B Burger" />
        <Productbox image={pimage2} title="Large Burger" />
      </div>
    </div>
  );
}

export default Products;
