import React from "react";
import "../styles/promo.css";

const Promo = ({ title, description, image }) => {
  return (
    <div className="Promo">
      <div className="Promo__image">
        <img className="img-fluid" src={image} alt={title} />
      </div>
      <div className="Promo__description">
        <h3>{description}</h3>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Promo;
