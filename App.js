import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from './src/components/Button';

import generateRandomColor from './src/utils/generateRandomColor';

const App = () => {
  const [bgColor, setBgColor] = useState(generateRandomColor());
  const [btnColor, setBtnColor] = useState(generateRandomColor());
  const [btnTextColor, setBtnTextColor] = useState(generateRandomColor());

  const onButtonPress = () => {
    setBgColor(generateRandomColor())
    setBtnColor(generateRandomColor())
    setBtnTextColor(generateRandomColor())
  }

  return (
    <View style={[styles.container, {backgroundColor:bgColor}]}>
      <Button onPress={onButtonPress} btnColor={btnColor} btnTextColor={btnTextColor} title="Generate Color"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;