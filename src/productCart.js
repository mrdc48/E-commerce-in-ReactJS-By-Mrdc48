import React from "react";
import "./product.style.scss";
export default function ProductCart({ product }) {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button> add to cart</button>
    </div>
  );
}
