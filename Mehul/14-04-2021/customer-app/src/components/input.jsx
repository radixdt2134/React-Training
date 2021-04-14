import React from "react";

const Input = ({ name, label, error, onChange, value }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      ></input>      
      {error && <div className="alert alert-danager">{error}</div>}
    </div>
  );
};

export default Input;
