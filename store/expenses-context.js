import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExp: ({ description, amt, date }) => {},
  delExp: (id) => {},
  updateExp: (id, { description, amt, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
    case "UPDATE":
    case "DELETE":
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  useReducer();

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
