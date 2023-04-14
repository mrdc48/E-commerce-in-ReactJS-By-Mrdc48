import React, { Fragment, useContext } from "react";
import { UserContext } from "../Context/context";
import { Outlet, Link } from "react-router-dom";
import "./Navgation.scss";
import { signOutUser } from "../../Components/FirestoreForm/firebase.utils";
import CartIcon from "../CartComponent/CartIcon";
export default function Nav() {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          Home
        </Link>
        <Link to="shop" className="logo-container">
          shop
        </Link>
        {currentUser ? (
          <span className="logo-container" onClick={signOutUser}>
            sign out
          </span>
        ) : (
          <Link to="sign" className="logo-container">
            sign in
          </Link>
        )}
        <Link to="CartProducts" className="logo-container">
          <CartIcon />
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
}
