import React, { useContext } from "react";
import { CartUserContext } from "../Context/cartContext";
import CartData from "./CartData";

export default function CartProducts() {
  const { cartItems } = useContext(CartUserContext);
  return (
    <div>
      {cartItems.map((cartItem) => (
        <CartData key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
}
