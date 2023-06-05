import { StyleSheet, Text, View } from "react-native";

const ExpensesSummary = (props) => {
  const sum1 = props.expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  //reduce method will run for every instance for the expenses array and
  // second argument 0 will be assigned to sum for the first time running the function, otherwise sum will be assigned to undefined

  return (
    <View>
      <Text>{props.periodName}</Text>
      <Text>Rs{sum1.tofixed(2)}</Text>
    </View>
  );
};
// to fixed is a built-in js code which will reduce the decimal place to the no given inside the brackets
export default ExpensesSummary;

const styles = StyleSheet.create({});
