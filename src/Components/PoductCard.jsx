import React from "react";
import "./ProductCard.css";
const PoductCard = ({ img, title, link }) => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={img} alt={title} />
      </div>
      <div className="product-title">
        <span>{title}</span>
      </div>
      <div className="seemore-product">
        <a href={link}>Détails</a>
      </div>
    </div>
  );
};

export default PoductCard;
