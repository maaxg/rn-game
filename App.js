/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Provider } from 'react-redux'
import configureStore from './src/redux/store'

const store = configureStore()


const App = ({ }) => {
  return (
    <Provider store={store}>

      <Text>Open up to work on my app</Text>

    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
