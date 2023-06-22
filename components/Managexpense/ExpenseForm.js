import { StyleSheet, Text, View, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../ExpensesOutput/UI/Button";
import { GlobalStyles } from "../../constants/styles";

//defaultVal.date returns date as object.
// toISOString is a bulit-in JS method for converting date object to date string
// in the format of YYYY-MM-DD.slice method will reduce the date format to 1st 10digits

const ExpenseForm = ({ submitButtonLabel, onCancel, onSumbit, defaultVal }) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultVal ? defaultVal.amt.toFixed(2).toString() : "",
      isValid: true,
    },
    date: {
      value: defaultVal ? defaultVal.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
    description: {
      value: defaultVal ? defaultVal.description : "",
      isValid: true,
    },
  });

  //Since add expense screen displays the error message right from the beginning
  //Change the default isValid to true.
  //Technically, empty string should have isValid as false.
  //Since we are checking for the validation and updating the state
  //it is no issues to change the default validity

  function inputChangeHandler(inputIdentifier, enteredVal) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredVal, isValid: true },
      };
    });
  }

  //We assume the inputs provided is valid for now. So i have provided the isValid as truthy.
  //If the enetered value is false we will check them later and then update accordingly.

  function sumbitHandler() {
    const expData = {
      amt: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };
    //+ will convert the strings to numbers. the input values the textinput always
    // return datatype as strings

    const amtIsValid = !isNaN(expData.amt) && expData.amt > 0;

    // condition for checking amont validation only if
    // amount is a number and greater than zero

    const dateIsValid = expData.date.toString() !== "Invalid Date";

    //Standard js provides the string "Invalid Date" if we provide invalid format to new Date()
    //eg: new Date('Hello World') will return Invalid Date as object.
    //So if we convert it to new Date("Hello World").toString() we will get output as Invalid Date as string

    const descIsValid = expData.description.trim().length > 0;

    //trim will remove excess white space available in the beginning and ending of a sentence.
    //length will calculate the no of characters in the description.

    if (!amtIsValid || !dateIsValid || !descIsValid) {
      // Alert.alert("Invalid Input", "Please check your input values");
      // console.log(amtIsValid, dateIsValid, descIsValid);
      setInputs((currentInputs) => {
        return {
          amount: { value: currentInputs.amount.value, isValid: amtIsValid },
          date: { value: currentInputs.date.value, isValid: dateIsValid },
          description: {
            value: currentInputs.description.value,
            isValid: descIsValid,
          },
        };
      });
    } else {
      onSumbit(expData);
    }
  }
  const formIsValid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expenses</Text>
      <View style={styles.input}>
        <Input
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Input
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            keyboardType: "phone-pad",
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          autoCapitalize: "sentences",
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      {formIsValid && (
        <Text style={styles.errorText}>
          Invalid input Values - Please check your entered data!
        </Text>
      )}
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
  errorText: {
    textAlign: "center",
    fontSize: 16,
    color: GlobalStyles.colors.error500,
    margin: 8,
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
