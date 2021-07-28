import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    color: "#fff",
    padding: 10,
    fontSize: 24,
    borderRadius: 30,
    backgroundColor: "#000",
    borderColor: "#000",
    fontWeight: "bold",
    width: 200,
    textAlign: "center",
  },
});

export default Button;
