import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Screen1, Screen2 } from '../screens';

const Stack = createNativeStackNavigator();

export const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Screen_1" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Screen_1" component={Screen1} />
      <Stack.Screen name="Screen_2" component={Screen2} />
    </Stack.Navigator>
  </NavigationContainer>
)