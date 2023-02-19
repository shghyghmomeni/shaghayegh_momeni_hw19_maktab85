import React from "react";
import "./style.css";
function Input(props) {
  const { label, name, type, id, placeholder, required } = props;
  return (
    <div className="input__field">
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
export default Input;
