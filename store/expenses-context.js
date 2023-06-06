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
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
    case "DELETE":
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer);

  const addExp = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const delExp = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExp = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
