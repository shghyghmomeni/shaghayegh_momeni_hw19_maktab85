import React from "react";
import styled from "styled-components";

//styles
const InputStyle = styled.input`
  padding: 10px 15px;
  border: 1px solid #fff;
  border-radius: 5px;
`;

function Input({ type, placeholder }) {
  return <InputStyle type={type} placeholder={placeholder} />;
}
export default Input;
