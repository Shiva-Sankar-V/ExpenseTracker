import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

import { useContext, useEffect } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getReqDate } from "../util/date";
import { fetchExp } from "../util/http";

const RecentExpense = () => {
  const expCtx = useContext(ExpensesContext);

  useEffect(() => {
    fetchExp();
  }, []);

  const recentExp = expCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getReqDate(today, 7);
    return expense.date > date7DaysAgo;
  });
  return (
    <ExpensesOutput
      expenses={recentExp}
      expensesPeriod="Last 7 Days"
      fallBackText="No expenses registered in the last 7 days"
    />
  );
};

export default RecentExpense;

const styles = StyleSheet.create({});
