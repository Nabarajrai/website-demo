import React from "react";
import { Button } from "reactstrap";
import Section from "../components/section";
import "../styles/slider.css";
const Slider = ({ title, color, color1, img, description1, description }) => {
  return (
    <Section container={false}>
      <div className="sliders">
        <div className="items">
          <div className="sliders-description">
            <h3 style={{ color: color && color }} className="title">
              {title}
            </h3>
            <h1
              style={{
                color: color1 && color1,
              }}
            >
              {description}
            </h1>
            <p style={{ color: color1 && color1 }}>{description1}</p>
            <Button color="primary">Shop Now !</Button>
          </div>
        </div>
        <div className="slider-image">
          <img className="img-fluid" src={img} alt={title} />
        </div>
      </div>
    </Section>
  );
};

export default Slider;
