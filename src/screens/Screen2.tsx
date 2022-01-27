import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen'
  },
})

export const Screen2 = () => (
  <View style={styles.container}>
    <Text>SCREEN 2</Text>
  </View>
);