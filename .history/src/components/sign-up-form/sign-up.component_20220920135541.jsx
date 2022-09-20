import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name } = event;
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name:</label>
        <input
          required
          type="text"
          onChange={handleChange}
          name={displayName}
        />

        <label>Email:</label>
        <input 
        required type="email" 
        onChange={handleChange} name={email} />

        <label>Passwrod:</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name={password}
        />

        <label>Confirm Password:</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
