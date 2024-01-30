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
import {authorizedGet, post} from '../axiosAllAPICallFunctions';
import { ToastAndroid } from 'react-native';
//import {setUser} from '../account.action';
import { setUser } from '../Home/home.action';







export function* login(action) {
  alert('Action got inside login.saga.js file is:' + JSON.stringify(action));
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




    AsyncStorage.setItem('token', auth.data.data.access_token);

/*This authorizedGet() function is fetching our Dashboard count from our Rajeshwarinfotech server which is tobe shown in HomeScreen*/


    const {user, u_error} = yield call(async function () {
      try {
        const user = await authorizedGet('dashboard_count');
          //const user = await authorizedGet('account/detail');
          console.log('user got inside login.saga.js file after authorizedGet() function call is:',user);
          return ({ user });
        } catch (u_error) {
          return ({ u_error });
        }
    }); 



      /* Here we can put navigation code to go to our HomeScreen.js  */


      if (user) {
        const response = {
          status: 'success',
          New_orderCount: user.data.data.new_order,
          Process_orderCount: user.data.data.process_order,
          Duein_thisweekCount: user.data.data.duein_thisweek,
          Over_dueCount: user.data.data.over_due,
          Total_orderCount: user.data.data.total_order,
          Duein_todayCount: user.data.data.duein_today,
          Customer_pendingCount: user.data.data.customer_pending,

          CustomerCount: user.data.data.customer,
          SupplierCount: user.data.data.supplier,
          Due_dayCount: user.data.data.due_day,

          Instance_idText: user.data.data.instance_id,
          //data: user.data.data,
          //social_auth: user.data.social_auth,
          //token: auth.data.token,
        };
        //AsyncStorage.setItem('user', JSON.stringify(response.data));
        console.log('New order count is got inside login.saga.js is:',user.data.data.new_order);
        AsyncStorage.setItem(
          'dashBoardDataKey',
          JSON.stringify(response)
      );



      /* Here we are storing our response two times in our Redux store with two different arrays which are present in two different reducers namely
      1. home.reducer (using setUser)
      2. login.reducer (using AuthActions.LOGIN_SUCCESS)
      
      */
  
        yield put(
          setUser({
            data: response,
            //social_auth: response.social_auth,
            isLoading: false,
          }),
        );
  
        yield put({
          type: AuthActions.LOGIN_SUCCESS,
          payload: response,
        });
  
         action.payload.navigation.reset({
          index: 1,
          //routes: [{name: 'Home'}],
          routes: [{name: 'HomeScreen'}],
          
        });
  
        console.log('Login success message from if(user) condition ');
      } else {//This else is for if(user)
        console.log('Error response message from if(user) condition');
  
        ToastAndroid.show('Login failed message from if(user) condition.', ToastAndroid.SHORT);
        //AsyncStorage.removeItem('token');
        yield put({type: AuthActions.LOGIN_FAILED});
      }


















  } else {//This else is for the if(auth)
    console.log('Error response from login.saga.js file');
    ToastAndroid.show('Login failed message from login.saga.js file.', ToastAndroid.SHORT);
    yield put({ type: AuthActions.LOGIN_FAILED });
  }




}



