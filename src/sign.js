import { signInWithGooglePopup, createUser } from "./firebase.utils.js";
import React from "react";
function sign() {
  const Data = async () => {
    const { user } = await signInWithGooglePopup();
    const userRef = await createUser(user);
  };
  return (
    <div>
      <p>sign in page </p>
      <button onClick={Data}> sing in </button>
    </div>
  );
}
export default sign;
