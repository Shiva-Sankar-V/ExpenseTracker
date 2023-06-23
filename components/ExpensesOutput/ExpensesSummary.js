import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ExpensesSummary = (props) => {
  const sum1 = props.expenses.reduce((sum, exp) => {
    // console.log(sum);
    // console.log(exp.amt);
    return sum + exp.amt;
  }, 0);

  //reduce method will run for every instance for the expenses array and
  // second argument 0 will be assigned to sum for the first time running the function, otherwise sum will be assigned to undefined
  //Argument "exp" will copy the data from the expenses props.

  return (
    <View style={styles.contrainer}>
      <Text style={styles.period}>{props.periodName}</Text>
      <Text style={styles.sum}>Rs {sum1.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  contrainer: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
