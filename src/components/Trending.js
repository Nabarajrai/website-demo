import React, { useState } from "react";
import { Button } from "reactstrap";

import "../styles/trending.css";
const Trending = ({ title, description, price, image, image2 }) => {
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  return (
    <div
      className="trending"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="img-fluid "
        src={mouseOver ? image2 : image}
        alt={title}
      />
      <div className="des-items">
        <p>{title}</p>
        <h3>{description}</h3>
        <h4>{price}</h4>
        {mouseOver && <Button color="primary">ADD TO CART</Button>}
      </div>
    </div>
  );
};

export default Trending;
