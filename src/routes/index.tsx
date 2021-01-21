/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoarding from '../pages/OnBoarding';
import TabRoutes from './tab.routes';
import CourseLessons from '../pages/CourseLessons';
import LessonDetails from '../pages/LessonDetails';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#6548A3'},
    }}
  >
    <App.Screen name="OnBoarding" component={OnBoarding} />
    <App.Screen name="MainBottom" component={TabRoutes} options={{gestureEnabled: false}} />
    <App.Screen name="CourseLessons" component={CourseLessons} />
    <App.Screen name="LessonDetails" component={LessonDetails} />
  </App.Navigator>
);

export default AppRoutes;
