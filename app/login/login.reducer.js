/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */

import { AuthActions } from "../actionNames";

const initialState = {userDetails: [], isLoading: false};

export function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case AuthActions.LOGIN:
      console.log('login.reducer.js file is working with switch case of AuthActions.LOGIN');
      return {...state, isLoading: true};
    case AuthActions.LOGIN_SUCCESS:
      console.log('Login Success message from switch case of AuthActions.LOGIN_SUCCESS of login.reducer.js file and userDetails got is:',JSON.stringify(action.payload));
      return {...state, userDetails: action.payload, isLoading: false};
    case AuthActions.LOGIN_FAILED:
      console.log('Login Failed with switch case of AuthActions.LOGIN_FAILED of login.reducer.js file');
      return {...state, isLoading: false};
    default:
      return state;
  }
}
