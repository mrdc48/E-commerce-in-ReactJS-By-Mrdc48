import { async } from "@firebase/util";
import { confirmPasswordReset } from "firebase/auth";
import { useState } from "react";
import Form from "./form.js";
import {
  signInWithGooglePopup,
  createUser,
  signIncreateAuthUserWithEmailAndPassword,
} from "./firebase.utils";

const defaultFields = {
  // displayName: "",
  email: "",
  password: "",
  // confirmPassword: "",
};

export default function NewLogin() {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const SinInGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUser(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signIncreateAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {}
  };

  return (
    <div>
      <h1>Sign in with your email and password</h1>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Sign-In</button>
        <button buttonType="google" onClick={SinInGoogle}>
          Sign-In With Google
        </button>
      </form>
    </div>
  );
}
