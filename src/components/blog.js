import React from "react";
import bestImage1 from "../images/bestselling/p1.jpg";
import "../styles/blog.css";

const blog = ({ title, description, image, subtitle, subdescription }) => {
  return (
    <div className="blog-header">
      <div className="blog-image-section">
        <img className="img-fluid" src={image} />
      </div>
      <div className="blog-description-section">
        <h4>{title}</h4>
        <h1>{subtitle}</h1>
        <p>{description}</p>
        <span>{subdescription}</span>
      </div>
    </div>
  );
};

export default blog;
