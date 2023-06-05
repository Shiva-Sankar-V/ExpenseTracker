import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

function renderItems(itemData) {
  return <Text>{itemData.item.description}</Text>;
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
