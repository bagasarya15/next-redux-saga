import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducers from '../reducer/userReducer';
import productReducers from '../reducer/productReducer';
import categoryReducers from '../reducer/categoryReducer';
import loginReducers from '../reducer/loginReducer';

import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../saga';

const logger = createLogger();
const saga = createSagaMiddleware();
const reducer = combineReducers({
  userReducers,
  productReducers,
  categoryReducers,
  loginReducers,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(logger)
      .concat(saga),
});

saga.run(rootSaga); //untuk run saga
export default store;
