//Actions
export const ReadAllExpenses = (expenses) => {
  return { type: "READ_EXPENSES", expenses };
};
export const AddExpense = (newExpense) => {
  return { type: "ADD_EXPENSE", newExpense };
};
