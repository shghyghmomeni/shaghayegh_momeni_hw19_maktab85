import { createContext, useReducer } from "react";
export const ExpensesContext = createContext();

const ExpensesContextProvider = (props) => {
  const [state, dispatch] = useReducer(ExpensesReducer, []);
  return (
    <ExpensesContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
