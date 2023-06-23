import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

const AllExpense = () => {
  const expCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expCtx.expenses}
      expensesPeriod="Total"
      fallBackText="No expenses found!"
    />
  );
};

export default AllExpense;
