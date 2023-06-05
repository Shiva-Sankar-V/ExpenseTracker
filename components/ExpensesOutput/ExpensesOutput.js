import { StyleSheet, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const ExpensesOutput = (props) => {
  return (
    <View>
      <ExpensesSummary
        periodName={props.expensesPeriod}
        expenses={props.expenses}
      />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
