/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */



import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = 'https://rajeshwersoftsolution.com/jwelcart/api/';






/* VIMP NOTE OF WHEN TO USE THIS KIND OF API CALL :This is for Login when we have to pass userid and password to server (i.e. when we have to pass some data inside body to fetch our API, here payload is data which we will pass as body to fetch our API) and get response from server 

 
This above post() method which is user defined will post our payload to our online server
  

*/
export async function post(handler, payload) {
  console.log('6. Login function executing in axiosfile..And payload got is:',JSON.stringify(payload));  
  return axios.post(BASE_URL + handler, payload);
  
  }
  














  /* VIMP NOTE OF WHEN TO USE THIS KIND OF API CALL :This method of API calling is useful when we have to just pass only token inside header and not anything inside body to fetch our API */

  export async function getdashBoardCount(handler, payload = false) {
    const values = await AsyncStorage.getItem('login_details_for_nextTimeKey');
    console.log('9. Values got inside axiosAllAPICallFunction.js file after AsyncStorage.getItem() is:',JSON.stringify(values));
    let user = JSON.parse(values);
    let options = {
      method: 'POST',
      //method: 'GET',

      headers: {Authorization: 'Bearer ' + user.token},
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



 /*  
 //This is working but not sending data to order.saga.js file:
 
 
 export async function getOrderScreenData(handler, payload = false) {
    const values = await AsyncStorage.getItem('login_details_for_nextTimeKey');
    console.log('Values got inside axiosAllAPICallFunction.js file after AsyncStorage.getItem() is:',JSON.stringify(values));
    let user = JSON.parse(values);

    fetch(
      'https://rajeshwersoftsolution.com/jwelcart/api/' + handler,
      {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + user.token,
          },

          

          body: JSON.stringify({
            start: 0,
                    limit: 1000}),
          }

  ).then((response) =>   
  {
      let result = response.json();

      result.then((values) =>
      {
          console.log('Console gave Values using normal fetch() function is:'+JSON.stringify(values));
      }
      
      );
  
    }
    );
  
    return values;

  } */







  /* 
  
  
  
  See this ref: https://www.mindbowser.com/how-to-send-a-raw-data-body-to-an-axios-request-in-react-native/ 
  */
  
  
  /* VIMP NOTE OF WHEN TO USE THIS KIND OF API CALL :This method of API calling is useful when we have to pass both header and body part to fetch our API, Here the structure of our axios.post() function to pass Url, body and header will be like this:
  
  axios.post(URL,body_part,header_part) */
  export async function getOrderScreenData(handler, payload = false) {
    
    const values = await AsyncStorage.getItem('login_details_for_nextTimeKey');
    console.log('6. (For OrderScreen) Values got inside axiosAllAPICallFunction.js file after AsyncStorage.getItem() is:',JSON.stringify(values));
    
  
    const limitsetter = JSON.stringify({

      "start": 0,
      
      "limit": 1000,
      
      });
    
    let user = JSON.parse(values);
  
    //return axios(options);
    return axios.post(BASE_URL + handler, limitsetter,{headers: {Accept: 'application/json',
    'Content-Type': 'application/json',Authorization: 'Bearer ' + user.token},});
  } 
  