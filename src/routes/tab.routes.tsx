/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Saved from '../pages/Saved';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    tabBar={(_) => <></>}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Saved" component={Saved} />
  </Tab.Navigator>
);

export default TabRoutes;
