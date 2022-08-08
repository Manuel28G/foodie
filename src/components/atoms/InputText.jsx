import React from "react";
import { TextInput } from "react-native-paper";

const InputText = (title, value, onChangeText = () => {}) => {
  return (
    <TextInput
      label={title}
      value={value}
      onChangeText={(text) => onChangeText(text)}
    />
  );
};

export default InputText;
