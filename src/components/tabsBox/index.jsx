import React from "react";
import styled from "styled-components";
import Budget from "../budget";
import Remaining from "../remaining";
import SpentSoFar from "../spentSoFar";

//styles
const TabsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3%;
`;

function TabsBox() {
  //object
  const budgetInfo = {
    budget: 2000,
    remaining: 1040,
    spentSoFar: 960,
  };

  return (
    <TabsDiv>
      <Budget cost={budgetInfo.budget} />
      <Remaining cost={budgetInfo.remaining} />
      <SpentSoFar cost={budgetInfo.spentSoFar} />
    </TabsDiv>
  );
}
export default TabsBox;
