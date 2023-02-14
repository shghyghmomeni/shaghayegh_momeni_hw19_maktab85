const ExpensesReducer = (state, action) => {
  switch (action.type) {
    case "READ_EXPENSES":
      return action.payload;
    case "ADD_EXPENSE":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default ExpensesReducer;

// case "DELETE": {
//   return state.filter((t) => t.id !== action.payload.id);
// }
