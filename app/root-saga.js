/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */

import {all, takeEvery, take} from 'redux-saga/effects';
import {AuthActions,HomeScreen,ActionNamesAssociatedWithOrderScreen} from './actionNames';
//import {forgotPassword} from './account/forgotpassword/forgotpassword.saga';
//import {signup} from './account/signup/signup.saga';
//import {login} from './account/login/login.saga';
import { login } from './login/login.saga';
import { orderscreendatafetching } from './Order/order.saga';
import { getQuotesData } from './Home/home.saga';


/* 
To understand how to create rootSaga() function see this video: https://www.youtube.com/watch?v=G3BDAR8zkl0&list=PLWwJRj72soFfa8PRzpXF44P-FZJYedj-E&index=12 

*/




// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    takeEvery(AuthActions.LOGIN, login),
    takeEvery(ActionNamesAssociatedWithOrderScreen.ONLY_GET_ORDERS_DONOTSHOW, orderscreendatafetching),
    
    /* Always remember this VIMP CONCEPT THAT WHEN WE WILL CALL ANY WORKER FUNCTION FROM SAGA.JS FILE LIKE HERE ABOVE WE ARE CALLING WORKER FUNCTION WHOSE NAME IS login, then ALONG WITH CALLING THIS WORKER FUNCTION login WE WILL PASS THE ACTION.TYPE NAME AND DATA WHICH IS GOT FROM ACTION.JS FILE, BUT IT IS NOT WRITTEN AS FUNCTION ARGUMENT WHILE CALLING OUR WORKER FUNCTION LIKE THIS:
    
    takeEvery(AuthActions.LOGIN, login(action)),

    BUT STILL WHEN login WATCHER FUNCTION IS CALLED FROM root-saga.js file then whatever is returned from action.js file will be sent automatically to the saga.js file.  


    
    */
    //takeEvery(AuthActions.SIGNUP, signup),
    //takeEvery(AuthActions.FORGOT_PASSWORD, forgotPassword),
    //takeEvery(HomeScreen.FETCH_QUOTES, getQuotesData),
  ]);
}
