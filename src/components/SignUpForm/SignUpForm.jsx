import { useState } from "react";
import {
  createUserAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button";
import FormInput from "../form-input/FormInput";

import {SignUpContainer} from "./sign-up-form.styles.jsx";

export default function SignUpForm() {
  const defaultForm = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [form, setForm] = useState(defaultForm);
  const { displayName, email, password, confirmPassword } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const { user } = await createUserAuthWithEmailAndPassword(
          email,
          password
        );
        await createUserDocumentFromAuth(user, { displayName });
        setForm(defaultForm);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("error creating user, email already in use");
        } else {
          console.log("error creating user", error.message);
        }
      }
    } else {
      alert("passwords do not match");
      return;
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign Up using Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit">Sign up</Button>
      </form>
    </SignUpContainer>
  );
}
