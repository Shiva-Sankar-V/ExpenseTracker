import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  return (
    <View>
      <Input label="Amount" />
      <Input label="Date" />
      <Input label="Description" />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({});
