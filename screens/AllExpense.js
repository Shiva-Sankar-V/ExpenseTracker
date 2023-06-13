import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

const AllExpense = () => {
  const expCtx = useContext(ExpensesContext);
  return <ExpensesOutput expenses={expCtx.expenses} expensesPeriod="Total" />;
};

export default AllExpense;

const styles = StyleSheet.create({});
