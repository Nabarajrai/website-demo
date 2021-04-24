import React from "react";
import "../styles/blog.css";

const blog = ({ title, description, image, subtitle, subdescription }) => {
  return (
    <div className="blog-header">
      <div className="blog-image-section">
        <img className="img-fluid" src={image} alt={title} />
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
