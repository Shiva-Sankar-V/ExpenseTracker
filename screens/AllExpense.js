import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const AllExpense = () => {
  return <ExpensesOutput expensesPeriod="Total" />;
};

export default AllExpense;

const styles = StyleSheet.create({});
