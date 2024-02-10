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

import {fetchdashBoardCountPassHeaderOnly, post} from '../axiosAllAPICallFunctions';
import { ToastAndroid } from 'react-native';

import { setDashBoardCountDataInStore } from '../Home/home.action';







export function* login(action) {
  
  console.log('55555. Action got inside login.saga.js file is:' + JSON.stringify(action));



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
  
  console.log('777777. auth_c got inside login.saga.js is:' + JSON.stringify(auth_c));


  /* ****************************************************************************************** */


  if (auth) {
    console.log('888888. Auth is true and Token is of auth.data: ', auth.data.data.access_token);

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
    Till here all our process of Login gets completed and our code inside login.saga.js file for only Login process completed because understand this concept, that saga file in any redux project do only two things:
    1. Fetch an API using Axios or Fetch function.
    2. Triggers another Action of Redux which will store the fetched result of our API inside Redux store.

    Now this this part we have completed our first step of saga for login i.e. Fetch an API using Axios or Fetch function, but now for login process we are not going to store our fetched api result inside our store of redux in this project, but we are storing the information of our user like his mobile_no and password and token inside our AsyncStorage(), so to above you can see we have created a new JSON Array with name login_details_for_nextTime and stored the attributes like mobile_no, password using 'action.payload.mobile_no' and 'action.payload.password' and token which we have fetched using our axios api calling using 'auth.data.data.access_token'. Note that we are not storing password and mobile number from our result which we have got from our login api calling but we are storing value from action.payload which logger has provided while loging because the password which we will get after login api calling will be in encrypted formate and we can not store the encypted format password in our AsyncStorage for next time auto login, so we are taking values directly from our action.payload.    
    
    
    
    */


/*This fetchdashBoardCountPassHeaderOnly() function is fetching our Dashboard count from our Rajeshwarinfotech server which is tobe shown in HomeScreen*/


    let {dashBoardCountAPIResult, u_error} = yield call(async function () {
      try {
        //const dashBoardCountAPIResult = await fetchdashBoardCountPassHeaderOnly('dashboard_count');
         dashBoardCountAPIResult = await fetchdashBoardCountPassHeaderOnly('dashboard_count');
          console.log('10,10,10,10,10: dashBoardCountAPIResult got inside login.saga.js file after fetchdashBoardCountPassHeaderOnly() function call is:',dashBoardCountAPIResult);
          return ({ dashBoardCountAPIResult });
        } catch (u_error) {
          return ({ u_error });
        }
    }); 



      /*  Understand the concept of what we are getting in return after calling the dashboard_count api:
      
      There are two different types of returns we get after calling any api and that two different types are as follows:
      1. JSON Array with n number of sub JSON Array which are identified by single id number. Example of this type of returned JSON Array is Order_list api returned JSON Array. This kind of returned JSON Array which have sub JSON Array in which sub JSON Array are differentiated by some id number has to be iterated using FlatList or any iterating method of JavaScript before showing on our device screen.
      2. Single JSON Array inside which there is no sub JSON Arrays but all the information given in that single JSON Array has to be shown on our screen without iterating the got JSON Array. Example of this type of returned JSON Array is dashboard_count api.   
      
      
      
      When we will call the dashboard_count api then this api calling will return us full JSON Array inside our variable with name dashBoardCountAPIResult, and now using just . operator we can fetch the data from this JSON Array like this  'dashBoardCountAPIResult.data.data.new_order', 
      
      SO IN ANY NEW PROJECT REMEMBER THREE STEPS WHICH ARE REQUIRED IN SAGA API CALLING
      
      1. FIRST STEP IS TO GET THE API CALLING RESULT USING FETCH OR AXIOS INSIDE A SINGLE VARIABLE.
      
      2. SECOND STEP IS TO STORE THE FETCHED API JSON RESULT INSIDE OUR REDUX STORE, AND FOR THIS STEP WE WILL CREATE ANOTHER ACTION,AND A SWITCH CASE INSIDE OUR REDUCER FILE AND FOR CALLING THIS ACTION USUALLY WE WILL USE PUT() FUNCTION BECAUSE WE ARE CALLING THE ACTION DIRECTLY FROM OUR SAGA FILE. SO IN EVERY SAGA FILE THERE ARE TWO PARTS, IN FIRST PART WE WILL FETCH OUR API FROM SERVER USING, ONCE WE GET OUR API RESULT CORRECTLY INSIDE A VARIABLE, THEN SECOND PART IN SAGA FILE WILL BE TO USE PUT() FUNCTION TO TRIGGER ANOTHER ACTION WHICH WILL STORE THE RESULT OF API CALLING INSIDE OUR STORE OR REDUX.

      3. ONCE THE FETCHED RESULT OF API CALLING IS STORED INSIDE OUR REDUX STORE THEN WE WILL RETRIEVE OUR STORED DATA FROM OUR REDUX STORE INSIDE OUR SCREEN ON WHICH WE HAVE TO DISPLAY OUR FETCHED DATA AND TO RETRIEVE THE DATA FROM OUR STORE WE WILL USE useSelector() hook. ALSO REMEMBER THAT TO ONLY DISPLAY OUR DATA ON OUR SCREEN FROM OUR REDUX STORE WE DO NOT HAVE TO CREATE ANY SEPERATE ACTION OR ANY SEPERATE REDUCER SWITCH, BECAUSE DISPLAYING THE DATA ON OUR DEVICE SCREEN WILL BE HANDLED USING ONLY useSelector() hook.  
      
      
      
      
      
      
      
      
      
      
      
      
      AFTER THE FIRST STEP OF THINKING THAT WHAT HAS TO BE PASSED FOR API CALLING I.E 
      
      1. Fetch API without passing anything like Body or Header (Like fetch Quotes API from our first demo of Saga).
      2. Fetch API by passing only Body part like username and password (Like fetch Login API)
      3. Fetch API by passing only Header part like AccessToken in Header. (Like fetch API for DashBoardCount in CartOfJewelProject)
      4. Fetch API by passing both Header and Body parts like pass start and limit value inside body and AccessToken inside Header (Like fetch API for All available Orders in FlatList)

      ONCE WE HAVE SELECTED ONE OPTION FROM ABOVE 4 OPTIONS TO FETCH OUR API, THE NEXT THING WHICH WE HAVE TO DECIDE IS THAT WHAT KIND OF JSON RESPONSE WE WILL GET IN RETURN AFTER API CALLING, I.E. ARE WE GOING TO GET SINGLE JSON ARRAY WITHOUT ANY SUB JSON ARRAY, OR SECOND TYPE OF RETURN IS THAT A ROOT JSON ARRAY WHICH HAVE SUB JSON ARRAYS INSIDE THAT ROOT JSON AND ALL THE SUB JSON ARRAYS ARE DIFFERENTIATED USING ID. 

      IF WE ARE GOING TO GET A SINGLE JSON ARRAY WITHOUT SUB JSON ARRAYS THEN FOLLOW THE STEPS OF STORING THE FETCHED API RESULT INSIDE OUR STORE WHICH IS SHOWN INSIDE DEMO OF dashBoardCountAPIResult WHICH IS SHOWN IN OUR login.saga.js file, BUT IF WE ARE GOING TO GET A ROOT JSON ARRAY WITH SUB JSON ARRAYS THEN FOLLOW THE WAY OF orderScreenAPIResult WHICH IS SHOWN INSIDE         order.saga.js file. 

      
      */


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
          
        };
        
        console.log('11,11,11,11,11->->->. New order count is got inside login.saga.js is:',dashBoardCountAPIResult.data.data.new_order);
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
          
          routes: [{name: 'HomeScreen'}],
          
          
        });  
  
        console.log('14,14,14,14. Login success message from if(dashBoardCountAPIResult) condition ');
      } else {//This else is for if(dashBoardCountAPIResult)
        console.log('Error response message from if(dashBoardCountAPIResult) condition');
  
        ToastAndroid.show('11,11,11,11,11. Login failed message from if(dashBoardCountAPIResult) condition.', ToastAndroid.SHORT);
        //AsyncStorage.removeItem('token');
        yield put({type: AuthActions.LOGIN_FAILED});
      }


















  } else {//This else is for the if(auth)
    console.log('888888. Error response from login.saga.js file');
    ToastAndroid.show('Login failed message from login.saga.js file.', ToastAndroid.SHORT);
    yield put({ type: AuthActions.LOGIN_FAILED });
  }




}




