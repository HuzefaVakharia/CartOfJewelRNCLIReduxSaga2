/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */

//import {createStore, applyMiddleware} from 'redux';
import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
//import rootReducers, {whitelist} from './root-reducer';
import rootReducers, {whitelist} from './app/root-reducer';
//import {rootSaga} from '../root-saga';
import { rootSaga } from './app/root-saga';
import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';


//import thunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: whitelist,
}   

let persistedReducer=persistReducer(persistConfig,rootReducers);

const sagaMiddleware = createSagaMiddleware();

    

const store = configureStore({
  //reducer:rootReducers,
  reducer:persistedReducer,
  middleware:()=>[sagaMiddleware]
  //applyMiddleware(sagaMiddleware, thunk),
});
sagaMiddleware.run(rootSaga);

export const persist_store = persistStore(store);
export default store;
