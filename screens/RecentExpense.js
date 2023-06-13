import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpense = () => {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
};

export default RecentExpense;

const styles = StyleSheet.create({});
