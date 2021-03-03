import React from "react";
import { HelperText, TextInput } from "react-native-paper";

export const TextField = props => {
  console.log(props.error)
  return (
  <>
     <TextInput
        secureTextEntry={props.secureTextEntry}
        error={!!props.error}
        underlineColor="white"
        mode="flat"
        onBlur={props.onBlur}
        placeholderTextColor="white"
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
      {!!props.error && <HelperText type="error">{props.error}</HelperText>}
  </>
)}
