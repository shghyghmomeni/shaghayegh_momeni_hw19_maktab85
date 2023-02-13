import React, { useContext } from "react";
import styled from "styled-components";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { ExpensesContext } from "../../context";

//styles
const CartDiv = styled.div`
  padding: 0 15px;
  border: 1px solid #f6f6f6;
  display: flex;
  justify-content: space-between;
  items-align: center;
  border-radius: 5px;
`;
const InternalDiv = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  items-align: center;
`;
const CostText = styled.p`
  display: flex;
  justify-content: center;
  items-align: center;
  background-color: #007bff;
  padding: 1px 5px;
  border: 0px solid #007bff;
  border-radius: 5px;
`;

function CartBox({ title, cost, id }) {
  const { setExpensesList } = useContext(ExpensesContext);

  const deleteHandler = (id) => {
    setExpensesList({ type: "DELETE", payload: { id } });
    console.log(id);
  };

  return (
    <div>
      <CartDiv>
        <p>{title}</p>
        <InternalDiv>
          <CostText>${cost}</CostText>
          <XCircleIcon
            onClick={() => deleteHandler(id)}
            style={{
              width: "24px",
              color: "white",
            }}
          />
        </InternalDiv>
      </CartDiv>
    </div>
  );
}
export default CartBox;
