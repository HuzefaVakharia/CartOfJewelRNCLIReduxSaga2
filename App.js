/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './Navigation';
import {NavigationContainer} from '@react-navigation/native';

import store, {persist_store} from './store';
import AsyncStorage from '@react-native-async-storage/async-storage';


function App() {
  /* const [isLogged,setisLogged]=useState(false);

 const _retrieveData=async()=>{
    try{
      const data=await AsyncStorage.getItem('token');
      console.log('Data got in App.js is:',data);
      setisLogged(data);
      }catch(error){}
      }


      useEffect(()=>{
        _retrieveData();
      },[]); */


      return (
        <Provider store={store}>
        <PersistGate persistor={persist_store}>
        
        <Navigation/>
        
    
        
        </PersistGate>
        </Provider>
      );


 /*  return (
    <Provider store={store}>
    <PersistGate persistor={persist_store}>
    <NavigationContainer>
    {isLogged?<OurMainApplication/>:<Navigation/>}
    </NavigationContainer>

    
    </PersistGate>
    </Provider>
  ); */
}

export default App;


