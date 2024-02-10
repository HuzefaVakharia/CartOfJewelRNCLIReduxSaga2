/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */




import { AuthActions } from "../actionNames";
export function fetchLoginPassBodyOnly(payload) {
  console.log('3333. Payload got inside Login.action.js file is:'+JSON.stringify(payload));
  return {
    type: AuthActions.LOGIN,
    payload,
  };
  
  /* This fetchLoginPassBodyOnly() function will return action type name 'AuthActions.LOGIN' and payload to root-saga.js file where 
  
  REMEMBER ONE THING IF OUR PROJECT CONTAINS root-saga.js or root-reducer.js file then before our action file return any action type name or data to saga file, first of all action will return action type and data to root-saga.js file where we will have takeEvery() function executing, takeEvery() function inside our Watcher function rootSaga() which will keep watching the action type provided inside it getting passed by action.js file, and once this takeEvery() function will get 'AuthActions.LOGIN', then login() generator function from login.saga.js will be called.

  So the flow of our program is like this after dispatch() function call from Login.js:
  
  login.action.js -> root-saga.js- > login.saga.js
  */
}
