/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import {combineReducers} from 'redux';
//import {LoginReducer} from './account/login/login.reducer';
import { LoginReducer } from './login/login.reducer';
import { quoteReducer,ActiveUserReducer } from './Home/home.reducer';
const rootReducers = combineReducers({
  
  login: LoginReducer,
  dashboardCountingKey:ActiveUserReducer,
  //quotes:quoteReducer,
  
});



export default rootReducers;
