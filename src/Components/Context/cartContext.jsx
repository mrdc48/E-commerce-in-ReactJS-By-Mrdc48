import React, { createContext, useEffect, useState } from "react";

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

const removeProductCart = (cartItems, productRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearProductCart = (cartItems, productClear) =>
  cartItems.filter((cartItem) => cartItem.id !== productClear.id);
export const CartUserContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});
export const CartUserProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(count);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const removeItemCart = (productRemove) =>
    setCartItems(removeProductCart(cartItems, productRemove));

  const clearItemFromCart = (productClear) =>
    setCartItems(clearProductCart(cartItems, productClear));

  const value = {
    cartItems,
    addItemToCart,
    cartCount,
    removeItemCart,
    clearItemFromCart,
    cartTotal,
  };
  return (
    <CartUserContext.Provider value={value}>
      {children}
    </CartUserContext.Provider>
  );
};
