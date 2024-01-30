/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import Navigation from './Navigation';

import store from './store';


function App() {
  return (
    <Provider store={store}>
    <Navigation/>
    </Provider>
  );
}

export default App;


