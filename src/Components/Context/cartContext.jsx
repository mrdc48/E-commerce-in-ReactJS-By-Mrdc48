import React, { createContext, useEffect, useState, useReducer } from "react";
import { createAction } from "../FirestoreForm/reuder.utils";

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

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_COUNT: "SET_CART_COUNT",
  SET_CART_TOTAL: "SET_CART_TOTAL",
};

const INITIAL_STATE = {
  cartTotal: 0,
  cartItems: [],
  cartCount: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error("an unhandled type");
  }
};

export const CartUserProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0);
  const [{ cartItems, cartCount, cartTotal }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  // useEffect(() => {
  //   const count = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity,
  //     0
  //   );
  //   setCartCount(count);
  // }, [cartItems]);

  // useEffect(() => {
  //   const newCartTotal = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
  //     0
  //   );
  //   setCartTotal(newCartTotal);
  // }, [cartItems]);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemCart = (productRemove) => {
    const newCartItems = removeProductCart(cartItems, productRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (productClear) => {
    const newCartItems = clearProductCart(cartItems, productClear);
    updateCartItemsReducer(newCartItems);
  };

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
