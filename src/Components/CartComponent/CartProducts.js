import React, { useContext } from "react";
import { CartUserContext } from "../Context/cartContext";
// import CartData from "./CartData";
import "./cartIcon.scss";

export default function CartProducts() {
  const {
    cartItems,
    addItemToCart,
    removeItemCart,
    clearItemFromCart,
    cartTotal,
  } = useContext(CartUserContext);

  return (
    <div className="shop-container">
      {cartItems.map((cartItem) => {
        const { name, quantity, imageUrl, price, id } = cartItem;
        const increamentData = () => addItemToCart(cartItem);
        const decrementData = () => removeItemCart(cartItem);
        const clearData = () => clearItemFromCart(cartItem);
        return (
          <div className="product-card-container" key={id}>
            <img src={imageUrl} alt="" />
            <div className="footer">
              <span className="name">{name}</span>
              <span className="price">
                {quantity} X {price}
              </span>
              <span onClick={increamentData}>+</span>
              <span onClick={decrementData}>-</span>
              <span onClick={clearData}>remove</span>
              <span>Total: ${cartTotal}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
