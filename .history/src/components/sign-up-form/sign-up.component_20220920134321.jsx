const signUpForm = () => {
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form>
        <label>Display Name:</label>
        <input type="text" required />

        <label>Email:</label>
        <input required type="email"/>

        <label>Passwrod:</label>
        <input required type="text"/>

        <label>Confirm Password:</label>
        <input required />
      </form>
    </div>
  );
};
