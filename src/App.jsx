import "./App.css";

import TabsBox from "./components/tabsBox";
import ExpensesMain from "./components/expensesMain";
import AddExpensesMain from "./components/addExpenseMain";
import ExpensesContextProvider from "./context";

function App() {
  return (
    <ExpensesContextProvider>
      <div className="App">
        <h2>My Budget Planner</h2>
        <TabsBox />
        <ExpensesMain />
        <AddExpensesMain />
      </div>
    </ExpensesContextProvider>
  );
}

export default App;
