/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */








import AsyncStorage from '@react-native-async-storage/async-storage';
import { put, call } from 'redux-saga/effects';
import { AuthActions } from '../actionNames';
//import {authorizedGet, post} from '../../soceton';
import {getdashBoardCount, post} from '../axiosAllAPICallFunctions';
import { ToastAndroid } from 'react-native';
//import {setUser} from '../account.action';
import { setDashBoardCountDataInStore } from '../Home/home.action';







export function* login(action) {
  //alert('Action got inside login.saga.js file is:' + JSON.stringify(action));
  console.log('Action got inside login.saga.js file is:' + JSON.stringify(action));



  /* 
  This above console.log will give below given array from 'action':
  
  
  Action got is:{"type":"LOGIN","payload":{"email":"huzefa147.vak@gmail.com","password":"12345678","navigation":{}}}
  
  
  */







  let auth = null;






  const payload = {
    mobile_no: action.payload.mobile_no,
    password: action.payload.password,
  };


  const { auth_c, error } = yield call(async function () {
    try {
      const auth_c = await post('login', payload);
      return ({ auth_c });
    } catch (error) {
      return ({ error });
    }
  });
  auth = auth_c;
  //console.log('auth_c got inside login.saga.js is:' + JSON.stringify(auth_c));
  console.log('auth_c got inside login.saga.js is:' + JSON.stringify(auth_c));


  /* ****************************************************************************************** */


  if (auth) {
    console.log('Auth is true and Token is of auth.data: ', auth.data.data.access_token);

    /* 
    Above console.log will give this :
 
    Auth is true and Token is of auth.data:  db0221ce35e8f2f5dc8ec9bd98884a6d151f0ff9
    
    */

    let login_details_for_nextTime={
      mobile_no: action.payload.mobile_no,
    password: action.payload.password,
      token:auth.data.data.access_token
    }

    AsyncStorage.setItem('login_details_for_nextTimeKey',JSON.stringify(login_details_for_nextTime));
    /* 
    This is correct without using login_details_for_nextTime 
    
    AsyncStorage.setItem('token',auth.data.data.access_token); */


/*This getdashBoardCount() function is fetching our Dashboard count from our Rajeshwarinfotech server which is tobe shown in HomeScreen*/


    const {dashBoardCountAPIResult, u_error} = yield call(async function () {
      try {
        const dashBoardCountAPIResult = await getdashBoardCount('dashboard_count');
          //const user = await authorizedGet('account/detail');
          console.log('dashBoardCountAPIResult got inside login.saga.js file after getdashBoardCount() function call is:',dashBoardCountAPIResult);
          return ({ dashBoardCountAPIResult });
        } catch (u_error) {
          return ({ u_error });
        }
    }); 



      /* Here we can put navigation code to go to our HomeScreen.js  */


      if (dashBoardCountAPIResult) {
        const response = {
          status: 'success',
          New_orderCount: dashBoardCountAPIResult.data.data.new_order,
          Process_orderCount: dashBoardCountAPIResult.data.data.process_order,
          Duein_thisweekCount: dashBoardCountAPIResult.data.data.duein_thisweek,
          Over_dueCount: dashBoardCountAPIResult.data.data.over_due,
          Total_orderCount: dashBoardCountAPIResult.data.data.total_order,
          Duein_todayCount: dashBoardCountAPIResult.data.data.duein_today,
          Customer_pendingCount: dashBoardCountAPIResult.data.data.customer_pending,

          CustomerCount: dashBoardCountAPIResult.data.data.customer,
          SupplierCount: dashBoardCountAPIResult.data.data.supplier,
          Due_dayCount: dashBoardCountAPIResult.data.data.due_day,

          Instance_idText: dashBoardCountAPIResult.data.data.instance_id,
          //data: user.data.data,
          //social_auth: user.data.social_auth,
          //token: auth.data.token,
        };
        //AsyncStorage.setItem('user', JSON.stringify(response.data));
        console.log('New order count is got inside login.saga.js is:',dashBoardCountAPIResult.data.data.new_order);
        AsyncStorage.setItem(
          'dashBoardDataKey',
          JSON.stringify(response)
      );



      /* Here we are storing our response two times in our Redux store with two different arrays which are present in two different reducers namely
      1. home.reducer (using setDashBoardCountDataInStore)
      2. login.reducer (using AuthActions.LOGIN_SUCCESS)
      
      */
  
        yield put(
          setDashBoardCountDataInStore({
            data: response,
            //social_auth: response.social_auth,
            isLoading: false,
          }),
        );
  
        yield put({
          type: AuthActions.LOGIN_SUCCESS,
          payload: response,
        });

        //action.payload.navigation.navigate('HomeScreen');
  
           action.payload.navigation.reset({
          index: 1,
          //routes: [{name: 'Home'}],
          routes: [{name: 'HomeScreen'}],
          //routes: [{name: 'LoginScreen'}],
          
        });  
  
        console.log('Login success message from if(dashBoardCountAPIResult) condition ');
      } else {//This else is for if(dashBoardCountAPIResult)
        console.log('Error response message from if(dashBoardCountAPIResult) condition');
  
        ToastAndroid.show('Login failed message from if(dashBoardCountAPIResult) condition.', ToastAndroid.SHORT);
        //AsyncStorage.removeItem('token');
        yield put({type: AuthActions.LOGIN_FAILED});
      }


















  } else {//This else is for the if(auth)
    console.log('Error response from login.saga.js file');
    ToastAndroid.show('Login failed message from login.saga.js file.', ToastAndroid.SHORT);
    yield put({ type: AuthActions.LOGIN_FAILED });
  }




}




