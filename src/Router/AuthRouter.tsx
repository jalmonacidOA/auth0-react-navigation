import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenAuth } from '../screens';

const Stack = createNativeStackNavigator();

export const AuthRouter = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Screen auth" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Screen auth" component={ScreenAuth} />
    </Stack.Navigator>
  </NavigationContainer>
);
