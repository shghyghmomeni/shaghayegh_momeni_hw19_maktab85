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
  background-color: #e2e3e5;
  color: #383d41;
`;

function Budget({ cost }) {
  return (
    <MyDiv>
      <h4>Budget : ${cost}</h4>
    </MyDiv>
  );
}
export default Budget;
