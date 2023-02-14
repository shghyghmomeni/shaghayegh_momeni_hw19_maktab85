import "./App.css";

import TabsBox from "./components/tabsBox";
import ExpensesMain from "./components/expensesMain";
import AddExpensesMain from "./components/addExpenseMain";

function App() {
  return (
    <div className="App">
      <h2>My Budget Planner</h2>
      <TabsBox />
      <ExpensesMain />
      <AddExpensesMain />
    </div>
  );
}

export default App;
