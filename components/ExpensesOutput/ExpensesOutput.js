import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

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
];

// console.log(Dummy_Expenses[0].amt);

const ExpensesOutput = (props) => {
  return (
    <View>
      <ExpensesSummary
        periodName={props.expensesPeriod}
        expenses={Dummy_Expenses}
      />
      <ExpensesList expenses={Dummy_Expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
