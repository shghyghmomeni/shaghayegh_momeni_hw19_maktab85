import React from "react";
import Input from "../input";
import styled from "styled-components";
import Button from "../button";

//styles
const MainDiv = styled.div`
  width: 100%;
  margin-top: 2%;
  display: flex;
  flex-direction: row;
  gap: 3%;
`;
const InputDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

function saveToList() {}
function AddExpensesMain() {
  return (
    <div>
      <h3>Add Expenses</h3>
      <MainDiv>
        <InputDiv>
          <label style={{ marginBottom: "10px" }}>Name</label>
          <Input type="text" placeholder="Name" />
        </InputDiv>
        <InputDiv>
          <label style={{ marginBottom: "10px" }}>Cost</label>
          <Input type="text" placeholder="Cost" />
        </InputDiv>
        <Button text="Save" onClickFunc={saveToList} />
      </MainDiv>
    </div>
  );
}
export default AddExpensesMain;
