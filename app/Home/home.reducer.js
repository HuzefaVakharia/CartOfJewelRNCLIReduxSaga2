/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//Location: src/reducers/quote_reducer.js

//import {SET_QUOTES_DATA} from '../utils/constants';
import { HomeScreen } from "../actionNames";



//import {AuthActions} from '../actionNames';

export function ActiveUserReducer(state = {data: {}, isLoading: true}, action) {
  switch (action.type) {
    case HomeScreen.SET_USER:
      return action.payload;
    /* case AuthActions.LOGOUT:
      return action.payload; */
    default:
      return state;
  }
}

















// Initial state for the quotes data in the Redux store
//const initialState = [];

/* export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    // Case for setting quotes data
    case HomeScreen.SET_QUOTES_DATA:
      return {
        ...state,
        quotes: action.data,
      };
    // Default case for any other action type
    default:
      return {
        ...state,
        quotes: [],
      };
  }
}; */