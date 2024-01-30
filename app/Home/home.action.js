/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */




//import { AuthActions } from "../actionNames";
import { HomeScreen } from "../actionNames";





export const setUser = (payload) => {
  return {
    type: HomeScreen.SET_USER,
    payload: payload,
  };
};










// Action creator function for initiating the fetch quotes action
/* export function fetchQuotes() {
    console.log('fetchQuotes() function from home.action running and got this token:');
  return {
    type: HomeScreen.FETCH_QUOTES,
  };
} */

// Action creator function for setting quotes data in the Redux store
/* export function setQuotes(data) {
    console.log('setQuotes() function from home.action running and got this data:',JSON.stringify(data));
   // console.log('setQuotes() function from home.action running and got this data:',data);
  return {
    type: HomeScreen.SET_QUOTES_DATA,
    data,
  }; 
}*/