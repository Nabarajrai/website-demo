import React from "react";
import Slider from "react-slick";
import slide1 from "../images/slide/slide-01.jpg";
import slide2 from "../images/slide/slide-02.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "../components/Slider";

const Slick = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="Slick">
      <Slider {...settings}>
        <Sliders
          title="Multipurpose"
          description1="30 skins,powerful features,great support,exclusive offer"
          description="Premium Html template"
          img={slide1}
          color="blue"
          color1="black"
        />
        <Sliders
          title="Ready to"
          description1="optimized for speed website that sell"
          description="Use Unque demos"
          img={slide2}
          color="white"
          color1="white"
        />
        <Sliders
          title="Oberlo"
          description1="Oberlo allows you to easily import"
          description="Find product for shop store"
          img={slide1}
          color="blue"
          color1="black"
        />
      </Slider>
    </div>
  );
};

export default Slick;
