/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */


export class AuthActions {
  static LOGIN = 'LOGIN';
  static LOGOUT = 'LOGOUT';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static LOGIN_FAILED = 'LOGIN_FAILED';

  static SOCIAL_LOGIN = 'SOCIAL_LOGIN';

  static SIGNUP = 'SIGNUP';
  static SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
  static SIGNUP_FAILED = 'SIGNUP_FAILED';

  static FORGOT_PASSWORD = 'FORGOT_PASSWORD';
  static FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
  static FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';
  static SET_FORGOT_PASSWORD = 'SET_FORGOT_PASSWORD';

  
}

export class ActionNamesAssociatedWithRegisterUser {
  static REGISTER_USER = 'REGISTER_USER';
  static REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
  static REGISTER_USER_FAILED = 'REGISTER_USER_FAILED';
  
}

export class HomeScreen {
  static SET_DASHBOARDCOUNTVALUE = 'SET_DASHBOARDCOUNTVALUE';
  
  
}

export class ActionNamesAssociatedWithOrderScreen{
  static ONLY_GET_ORDERS_DONOTSHOW = 'ONLY_GET_ORDERS_DONOTSHOW';
  static ORDERSCREENDATAFETCH_SUCCESS = 'ORDERSCREENDATAFETCH_SUCCESS';
  static SET_ORDERLIST_DATA_IN_STORE = 'SET_ORDERLIST_DATA_IN_STORE';
}

export class ReportsActions {
  static ADD_REPORT = 'ADD_REPORT';
  static SELECT_REPORT = 'SELECT_REPORT';
  static DELETE_REPORT = 'DELETE_REPORT';
  static LOAD_REPORT = 'LOAD_REPORT';
  static LOAD_MORE_REPORT = 'LOAD_MORE_REPORT';
}

export class ReportActions {
  static ADD_CREDITS = 'ADD_CREDITS';
  static ADD_CREDIT_HISTORIES = 'ADD_CREDIT_HISTORIES';
  static SET_CREDIT_HISTORIES = 'SET_CREDIT_HISTORIES';

  static SET_CREDITS = 'SET_CREDITS';

  static SET_MEMBERS = 'SET_MEMBERS';
  static ADD_MEMBER = 'ADD_MEMBER';
  static DELETE_MEMBERS = 'DELETE_MEMBERS';
  static UPDATE_MEMBERS = 'UPDATE_MEMBERS';

  static ADD_MEAL_SHOPPING = 'ADD_MEAL_SHOPPING';
  static ADD_MEAL_SHOPPING_HISTORIES = 'ADD_MEAL_SHOPPING_HISTORIES';
  static SET_MEAL_SHOPPING = 'SET_MEAL_SHOPPING';
  static SET_MEAL_SHOPPING_HISTORIES = 'SET_MEAL_SHOPPING_HISTORIES';

  static ADD_MEALS = 'ADD_MEALS';
  static SET_MEALS = 'SET_MEALS';

  static ADD_FIXED_COSTS = 'ADD_FIXED_COSTS';
  static SET_FIXED_COSTS = 'SET_FIXED_COSTS';

  static SET_INCOME = 'SET_INCOME';
  static LOAD_MORE_INCOME = 'LOAD_MORE_INCOME';
  static SET_TOTAL_INCOME = 'SET_TOTAL_INCOME';

  static SET_EXPENSES = 'SET_EXPENSES';
  static LOAD_MORE_EXPENSE = 'LOAD_MORE_EXPENSE';
  static SET_EXPENSE_TOTAL = 'SET_EXPENSE_TOTAL';
}

export class Language {
  static SET_LANGUAGE = 'SET_LANGUAGE';
}

export class SplashActions {
  static CHECK_UPDATE = 'CHECK_UPDATE';
  static IS_LOADING = 'IS_LOADING';
}
