import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightsalmon'
  },
})

export const Screen4 = () => (
  <View style={styles.container}>
    <Text>SCREEN 4</Text>
  </View>
);