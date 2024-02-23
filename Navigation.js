/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';

import LoginScreen from './app/login/Login';
import HomeScreen from './app/Home/HomeScreen';
import OrderScreen from './app/Order/OrderScreen';
import Register from './app/RegisterUser/Register';
import NextRegisterScreen from './app/RegisterUser/NextRegisterScreen';
import AddOrderScreen from './app/AddNewOrder/AddOrderScreen';
import AddOrderScreenSecond from './app/AddNewOrder/AddOrderScreenSecond';
import AddPlatinumOrderScreenSecond from './app/AddNewOrder/AddPlatinumOrderScreenSecond';

const Stack = createNativeStackNavigator();


const Navigation = () => {


  
  
  return (
                                                                                                                                                                                                                                                                            <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="NextRegisterScreen" component={NextRegisterScreen} />
      <Stack.Screen name="AddOrderScreen" component={AddOrderScreen} />
      <Stack.Screen name="AddOrderScreenSecond" component={AddOrderScreenSecond} />
      <Stack.Screen name="AddPlatinumOrderScreenSecond" component={AddPlatinumOrderScreenSecond} />

      
       
      
      </Stack.Navigator>
    </NavigationContainer>
      );
    };


    /* export const OurMainApplication = () => {
      return (

<Stack.Navigator>


<Stack.Screen name="HomeScreen" component={HomeScreen} />


</Stack.Navigator>

);
}; */
    
    
    
    //make this component available to the app
    export default Navigation;
    
    

    // define your styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      //justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#ffffff',
      //backgroundColor: '#2704f0',
    },
    button: {
  
      width: '30%',
  
      padding: 8,
  
      backgroundColor: '#8b7cdf',
  
      borderRadius:responsiveHeight(10),
  
      justifyContent: 'center',
  
      alignItems: 'center',
      margin:responsiveHeight(0.7),
  
  
    },
    TextStyle:{
  
      color:'#fff',
  
  },
  });