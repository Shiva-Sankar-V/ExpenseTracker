import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

function renderItems(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

const ExpensesList = (props) => {
  return (
    <FlatList
      data={props.expenses}
      renderItem={renderItems}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
