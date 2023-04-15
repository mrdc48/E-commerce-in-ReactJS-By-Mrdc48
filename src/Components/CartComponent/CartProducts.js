import React, { useContext } from "react";
import { CartUserContext } from "../Context/cartContext";
import CartData from "./CartData";
import "./cartIcon.scss";

export default function CartProducts() {
  const { cartItems } = useContext(CartUserContext);
  return (
    <div className="shop-container">
      {cartItems.map((cartItem) => (
        <CartData key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
}
