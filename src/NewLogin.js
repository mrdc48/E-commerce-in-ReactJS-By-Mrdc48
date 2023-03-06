import { async } from "@firebase/util";
import { useState, useContext } from "react";
import { confirmPasswordReset } from "firebase/auth";
import { UserContext } from "./context.jsx";
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
  const { setCurrentUser } = useContext(UserContext);

  const SinInGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUser(user);
  };

  const resetFiled = () => {
    setFormFields(defaultFields);
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
      setCurrentUser(response);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong password");
          break;
        case "auth/user-not-found":
          alert("incorrect email");
          break;

        default:
          console.log(error);
      }
    }
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <button type="submit">Sign-In</button>
          <button type="button" buttontype="google" onClick={SinInGoogle}>
            Sign-In With Google
          </button>
        </div>
      </form>
    </div>
  );
}
