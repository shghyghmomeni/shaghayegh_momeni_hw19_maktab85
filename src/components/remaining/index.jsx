import React from "react";
import styled from "styled-components";

//styles
const MyDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  padding-left: 15px;
  items-align: center;
  border-radius: 5px;
  background-color: #d4edda;
  color: #155724;
`;

function Remaining({ cost }) {
  return (
    <MyDiv>
      <h4>Remaining : ${cost}</h4>
    </MyDiv>
  );
}
export default Remaining;
