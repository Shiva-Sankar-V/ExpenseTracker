import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/ExpensesOutput/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/Managexpense/ExpenseForm";
import { storeExpense, updateExpense, deleteExpense } from "../util/http";
import Loading from "../components/ExpensesOutput/UI/Loading";
import Error from "../components/ExpensesOutput/UI/Error";

const ManageExpense = ({ route, navigation }) => {
  const [isManaging, setIsManaging] = useState(false);
  const [error1, setError1] = useState();
  const expCtx = useContext(ExpensesContext);

  const editedExpId = route.params?.expId;
  const isEdit = !!editedExpId;

  const selectedExp = expCtx.expenses.find((exp) => exp.id === editedExpId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdit ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEdit]);

  async function deleteExpHandler() {
    setIsManaging(true);
    try {
      await deleteExpense(editedExpId);
      expCtx.delExp(editedExpId);
      navigation.goBack();
    } catch (error) {
      setError1("Could not delete expense - Please try again later");
      setIsManaging(false);
    }
  }

  const cancelHandler = () => {
    navigation.goBack();
  };

  async function confirmHandler(expData) {
    setIsManaging(true);
    try {
      if (isEdit) {
        expCtx.updateExp(editedExpId, expData);
        await updateExpense(editedExpId, expData);
      } else {
        const id = await storeExpense(expData);
        expCtx.addExp({ ...expData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError1("Could not save data - Please try again later!");
      setIsManaging(false);
    }
  }

  if (error1 && !isManaging) {
    return <Error message={error1} />;
  }

  if (isManaging) {
    return <Loading />;
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
