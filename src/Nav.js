import React, { Fragment, useContext } from "react";
import { UserContext } from "./context";
import { Outlet, Link } from "react-router-dom";
import "./Navgation.scss";
import { signOutUser } from "./firebase.utils";

export default function Nav() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          Dc
        </Link>
        <Link to="shop" className="logo-container">
          shop
        </Link>
        {currentUser ? (
          <span className="logo-container" onClick={signOutHandler}>
            sign out
          </span>
        ) : (
          <Link to="sign" className="logo-container">
            sign in
          </Link>
        )}
      </div>
      <Outlet />
    </Fragment>
  );
}
