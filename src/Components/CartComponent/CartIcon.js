import React from "react";
import { ReactComponent as Svg } from "../Assets/shopping-bag.svg";
import "./cartIcon.scss";

export default function CartIcon() {
  return (
    <div className="cart-icon-container">
      <Svg className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
