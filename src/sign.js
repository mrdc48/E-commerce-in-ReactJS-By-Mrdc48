import { signInWithGooglePopup, createUser } from "./firebase.utils.js";
import React from "react";
import Signup from "./Signup.js";

function sign() {
  const Data = async () => {
    const { user } = await signInWithGooglePopup();
    const userRef = await createUser(user);
  };
  return (
    <div>
      <p>sign in page </p>
      <button onClick={Data}> sing in </button>
      <Signup />
    </div>
  );
}
export default sign;
