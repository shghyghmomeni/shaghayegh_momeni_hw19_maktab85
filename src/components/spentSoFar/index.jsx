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
  background-color: #cce5ff;
  color: #004085;
`;

function SpentSoFar({ cost }) {
  return (
    <MyDiv>
      <h4>Spent So Far : ${cost}</h4>
    </MyDiv>
  );
}
export default SpentSoFar;
