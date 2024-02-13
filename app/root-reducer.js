/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import {combineReducers} from 'redux';
//import {LoginReducer} from './account/login/login.reducer';
import { LoginReducer } from './login/login.reducer';
import { HomeScreen_DashBoardCount_Reducer } from './Home/home.reducer';
import { OrderReducer } from './Order/order.reducer';
import { RegisterUserReducer } from './RegisterUser/register.reducer';
const rootReducers = combineReducers({
  
  login: LoginReducer,
  dashboardCountingKey:HomeScreen_DashBoardCount_Reducer,
  orderScreenAllOrdersKey:OrderReducer,
  registerUserKey:RegisterUserReducer,
  //quotes:quoteReducer,
  
});

export const whitelist = [
  'login',
  //'orderScreenAllOrdersKey',
];

export default rootReducers;
