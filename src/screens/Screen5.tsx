import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'ghostwhite'
  },
})

export const Screen5 = () => (
  <View style={styles.container}>
    <Text>SCREEN 5</Text>
  </View>
);