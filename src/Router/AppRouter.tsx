import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen5,
  Screen6
} from '../screens';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Screen 1"
    screenOptions={{ headerShown: false, tabBarActiveTintColor: '#174F5B' }}
  >
    <Tab.Screen
      name="Screen 1"
      component={Screen1}
    />
    <Tab.Screen
      name="Screen 2"
      component={Screen1}
    />
    <Tab.Screen
      name="Screen 3"
      component={Screen1}
    />
  </Tab.Navigator>
);

export const AppRouter = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false, drawerStyle: { width: '100%' } }}
      >
        <Drawer.Screen name="Screen 4" component={Screen4} />
        <Drawer.Screen name="Screen 5" component={Screen5} />
        <Drawer.Screen name="Screen 6" component={Screen6} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
