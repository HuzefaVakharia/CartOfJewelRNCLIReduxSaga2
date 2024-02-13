/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */

import { ActionNamesAssociatedWithRegisterUser } from "../actionNames";

const initialState = {newUserRegisteredDetails: [], isLoading: false};

export function RegisterUserReducer(state = initialState, action) {
  switch (action.type) {
    case ActionNamesAssociatedWithRegisterUser.REGISTER_USER:
      console.log('444444. register.reducer.js file is working with switch case of ActionNamesAssociatedWithRegisterUser.REGISTER_USER');
      return {...state, isLoading: true};
    case ActionNamesAssociatedWithRegisterUser.REGISTER_USER_SUCCESS:
      console.log('13,13,13,13,13: Login Success message from switch case of AuthActions.LOGIN_SUCCESS of login.reducer.js file and userDetails got is:',JSON.stringify(action.payload));
      return {...state, newUserRegisteredDetails: action.payload, isLoading: false};
    case ActionNamesAssociatedWithRegisterUser.REGISTER_USER_FAILED:
      console.log('Login Failed with switch case of AuthActions.LOGIN_FAILED of login.reducer.js file');
      return {...state, isLoading: false};
    default:
      return state;
  }
}
