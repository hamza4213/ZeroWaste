import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Button = (props) => {
  const { backgroundColor, text, onPress, textclr, borderColor, marginTop, width, borderRadius, bottom } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: width,
        height: 50,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderColor: borderColor,
        justifyContent: "center",
        alignItems: "center",
        borderWidth:1.5,
        marginTop: marginTop,
        bottom: bottom
      }}
    >
      <Text style={{ color: textclr }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;