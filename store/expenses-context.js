import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExp: ({ description, amt, date }) => {},
  setExp: (expenses) => {},
  delExp: (id) => {},
  updateExp: (id, { description, amt, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "SET":
      return action.payload;

    case "UPDATE":
      const updatableExpIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExp = state[updatableExpIndex];
      const updatedItem = { ...updatableExp, ...action.payload.data };
      const updatedExp = [...state];
      updatedExp[updatableExpIndex] = updatedItem;
      return updatedExp;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const addExp1 = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const delExp1 = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const setExp1 = (expenses) => {
    dispatch({ type: "SET", payload: expenses });
  };

  const updateExp1 = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const val = {
    expenses: expensesState,
    addExp: addExp1,
    updateExp: updateExp1,
    setExp: setExp1,
    delExp: delExp1,
  };

  return (
    <ExpensesContext.Provider value={val}>{children}</ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
