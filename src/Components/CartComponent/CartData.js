import React from "react";
import "./cart.styles.scss";
export default function CartData({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X {price}
        </span>
      </div>
    </div>
  );
}
