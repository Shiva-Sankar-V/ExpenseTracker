import { createContext, useReducer } from "react";

const Dummy_Expenses = [
  {
    id: "e1",
    description: "Groceries",
    amt: 2504,
    date: new Date("2023-04-01"),
  },
  {
    id: "e2",
    description: "Monitor",
    amt: 8571,
    date: new Date("2023-04-09"),
  },
  {
    id: "e3",
    description: "Blinkit",
    amt: 284,
    date: new Date("2023-05-01"),
  },
  {
    id: "e4",
    description: "Vegetables",
    amt: 345,
    date: new Date("2023-05-15"),
  },
  {
    id: "e5",
    description: "Mobile Recharge",
    amt: 800,
    date: new Date("2023-05-18"),
  },
  {
    id: "e6",
    description: "Groceries",
    amt: 2504,
    date: new Date("2023-06-07"),
  },
  {
    id: "e7",
    description: "Monitor",
    amt: 8571,
    date: new Date("2023-06-09"),
  },
  {
    id: "e8",
    description: "Blinkit",
    amt: 284,
    date: new Date("2023-06-09"),
  },
  {
    id: "e9",
    description: "Vegetables",
    amt: 345,
    date: new Date("2023-06-11"),
  },
  {
    id: "e10",
    description: "Mobile Recharge",
    amt: 800,
    date: new Date("2023-06-12"),
  },
  {
    id: "e11",
    description: "Monitor",
    amt: 8571,
    date: new Date("2023-06-13"),
  },
  {
    id: "e12",
    description: "Blinkit",
    amt: 284,
    date: new Date("2023-06-13"),
  },
  {
    id: "e13",
    description: "Vegetables",
    amt: 345,
    date: new Date("2023-06-13"),
  },
];

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
  const [expensesState, dispatch] = useReducer(expensesReducer, Dummy_Expenses);

  const addExp1 = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const delExp1 = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExp1 = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const val = {
    expenses: expensesState,
    addExp: addExp1,
    updateExp: updateExp1,
    delExp: delExp1,
  };

  return (
    <ExpensesContext.Provider value={val}>{children}</ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
