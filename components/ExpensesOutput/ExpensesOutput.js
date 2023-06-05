import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const Dummy_Expenses = [
  {
    id: "e1",
    description: "Groceries",
    amt: 2504,
    date: new Date("2023-04-01"),
  },
  {
    id: "e2",
    description: "Monitor",
    amt: 8571,
    date: new Date("2023-04-09"),
  },
  {
    id: "e3",
    description: "Blinkit",
    amt: 284,
    date: new Date("2023-04-12"),
  },
  {
    id: "e4",
    description: "Vegetables",
    amt: 345,
    date: new Date("2023-04-15"),
  },
  {
    id: "e5",
    description: "Mobile Recharge",
    amt: 800,
    date: new Date("2023-04-18"),
  },
  {
    id: "e6",
    description: "Groceries",
    amt: 2504,
    date: new Date("2023-04-01"),
  },
  {
    id: "e7",
    description: "Monitor",
    amt: 8571,
    date: new Date("2023-04-09"),
  },
  {
    id: "e8",
    description: "Blinkit",
    amt: 284,
    date: new Date("2023-04-12"),
  },
  {
    id: "e9",
    description: "Vegetables",
    amt: 345,
    date: new Date("2023-04-15"),
  },
  {
    id: "e10",
    description: "Mobile Recharge",
    amt: 800,
    date: new Date("2023-04-18"),
  },
  {
    id: "e11",
    description: "Monitor",
    amt: 8571,
    date: new Date("2023-04-09"),
  },
  {
    id: "e12",
    description: "Blinkit",
    amt: 284,
    date: new Date("2023-04-12"),
  },
  {
    id: "e13",
    description: "Vegetables",
    amt: 345,
    date: new Date("2023-04-15"),
  },
];

// console.log(Dummy_Expenses[0].amt);

const ExpensesOutput = (props) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary
        periodName={props.expensesPeriod}
        expenses={Dummy_Expenses}
      />
      <ExpensesList expenses={Dummy_Expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
