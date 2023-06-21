import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  function amountChangeHandler() {}
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expenses</Text>
      <View style={styles.input}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangeHandler,
          }}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCapitalize: "sentences",
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 25,
    textAlign: "center",
  },
  input: {
    flexDirection: "row",

    justifyContent: "space-between",
  },
});
