import React from "react";
// import { useReducer } from "react";
// import { ExpensesReducer } from "../reducer";

const ExpensesContext = React.createContext();

// function ExpensesContextProvider({ children }) {
//   const [ExpensesList, setExpensesList] = useReducer(ExpensesReducer, []);
//   return (
//     <ExpensesContext.Provider value={{ ExpensesList, setExpensesList }}>
//       {children}
//     </ExpensesContext.Provider>
//   );
// }
// export default ExpensesContextProvider;

export default ExpensesContext;
