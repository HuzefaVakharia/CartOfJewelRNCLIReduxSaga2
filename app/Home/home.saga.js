/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */


import AsyncStorage from '@react-native-async-storage/async-storage';
import { put, call } from 'redux-saga/effects';
import { AuthActions,HomeScreen } from '../actionNames';
//import {authorizedGet, post} from '../../soceton';
import { post} from '../axiosAllAPICallFunctions';
import { ToastAndroid } from 'react-native';
//import {setUser} from '../account.action';
import { fetchQuotes,setQuotes } from './home.action';



export function* getQuotesData(action) {

    alert('Action got inside home.saga.js file is:' + JSON.stringify(action));
  console.log('Action got inside home.saga.js file is:' + JSON.stringify(action));




    const response = yield fetch(HomeScreen.QUOTE_API);
  
    // Parsing the JSON data from the API response
    const responseData = yield response.json();
  
    // Dispatching the 'setQuotes' action with the retrieved quotes data
    /* 
    This is correct for quotes just commented to get response from dashboard count
    */
    
    yield put(setQuotes(responseData.quotes)); 


    //yield put(setQuotes(responseData));
  }