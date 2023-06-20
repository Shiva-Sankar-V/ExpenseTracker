import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ label, type, maxLen }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput keyboardType={type} maxLength={maxLen} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
