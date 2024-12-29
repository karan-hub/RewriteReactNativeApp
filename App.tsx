import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Hello React Native</Text>
        <Text style={styles.text}>Hello React Native</Text>
        <Text style={styles.text}>Hello React Native</Text>
        <Text style={styles.text}>Hello React Native</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: 'white', // Or any color you prefer
    marginVertical: 5,
  },
});

export default App;
