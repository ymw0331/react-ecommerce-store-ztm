const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <label className={`$(otherProps)`}>{label}:</label>
      <input {...otherProps} />
    </div>
  );
};


export default FormInput