import { useContext } from "react";
import { ReactComponent as Svg } from "../Assets/shopping-bag.svg";
import "./cartIcon.scss";
import { CartUserContext } from "../Context/cartContext";

export default function CartIcon() {
  const { cartCount } = useContext(CartUserContext);
  return (
    <div className="cart-icon-container">
      <Svg className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}
