import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navgation.scss";

export default function Nav() {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          Dc
        </Link>
        <Link to="shop" className="logo-container">
          shop
        </Link>
        <Link to="sign" className="logo-container">
          sign in
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
}
