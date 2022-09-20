const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <label>{label}}:</label>
      <input
        required
        type="text"
        onChange={changeHandler}
        name="displayName"
        value={value}
      />
    </div>
  );
};
