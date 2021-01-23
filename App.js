/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './src/redux/store'
import { initialiseApplication } from './src/redux/actions/application.actions'
import VersionTag from './src/components/other'
const store = configureStore()
store.dispatch(initialiseApplication())

const App = ({ }) => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <VersionTag />
      </View>

    </Provider>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
