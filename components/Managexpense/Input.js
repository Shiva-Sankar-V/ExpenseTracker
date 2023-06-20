import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ label, textInputConfig }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
//Since the properties required for textinput is more and by doing as above
// we will be adding more and more cusrom props to our custom component just to forward them to our text input component.

// Simple way for doing is to get a generic custom prop and then speard them to text input.
// We will then provide the prop as object and the property names used in that object should match
// the property names supported by TextInput and the values for those properties then are simply values accepeted
// by the props we can set on TextInput
