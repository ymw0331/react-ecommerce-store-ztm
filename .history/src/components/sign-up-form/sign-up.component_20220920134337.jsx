const signUpForm = () => {
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form>
        <label>Display Name:</label>
        <input required type="text" />

        <label>Email:</label>
        <input required type="email" />

        <label>Passwrod:</label>
        <input required type="password" />

        <label>Confirm Password:</label>
        <input required type="password" />
      </form>
    </div>
  );
};
