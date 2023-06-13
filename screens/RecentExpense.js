import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getReqDate } from "../util/date";

const RecentExpense = () => {
  const expCtx = useContext(ExpensesContext);

  const recentExp = expCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getReqDate(today, 7);
    return expense.date > date7DaysAgo;
  });
  return <ExpensesOutput expenses={recentExp} expensesPeriod="Last 7 Days" />;
};

export default RecentExpense;

const styles = StyleSheet.create({});
