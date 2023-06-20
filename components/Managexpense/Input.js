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
//Since the properties required for textinput is more and by doing as above
// we will be adding more and more cusrom props to our custom component just to forward them to our text input component.
