import { signInWithGooglePopup, createUser } from "./firebase.utils.js";
import React from "react";
import Signup from "./Signup.js";
import NewLog from "./NewLogin.js";

function sign() {
  return (
    <div style={{ display: "flex", gridGap: "20px" }}>
      <NewLog />
      <Signup />
    </div>
  );
}
export default sign;
