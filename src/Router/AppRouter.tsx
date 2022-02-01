import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  Screen1,
  Screen2,
  Screen3,
  Screen5,
  Screen6
} from '../screens';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false, tabBarActiveTintColor: '#174F5B' }}
  >
    <Tab.Screen
      name="Home"
      component={Screen1}
    />
    <Tab.Screen
      name="Screen2"
      component={Screen2}
    />
    <Tab.Screen
      name="Screen3"
      component={Screen3}
    />
  </Tab.Navigator>
);

export const AppRouter = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Tab">
      <Drawer.Screen name="Tab" component={TabNavigator} />
      <Drawer.Screen name="Option1" component={Screen5} />
      <Drawer.Screen name="Option2" component={Screen6} />
    </Drawer.Navigator>
  </NavigationContainer>
);