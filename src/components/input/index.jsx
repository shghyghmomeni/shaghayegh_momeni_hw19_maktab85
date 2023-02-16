import React from "react";
import styled from "styled-components";

//styles
const InputStyle = styled.input`
  padding: 10px 15px;
  border: 1px solid #fff;
  border-radius: 5px;
`;

function Input({ name, type, placeholder, onchange }) {
  return (
    <InputStyle
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onchange}
    />
  );
}
export default Input;
