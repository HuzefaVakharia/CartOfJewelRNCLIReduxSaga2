/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */




//import { AuthActions } from "../actionNames";
//import { HomeScreen } from "../actionNames";
//import {OrderScreenActionNames} from "../actionNames";
import {ActionNamesAssociatedWithOrderScreen} from "../actionNames";



/* 
SPECIAL NOTE: FETCHING DATA IN FLATLIST FOR ANY SCREEN IN WHICH WE HAVE TO JUST FETCH DATA FROM SERVER USING API CALLING AND WE DO NOT HAVE TO PASS ANY TOKEN WHILE FETCHING THE DATA THEN THAT PROCESS CAN BE DONE SAME WAY AS WE DID FETCHING OF QUOTES IN OUR PREVIOUS EXAMPLE

*/















//export const setDashBoardCountDataInStore = () => {
     export const fetchOrderPassBodyAndHeader = () => {
        console.log('222222. (For OrderScreen) fetchOrderPassBodyAndHeader() running inside order.action.js file....');
  return {
    type: ActionNamesAssociatedWithOrderScreen.ONLY_GET_ORDERS_DONOTSHOW,
    //payload: payload,
  }; 



  
};


// Action creator function for setting quotes data in the Redux store
export function setOrder_listResultInStore(data) {
  console.log('888888. (For OrderScreen) setOrder_listResultInStore(data) running inside order.action.js file with data:',JSON.stringify(data));
  return {
    type: ActionNamesAssociatedWithOrderScreen.SET_ORDERLIST_DATA_IN_STORE,
    data,
  };
}






// Action creator function for initiating the fetch quotes action
/* export function fetchQuotes() {
    console.log('fetchQuotes() function from home.action running and got this token:');
  return {
    type: HomeScreen.FETCH_QUOTES,
  };
} */

// Action creator function for setting quotes data in the Redux store
/* export function setOrder_listResultInStore(data) {
    console.log('setOrder_listResultInStore() function from home.action running and got this data:',JSON.stringify(data));
   // console.log('setOrder_listResultInStore() function from home.action running and got this data:',data);
  return {
    type: HomeScreen.SET_QUOTES_DATA,
    data,
  }; 
}*/