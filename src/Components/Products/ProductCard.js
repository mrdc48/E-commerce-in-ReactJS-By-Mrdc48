import React, { useContext } from "react";
import "./product.style.scss";
import { CartUserContext } from "../Context/cartContext";
export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartUserContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button onClick={addProductToCart}>add to cart</button>
    </div>
  );
}
