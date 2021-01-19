/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './src/pages/Home';
import OnBoarding from './src/pages/OnBoarding';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#6548A3" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
