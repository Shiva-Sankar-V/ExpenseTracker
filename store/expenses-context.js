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
    date: new Date("2023-04-12"),
  },
  {
    id: "e4",
    description: "Vegetables",
    amt: 345,
    date: new Date("2023-04-15"),
  },
  {
    id: "e5",
    description: "Mobile Recharge",
    amt: 800,
    date: new Date("2023-04-18"),
  },
  {
    id: "e6",
    description: "Groceries",
    amt: 2504,
    date: new Date("2023-04-01"),
  },
  {
    id: "e7",
    description: "Monitor",
    amt: 8571,
    date: new Date("2023-04-09"),
  },
  {
    id: "e8",
    description: "Blinkit",
    amt: 284,
    date: new Date("2023-04-12"),
  },
  {
    id: "e9",
    description: "Vegetables",
    amt: 345,
    date: new Date("2023-04-15"),
  },
  {
    id: "e10",
    description: "Mobile Recharge",
    amt: 800,
    date: new Date("2023-04-18"),
  },
  {
    id: "e11",
    description: "Monitor",
    amt: 8571,
    date: new Date("2023-04-09"),
  },
  {
    id: "e12",
    description: "Blinkit",
    amt: 284,
    date: new Date("2023-04-12"),
  },
  {
    id: "e13",
    description: "Vegetables",
    amt: 345,
    date: new Date("2023-04-15"),
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
    case "DELETE":
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, Dummy_Expenses);

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
