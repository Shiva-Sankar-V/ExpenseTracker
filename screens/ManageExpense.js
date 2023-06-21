import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/ExpensesOutput/UI/IconButton";
import { GlobalStyles } from "../constants/styles";

import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/Managexpense/ExpenseForm";

const ManageExpense = ({ route, navigation }) => {
  const expCtx = useContext(ExpensesContext);

  const editedExpId = route.params?.expId;
  const isEdit = !!editedExpId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdit ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEdit]);

  const deleteExpHandler = () => {
    expCtx.delExp(editedExpId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEdit) {
      expCtx.updateExp(editedExpId, {
        description: "Update Expense Test",
        amt: 499,
        date: new Date("2023-06-14"),
      });
    } else {
      expCtx.addExp({
        description: "Add Expense Test",
        amt: 199,
        date: new Date("2023-06-15"),
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEdit ? "Update" : "Add"}
        onCancel={cancelHandler}
      />

      {isEdit && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            press={deleteExpHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
