import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExp: ({ description, amt, date }) => {},
  delExp: (id) => {},
  updateExp: (id, { description, amt, date }) => {},
});

const ExpensesContextProvider = ({ children }) => {
  useReducer();

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
