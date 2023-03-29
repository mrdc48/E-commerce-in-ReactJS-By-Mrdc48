import React from "react";
import { ReactComponent as Svg } from "./shopping-bag.svg";

export default function Cart() {
  return (
    <div className="cart-icon-container">
      <Svg className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
}
