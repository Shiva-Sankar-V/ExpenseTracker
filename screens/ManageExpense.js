import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const ManageExpense = ({ route, navigation }) => {
  const editedExpId = route.params?.expId;
  const isEdit = !!editedExpId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdit ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEdit]);

  return (
    <View>
      <Text>ManageExpense</Text>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({});
