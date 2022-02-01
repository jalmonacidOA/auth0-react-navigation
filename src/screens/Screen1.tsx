import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aliceblue'
  },
})

export const Screen1 = () => (
  <View style={styles.container}>
    <Text>SCREEN 1</Text>
  </View>
);