import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  background-color: #007bff;
  heigth: 20px;
`;

function Button({ text, onClickFunc }) {
  return <MyButton onClick={onClickFunc}>{text}</MyButton>;
}
export default Button;
