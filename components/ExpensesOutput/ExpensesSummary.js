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
    <View style={styles.outerContainer}>
      <View style={styles.contrainer}>
        <Text style={styles.period}>{props.periodName}</Text>
        <Text style={styles.sum}>Rs {sum1.toFixed(2)}</Text>
      </View>
    </View>
  );
};
// to fixed is a built-in js code which will reduce the decimal place to the no given inside the brackets
export default ExpensesSummary;

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: "center",
  },
  contrainer: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "99%",
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
