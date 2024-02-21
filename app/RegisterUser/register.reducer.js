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
      console.log('13,13,13,13,13: REGISTER_USER_SUCCESS Success message from switch case of ActionNamesAssociatedWithRegisterUser.REGISTER_USER_SUCCESS of register.reducer.js file and new user Details got is:',JSON.stringify(action.payload));
      return {...state, newUserRegisteredDetails: action.payload, isLoading: false};
    case ActionNamesAssociatedWithRegisterUser.REGISTER_USER_FAILED:
      console.log('REGISTER_USER_FAILED Failed with switch case of ActionNamesAssociatedWithRegisterUser.REGISTER_USER_FAILED of register.reducer.js file');
      return {...state, isLoading: false};
    default:
      return state;
  }
}
