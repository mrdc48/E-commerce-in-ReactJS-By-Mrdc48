import React from "react";

export default function CartData({ cartItem }) {
  const { name, quantity } = cartItem;

  return (
    <div>
      <h1>{name}</h1>
      <h1>{quantity}</h1>
    </div>
  );
}
