import React, { useState } from "react";
import Popup from "./Popup";
import { Button } from "reactstrap";
import Section from "../components/section";
import "../styles/slider.css";

const Slider = ({ title, color, color1, img, description1, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
    console.log("click");
  };
  return (
    <Section container={false}>
      <div className="Slider">
        <div className="Slider__items">
          <div className="Slider__description ">
            <h3
              style={{ color: color && color }}
              className="Slider__description--title-2"
            >
              {title}
            </h3>
            <h1
              className="Slider__description--title-1"
              style={{
                color: color1 && color1,
              }}
            >
              {description}
            </h1>
            <p
              className="Slider__description--paragraph"
              style={{ color: color1 && color1 }}
            >
              {description1}
            </p>
            <Button
              onClick={togglePopup}
              className="Slider__button"
              size="large"
              color="primary"
            >
              Shop Now !
            </Button>
            {isOpen && (
              <Popup
                content={
                  <>
                    <b>Call to Action demo</b>
                    <p>Welcome on CTA</p>
                  </>
                }
                handleClose={togglePopup}
              />
            )}
          </div>
        </div>
        <div className="Slider__image">
          <img className="img-fluid Slider__image--s1 " src={img} alt={title} />
        </div>
      </div>
    </Section>
  );
};

export default Slider;
