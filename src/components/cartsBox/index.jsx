import React, { useContext, useEffect } from "react";
import Cart from "../cart";
import styled from "styled-components";
import axios from "axios";
import { ExpensesContext } from "../../context";

//styles
const CartsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`;
const fetchExpenses = () =>
  axios.get("https://63e7b432cbdc5658737be69b.mockapi.io/expenses");

function CartBox() {
  const { ExpensesList, setExpensesList } = useContext(ExpensesContext);
  console.log("ExpensesList", ExpensesList);

  useEffect(() => {
    setExpensesList({ type: "GET" });
  }, []);

  // const fetchExpenses = () =>
  //   axios
  //     .get("https://63e7b432cbdc5658737be69b.mockapi.io/expenses")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.error(err));
  // fetchExpenses();
  // async function fetchData() {
  //   try {
  //     const response = await axios.get(
  //       "https://63e7b432cbdc5658737be69b.mockapi.io/expenses"
  //     );
  //     console.log(response.data);
  //   } catch (err) {
  //     const errorMessage = "Error: " + err.message;
  //     console.log(errorMessage);
  //   }
  // }
  // fetchData();
  return (
    <CartsDiv>
      {
        // res.data.map((item) => {
        //   <Cart title={item.title} cost={item.cost} id={item.id} />;
        // })
      }
    </CartsDiv>
  );
}
export default CartBox;
