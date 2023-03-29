import { async } from "@firebase/util";
import { confirmPasswordReset } from "firebase/auth";
import { useState } from "react";
import Form from "./form.js";
import {
  createAuthUserWithEmailAndPassword,
  createUser,
} from "./firebase.utils";

const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Signup() {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password doesnt match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUser(user, { displayName });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("same can't be created");
      } else {
        console.log("encounterd an error", error);
      }
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <Form
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <Form
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <Form
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Form
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign-Up</button>
      </form>
    </div>
  );
}
