import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue: {
    color: 'dodgerblue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    fontSize: 24,
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a basic Text</Text>
        <Text style={styles.bigBlue}>Dodger Baseball</Text>
        <Text style={styles.red}>America!</Text>
      </View>
    );
  }
}
