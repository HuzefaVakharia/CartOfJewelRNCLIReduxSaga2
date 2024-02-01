/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */



import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
//export const BASE_URL = 'https://api.soceton.com/';
export const BASE_URL = 'https://rajeshwersoftsolution.com/jwelcart/api/';


export async function post(handler, payload) {
  console.log('Login function executing in axiosfile..And payload got is:',JSON.stringify(payload));  
  return axios.post(BASE_URL + handler, payload);
  /* 
  
  This code is also correct which can show the fetch result in console but was not returning value to login.saga.js file, so to return the value above code is sufficient and working.
  
  axios.post(BASE_URL + handler, payload)
  .then((getResponse) => {
    console.log("GET Response")
    console.log('Console got this after then:',getResponse.data);
    let data = getResponse.data;
    return data;    
  })
  .catch(function (error) {
    console.log("Error while fetching From RajeshwareSoftSolution: ",error.response.data);
    //console.log("Error while fetching From RajeshwareSoftSolution: ",JSON.stringify(error));
  });   */




    
















  }
  /* 
  This above post() method which is user defined will post our payload to our online server
  */



  export async function getdashBoardCount(handler, payload = false) {
    const token = await AsyncStorage.getItem('token');
    let options = {
      method: 'POST',
      //method: 'GET',

      headers: {Authorization: 'Bearer ' + token},
      //headers: {Authorization: 'Token ' + token},
      url: handler,
      baseURL: BASE_URL,
    };
    if (payload) {
      options.data = payload;
      //alert('payload from getdashBoardCount() function is True:' + payload);
    }
    else{
      //alert('payload from getdashBoardCount() function is False and handler is:' + handler+'And Payload is:'+payload);
      /* alert('payload from getdashBoardCount() function is False and payload is:' + payload+'options.data is:'+options.data+' ,And full options is:'+JSON.stringify(options)); */
    }
    return axios(options);
  }
  