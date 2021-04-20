import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Test>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      </Test>
    </View>
  );
}

const Test = styled.view`
  background-color: 'red'
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
