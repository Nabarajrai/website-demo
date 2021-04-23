import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckPickup } from "@fortawesome/free-solid-svg-icons/faTruckPickup";
import "../styles/follow.css";

const follow = () => {
  return (
    <div className="follow">
      <div className="follow-title">
        <h1>@ FOLLOW US ON</h1>
        <h5>INSTAGRAM</h5>
      </div>
      <div className="follow-grid">
        <div className="follow-flex">
          <div className="follow-icon">
            <FontAwesomeIcon icon={faTruckPickup} />
          </div>
          <div className="follow-description">
            <h3>FREE SHIPPING</h3>
            <p>Free shiping on all US order above $99</p>
          </div>
        </div>
        <div className="follow-flex">
          <div className="follow-icon">
            <FontAwesomeIcon icon={faTruckPickup} />
          </div>

          <div className="follow-description">
            <h3>FREE SHIPPING</h3>
            <p>Free shiping on all US order above $99</p>
          </div>
        </div>
        <div className="follow-flex">
          <div className="follow-icon">
            <FontAwesomeIcon icon={faTruckPickup} />
          </div>
          <div className="follow-description">
            <h3>FREE SHIPPING</h3>
            <p>Free shiping on all US order above $99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default follow;
