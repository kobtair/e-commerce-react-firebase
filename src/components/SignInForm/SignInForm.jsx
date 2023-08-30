import {
  signInWithGooglePopup,
  signInUserAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import "./sign-in-form.styles.scss";
import { useState } from "react";

export default function SignInForm() {
  const defaultForm = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState(defaultForm);
  const { email, password } = form;

  const logGoogle = async () => {
    await signInWithGooglePopup();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInUserAuthWithEmailAndPassword(email, password);
      setForm(defaultForm);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Wrong Password");
      } else if (error.code === "auth/user-not-found") {
        alert("No User Found");
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an Account?</h2>
      <span>Sign In using Email and Password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="button-group">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={logGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
}
