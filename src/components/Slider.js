import React from "react";
import { Button } from "reactstrap";
import Section from "../components/section";
import "../styles/slider.css";
const Slider = ({ title, color, color1, img, description1, description }) => {
  return (
    <Section container={false}>
      <div className="sliders">
        <div className="items">
          <div>
            <h3
              style={{ color: color && color, fontSize: "45px" }}
              className="title"
            >
              {title}
            </h3>
            <h1
              style={{
                color: color1 && color1,
                fontSize: "80px",
                maxWidth: "600px",
                margin: "auto",
                justifyContent: "center",
              }}
            >
              {description}
            </h1>
            <p style={{ color: color1 && color1 }}>{description1}</p>
            <Button color="primary">Shop Now !</Button>
          </div>
        </div>
        <div className="slider-image">
          <img className="img-fluid" src={img} />
        </div>
      </div>
    </Section>
  );
};

export default Slider;
