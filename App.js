import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Clipboard,
} from "react-native";

import Button from "./src/components/Button";
import generateRandomColor from "./src/utils/generateRandomColor";

const App = () => {
  const [pallteColor1, setPalletColor1] = useState(generateRandomColor());
  const [pallteColor2, setPalletColor2] = useState(generateRandomColor());
  const [pallteColor3, setPalletColor3] = useState(generateRandomColor());
  const [selectedColor, setSelectedColor] = useState("");

  const onButtonPress = () => {
    setPalletColor1(generateRandomColor());
    setPalletColor2(generateRandomColor());
    setPalletColor3(generateRandomColor());
  };

  const copyToClipboard = (value) => {
    Clipboard.setString(value);
    selectedColor(value);
  };

  return (
    <View style={styles.container}>
      {/* pallet1 */}
      <TouchableOpacity
        style={[styles.colorPallete, { backgroundColor: pallteColor1 }]}
        onPress={() => setSelectedColor(pallteColor1)}
      >
        <View></View>
      </TouchableOpacity>
      {/* pallet2 */}
      <TouchableOpacity
        style={[styles.colorPallete, { backgroundColor: pallteColor2 }]}
        onPress={() => setSelectedColor(pallteColor2)}
      >
        <View></View>
      </TouchableOpacity>
      {/* pallet3 */}
      <TouchableOpacity
        style={[styles.colorPallete, { backgroundColor: pallteColor3 }]}
        onPress={() => setSelectedColor(pallteColor3)}
      >
        <View></View>
      </TouchableOpacity>
      {/* generate button */}
      <View style={styles.buttonContainer}>
        <Text style={styles.subTitle}>
          {selectedColor
            ? `${selectedColor} is copied to Clipboard`
            : "Top on pallete to copy the color code."}
        </Text>
        <Button onPress={onButtonPress} title="Generate" />
        <Text style={styles.subTitle}>Tap on Generate to generate colors</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  colorPallete: {
    backgroundColor: "red",
    flex: 1,
    height: 100,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subTitle: {
    marginVertical: 10,
    color: "grey",
  },
});

export default App;
