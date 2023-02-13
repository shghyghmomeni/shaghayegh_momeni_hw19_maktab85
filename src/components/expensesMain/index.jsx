import React from "react";
import Input from "../input";
import CartsBox from "../cartsBox";
import styled from "styled-components";

//styles
const MainDiv = styled.div`
  width: 100%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  gap: 3%;
`;

function ExpensesMain() {
  return (
    <MainDiv>
      <h3>Expenses</h3>
      <Input type="search" placeholder="Type to search..." />
      <CartsBox />
    </MainDiv>
  );
}
export default ExpensesMain;
