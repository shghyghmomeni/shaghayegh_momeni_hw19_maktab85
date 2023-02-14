export const ExpensesReducer = async (state, action) => {
  switch (action.type) {
    case "GET": {
      try {
        const response = await axios.get(
          "https://63e7b432cbdc5658737be69b.mockapi.io/expenses"
        );
        return response.data;
      } catch (err) {
        const errorMessage = "Error: " + err.message;
        console.log(errorMessage);
      }
      // let res = await axios.get(
      //   "https://63e7b432cbdc5658737be69b.mockapi.io/expenses"
      // );
      // let { data } = res.data;
      // console.log("Show Result", data);
    }

    case "CREATE":
      return [
        ...state,
        {
          title: action.payload.title,
          cost: action.payload.cost,
          id: Date.now(),
        },
      ];

    case "DELETE": {
      return state.filter((t) => t.id !== action.payload.id);
    }

    default:
      return state;
  }
};
