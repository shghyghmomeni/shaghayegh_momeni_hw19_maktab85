import axios from "axios";
import { BASE_URL } from "../config/linksAPI";

export const GetAllExpenses = () => {
  axios.get(BASE_URL).then((res) => res.data); //????? should completed
};

export const AddExpenses = (titleInputValue, costInputValue) => {
  const newExpense = {
    title: titleInputValue,
    cost: costInputValue,
    id: Date.now(),
  };

  axios.post(BASE_URL, newExpense).then((res) => res.data);
};

// const fetchExpenses = () => axios.get();

// useEffect(() => {
//   setExpensesList({ type: "GET" });
// }, []);

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

// const fetchExpenses = () =>
//   axios
//     .get("https://63e7b432cbdc5658737be69b.mockapi.io/expenses")
//     .then((res) => console.log(res.data))
//     .catch((err) => console.error(err));
// fetchExpenses();
