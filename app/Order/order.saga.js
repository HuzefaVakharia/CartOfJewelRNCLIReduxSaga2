/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */








import AsyncStorage from '@react-native-async-storage/async-storage';
import { put, call } from 'redux-saga/effects';
import { AuthActions,ActionNamesAssociatedWithOrderScreen } from '../actionNames';

import {getdashBoardCount, post,getOrderScreenData} from '../axiosAllAPICallFunctions';
import { ToastAndroid } from 'react-native';

import {fetchOrderPassBodyAndHeader,setOrder_listResultInStore} from '../Order/order.action';






export function* orderscreendatafetching(action) {
  
  console.log('444444. (For OrderScreen) Action got inside order.saga.js file is:' + JSON.stringify(action));



  


/*This getdashBoardCount() function is fetching our Dashboard count from our Rajeshwarinfotech server which is tobe shown in HomeScreen*/


    //const {orderScreenAPIResult, u_error} = yield call(async function () {
      let {orderScreenAPIResult, u_error} = yield call(async function () {
        console.log('55555. (For OrderScreen) call function inside order.saga.js running....');
      try {
        
        //const orderScreenAPIResult = await getOrderScreenData('order_list');
        orderScreenAPIResult = await getOrderScreenData('order_list');
          
          console.log('777777. (For OrderScreen) orderScreenAPIResult got inside login.saga.js file after getdashBoardCount() function call is:',JSON.stringify(orderScreenAPIResult));
          return ({ orderScreenAPIResult });
        } catch (u_error) {
          return ({ u_error });
        }
    }); 



    // Dispatching the 'setOrder_listResultInStore' action with the retrieved quotes data
 
 yield put(setOrder_listResultInStore(orderScreenAPIResult.data.data.order_list));



      




}




