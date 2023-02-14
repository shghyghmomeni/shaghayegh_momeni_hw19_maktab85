import React from "react";
import Cart from "../cart";
import styled from "styled-components";

//styles
const CartsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`;

function CartBox() {
  return (
    <CartsDiv>
      <Cart />
    </CartsDiv>
  );
}
export default CartBox;
