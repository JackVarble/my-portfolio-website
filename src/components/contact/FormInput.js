import React from "react";

const FormInput = ({ label, errorMessage, onChange, id, ...inputProps }) => {
  return (
    <div className="form-control">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
