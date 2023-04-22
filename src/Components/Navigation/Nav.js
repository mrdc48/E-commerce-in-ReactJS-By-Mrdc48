import React, { Fragment, useContext } from "react";
import { UserContext } from "../Context/context";
import { Outlet, Link } from "react-router-dom";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./Navgation.jsx";
import { signOutUser } from "../../Components/FirestoreForm/firebase.utils";
import CartIcon from "../CartComponent/CartIcon";
export default function Nav() {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">Home</LogoContainer>
        <NavLinks>
          <NavLink to="shop">shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              sign out
            </NavLink>
          ) : (
            <NavLink to="sign">sign in</NavLink>
          )}
          <NavLink to="CartProducts">
            <CartIcon />
          </NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}
