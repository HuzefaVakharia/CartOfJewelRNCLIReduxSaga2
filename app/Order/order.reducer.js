/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */

import { AuthActions,ActionNamesAssociatedWithOrderScreen } from "../actionNames";

const initialState = {userDetailsForOrderScreen: [], isLoading: false};

//export function LoginReducer(state = initialState, action) {
    export function OrderReducer(state = initialState, action) {
  switch (action.type) {
    case ActionNamesAssociatedWithOrderScreen.ONLY_GET_ORDERS_DONOTSHOW:
      console.log('3333. (For OrderScreen) order.reducer.js file is working with switch case of ActionNamesAssociatedWithOrderScreen.ONLY_GET_ORDERS_DONOTSHOW');
      return {...state, isLoading: true};
    // Case for setting quotes data
    case ActionNamesAssociatedWithOrderScreen.SET_ORDERLIST_DATA_IN_STORE:
      console.log('9. (For OrderScreen) ActionNamesAssociatedWithOrderScreen.SET_ORDERLIST_DATA_IN_STORE case running inside order.reducer.js and got quotes which are:',JSON.stringify(action.data));
      return {
        ...state,
        quotes: action.data,
      };
    case ActionNamesAssociatedWithOrderScreen.ORDERSCREENDATAFETCH_SUCCESS:
      console.log('ORDERSCREEN DATA FETCH SUCCESS message from switch case of ActionNamesAssociatedWithOrderScreen.ORDERSCREENDATAFETCH_SUCCESS of order.reducer.js file and userDetails got is:',JSON.stringify(action.payload));
      return {...state, userDetailsForOrderScreen: action.payload, isLoading: false};
    case AuthActions.LOGIN_FAILED:
      console.log('Login Failed with switch case of AuthActions.LOGIN_FAILED of login.reducer.js file');
      return {...state, isLoading: false};
    default:
      return state;
  }
}
