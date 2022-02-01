import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'beige'
  },
})

export const Screen3 = () => (
  <View style={styles.container}>
    <Text>SCREEN 3</Text>
  </View>
);