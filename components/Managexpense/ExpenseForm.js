import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../ExpensesOutput/UI/Button";

const ExpenseForm = ({ submitButtonLabel, onCancel, onSumbit }) => {
  const [inputVal, setInputVal] = useState({
    amount: "",
    date: "",
    description: "",
  });
  function inputChangeHandler(inputIdentifier, enteredVal) {
    setInputVal((curInputVal) => {
      return {
        ...curInputVal,
        [inputIdentifier]: enteredVal,
      };
    });
  }
  function sumbitHandler() {}
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expenses</Text>
      <View style={styles.input}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputVal.amount,
          }}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            keyboardType: "phone-pad",
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputVal.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCapitalize: "sentences",
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputVal.description,
        }}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} press={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} press={sumbitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
