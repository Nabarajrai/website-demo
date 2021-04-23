import React from "react";
import { Button } from "reactstrap";
import "../styles/description.css";

const Description = ({ image, className, title }) => {
  return (
    <div className={`product ${className}`}>
      <img src={image} className="img-fluid" alt={title} />
      <div className="product-content">
        <Button color="primary">{title}</Button>
      </div>
    </div>
  );
};

export default Description;
