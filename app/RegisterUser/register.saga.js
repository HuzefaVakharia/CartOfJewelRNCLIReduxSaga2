/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */








import AsyncStorage from '@react-native-async-storage/async-storage';
import { put, call } from 'redux-saga/effects';
import { ActionNamesAssociatedWithRegisterUser } from '../actionNames';

//import {fetchdashBoardCountPassHeaderOnly, post} from '../axiosAllAPICallFunctions';
import {postNewUserDataForRegisteration} from '../axiosAllAPICallFunctions';
import { ToastAndroid } from 'react-native';

//import { setDashBoardCountDataInStore } from '../Home/home.action';







export function* registerUserSagaGeneratorFunction(action) {
  
  console.log('55555. Action got inside register.saga.js file is:' + JSON.stringify(action));



  /* 
  This above console.log will give below given array from 'action':
  
  
  Action got is:{"type":"LOGIN","payload":{"email":"huzefa147.vak@gmail.com","password":"12345678","navigation":{}}}
  
  
  */







  let newUserRegisterDetails = null;






  /* const payload = {
    mobile_no: action.payload.mobile_no,
    password: action.payload.password,
  }; */

  let payload = {
    name:action.payload.name,
    shop_name:action.payload.shop_name,
    address:action.payload.address,
    contact_no:action.payload.contact_no,
    email:action.payload.email,
    password:action.payload.password,
    c_password:action.payload.c_password,
    website:action.payload.website,
    contact_person:action.payload.contact_person,
    contact_person_no:action.payload.contact_person_no,
    state:action.payload.state,
    city:action.payload.city,
    pincode:action.payload.pincode,
  };



  const { registerNewUser_c, error } = yield call(async function () {
    try {
      const registerNewUser_c = await postNewUserDataForRegisteration('registershop', payload);
      return ({ registerNewUser_c });
    } catch (error) {
      return ({ error });
    }
  });
  newUserRegisterDetails = registerNewUser_c;
  
  console.log('777777. registerNewUser_c got inside login.saga.js is:' + JSON.stringify(registerNewUser_c));


  /* ****************************************************************************************** */


  if(registerNewUser_c.data.result==true){
    console.log('if condition of registerNewUser_c.data.result==true is:' + registerNewUser_c.data.result);
    yield put({
      type: ActionNamesAssociatedWithRegisterUser.REGISTER_USER_SUCCESS,
      payload: newUserRegisterDetails,
    });
  
    ToastAndroid.show(registerNewUser_c.data.message, ToastAndroid.LONG);
    action.payload.navigation.reset({
      index: 1,
      
      routes: [{name: 'LoginScreen'}],
      
      
    });
  
  }else{
    console.log('if condition of registerNewUser_c.data.result==true is false and value got is also:' + registerNewUser_c.data.result);
    ToastAndroid.show('Register New User failed due to:'+ registerNewUser_c.data.message, ToastAndroid.LONG);
        //AsyncStorage.removeItem('token');
        yield put({type: ActionNamesAssociatedWithRegisterUser.REGISTER_USER_FAILED});

          action.payload.navigation.reset({
          index: 1,
          
          routes: [{name: 'Register'}],
          
          
        });  
  }

 


}




