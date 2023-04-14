import React, { createContext, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const CartUserContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
});
export const CartUserProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const value = { cartItems, addItemToCart };
  return (
    <CartUserContext.Provider value={value}>
      {children}
    </CartUserContext.Provider>
  );
};
