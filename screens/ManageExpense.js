import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/ExpensesOutput/UI/IconButton";
import { GlobalStyles } from "../constants/styles";

import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/Managexpense/ExpenseForm";
import { storeExpense } from "../util/http";

const ManageExpense = ({ route, navigation }) => {
  const expCtx = useContext(ExpensesContext);

  const editedExpId = route.params?.expId;
  const isEdit = !!editedExpId;

  const selectedExp = expCtx.expenses.find((exp) => exp.id === editedExpId);

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

  async function confirmHandler(expData) {
    if (isEdit) {
      expCtx.updateExp(editedExpId, expData);
    } else {
      const id = await storeExpense(expData);
      expCtx.addExp({ ...expData, id: id });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEdit ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSumbit={confirmHandler}
        defaultVal={selectedExp}
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
