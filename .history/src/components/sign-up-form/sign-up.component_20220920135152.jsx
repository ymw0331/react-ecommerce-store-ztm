import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(default)

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name:</label>
        <input required type="text" />

        <label>Email:</label>
        <input required type="email" />

        <label>Passwrod:</label>
        <input required type="password" />

        <label>Confirm Password:</label>
        <input required type="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
