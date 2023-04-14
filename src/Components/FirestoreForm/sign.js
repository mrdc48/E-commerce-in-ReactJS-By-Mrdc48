import React from "react";
import Signup from "./Signup.js";
import NewLog from "./NewLogin.js";

function sign() {
  return (
    <div
      style={{
        display: "flex",
        margin: "30px auto ",
        justifyContent: "space-evenly",
      }}
    >
      <NewLog />
      <Signup />
    </div>
  );
}
export default sign;
