import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../images/slide/slide-01.jpg";
import slide2 from "../images/slide/slide-02.jpg";
import SlideImage from "../components/Slider";
import "../styles/homePage.css";
import image1 from "../images/promo/index-promo-img-01.jpg";
import image2 from "../images/promo/index-promo-img-02.jpg";
import image3 from "../images/promo/index-promo-img-03.jpg";
import image4 from "../images/promo/index-promo-img-04.jpg";
import image5 from "../images/promo/index-promo-img-05.jpg";
import image6 from "../images/promo/index-promo-img-06.jpg";
import product1 from "../images/product/product-03.jpg";
import productflip from "../images/product/product-03-02.jpg";
import product2 from "../images/product/product-43.jpg";
import productflip2 from "../images/product/product-43-03.jpg";
import product3 from "../images/product/product-27-01.jpg";
import productflip3 from "../images/product/product-27.jpg";
import product4 from "../images/product/product-01-04.jpg";
import productflip4 from "../images/product/product-01-02.jpg";
import product5 from "../images/product/product-26.jpg";
import productflip5 from "../images/product/product-26-01.jpg";
import product6 from "../images/product/product-45.jpg";
import productflip6 from "../images/product/product-45-01.jpg";
import product7 from "../images/product/product-14.jpg";
import productflip7 from "../images/product/product-14-01.jpg";
import product8 from "../images/product/product-15.jpg";
import productflip8 from "../images/product/product-15-01.jpg";
import promo1 from "../images/promos/index-promo-img-07.jpg";
import promo2 from "../images/promos/index-promo-img-08.jpg";
import promo3 from "../images/promos/index-promo-img-09.jpg";
import Description from "../components/Description";
import Trending from "../components/Trending";
import Promo from "../components/Promo";
import bestImage1 from "../images/bestselling/p1.jpg";
import bestImage2 from "../images/bestselling/p9.jpg";
import bestImage3 from "../images/bestselling/p3.jpg";
import bestImage4 from "../images/bestselling/p4.jpg";
import bestImage5 from "../images/bestselling/p5.jpg";
import bestImage6 from "../images/bestselling/p6.jpg";
import bestImage7 from "../images/bestselling/p7.jpg";
import bestImage8 from "../images/bestselling/p8.jpg";
import Blog from "../components/blog";
import blog1 from "../images/blog/b1.jpg";
import blog2 from "../images/blog/b2.jpg";
import blog3 from "../images/blog/b3.jpg";
import Follow from "../components/follow";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div>
      <div className="slider">
        <Slider {...settings}>
          <SlideImage
            title="Multipurpose"
            description1="30 skins,powerful features,great support,exclusive offer"
            description="Premium Html template"
            img={slide1}
            color="blue"
            color1="black"
          />
          <SlideImage
            title="Ready to"
            description1="optimized for speed website that sell"
            description="Use Unque demos"
            img={slide2}
            color="white"
            color1="white"
          />
          <SlideImage
            title="Oberlo"
            description1="Oberlo allows you to easily import"
            description="Find product for shop store"
            img={slide1}
            color="blue"
            color1="black"
          />
        </Slider>
      </div>
      <div className="description-grid">
        <Description className="sale" title="Sale" image={image1} />
        <Description className="new" title="New" image={image2} />
        <Description className="women" title="Women" image={image3} />
        <Description className="men" title="Men" image={image4} />
        <Description
          className="accessories"
          title="Accessories"
          image={image5}
        />
        <Description className="shoes" title="Shoes" image={image6} />
      </div>
      <div>
        <div className="trending-description">
          <h1>TRENDING</h1>
          <p>TOP VIEW IN THIS WEEK</p>
        </div>

        <div className="trending-grid">
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={product1}
            image2={productflip}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={product2}
            image2={productflip2}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={product3}
            image2={productflip3}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={product4}
            image2={productflip4}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={product5}
            image2={productflip5}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={product6}
            image2={productflip6}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={product7}
            image2={productflip7}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={product8}
            image2={productflip8}
          />
        </div>
      </div>
      <div className="promo-grid">
        <Promo
          title="GET UP TO 5O% OFF"
          description="FALL WINTER CLEARENCE SALES"
          image={promo1}
        />
        <Promo title="SUMMAR 2018" description="NEW ARRIVALS" image={promo2} />
        <Promo title="NEW COLLECTION" description="HANDBAGS" image={promo3} />
      </div>
      <div className="bestselling-header">
        <div className="selling-description">
          <h3>BEST SELLER</h3>
          <h5>TOP SALE IN THIS WEEK</h5>
        </div>
        <div className="bestselling-grid">
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage1}
            image2={product1}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage2}
            image2={product2}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage3}
            image2={product3}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage4}
            image2={product4}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage5}
            image2={product5}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage6}
            image2={product6}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage7}
            image2={product7}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage8}
            image2={product8}
          />
        </div>
      </div>
      <div className="main-blog">
        <Blog
          image={blog1}
          title="FASHION"
          subtitle="DOLORE EU FUGIATNULLA PARIATUR"
          description="          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          subdescription="by ADRIAN on January 14, 2017"
        />
        <Blog
          image={blog2}
          title="FASHION"
          subtitle="DOLORE EU FUGIATNULLA PARIATUR"
          description="          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          subdescription="by ADRIAN on January 14, 2017"
        />
        <Blog
          image={blog3}
          title="FASHION"
          subtitle="DOLORE EU FUGIATNULLA PARIATUR"
          description="          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          subdescription="by ADRIAN on January 14, 2017"
        />
      </div>
      <Follow />
    </div>
  );
};

export default HomePage;
