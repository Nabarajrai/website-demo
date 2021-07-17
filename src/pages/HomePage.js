import React from "react";
import Slick from "../components/Slick";
import Description from "../components/Description";
import Trending from "../components/Trending";
import Promo from "../components/Promo";
import "../styles/homePage.css";

//it shows shame class name due to time(less time).I mean I haven't given proper name convinence of image.and I have aslo incuded some name like image name
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
import bestImage1 from "../images/bestselling/p1.jpg";
import bestImage2 from "../images/bestselling/p9.jpg";
import bestImage3 from "../images/bestselling/p2.jpg";
import bestImage4 from "../images/bestselling/p4.jpg";
import bestImage5 from "../images/bestselling/p5.jpg";
import bestImage6 from "../images/bestselling/p6.jpg";
import bestImage7 from "../images/bestselling/p7.jpg";
import bestImage8 from "../images/bestselling/p8.jpg";
import bestImage1d from "../images/bestselling/product-02.jpg";
import bestImage2d from "../images/bestselling/product-46.jpg";
import bestImage3d from "../images/bestselling/product.jpg";
import bestImage4d from "../images/bestselling/product-16.jpg";
import bestImage5d from "../images/bestselling/product-18.jpg";
import bestImage6d from "../images/bestselling/product-19.jpg";
import bestImage7d from "../images/bestselling/product-33.jpg";
import bestImage8d from "../images/bestselling/product-41.jpg";

const HomePage = () => {
  return (
    <div>
      <Slick />
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
      <div className="Trending">
        <div className="Trending__title">
          <h1 className="Trending_title--h1">TRENDING</h1>
          <p className="Trending__title--p">TOP VIEW IN THIS WEEK</p>
        </div>

        <div className="Trending__grid">
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
      <div className="Promo-grid">
        <Promo
          title=" 5O% OFF"
          description="FALL WINTER CLEARENCE SALES"
          image={promo1}
        />
        <Promo title="SUMMAR 2018" description="NEW ARRIVALS" image={promo2} />
        <Promo title="NEW COLLECTION" description="HANDBAGS" image={promo3} />
      </div>

      <div className="Bestselling">
        <div className="Bestselling__header">
          <h3>BEST SELLER</h3>
          <h5>TOP SALE IN THIS WEEK</h5>
        </div>
        <div className="bestselling-grid">
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage1}
            image2={bestImage1d}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage2}
            image2={bestImage2d}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage3}
            image2={bestImage3d}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage4}
            image2={bestImage4d}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage5}
            image2={bestImage5d}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage6}
            image2={bestImage6d}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage7}
            image2={bestImage7d}
          />
          <Trending
            title="TSHIRT"
            description="Flared Shift Dress"
            price="$12"
            image={bestImage8}
            image2={bestImage8d}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
