import * as React from "react";
import { StyleSheet, TextInput, } from "react-native";

class FormTextInput extends React.Component {
  render() {
    const { style, ...otherProps } = this.props;
    return (
      <TextInput
        selectionColor="#428AF8"
        style={[styles.textInput, style]}
        placeholderTextColor="white"
        {...otherProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
    color: 'white',
    borderBottomColor: 'white'
  }
});

export default FormTextInput;