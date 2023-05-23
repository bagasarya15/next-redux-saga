import { call, put } from 'redux-saga/effects';
import { doReqLoginResponse } from '../action/actionReducer';
import apiMethod from '@/pages/api/apiMethod';

export function* handleLogin(action:any):any {
  try {
    const result = yield call(apiMethod.LoginAuth, action.payload);
    if(result.data.token){
        localStorage.setItem('TokenNext', result.data.token)
        yield put(doReqLoginResponse({token: result.data.token, message: result.data.message, status:result.data.status}));
    }else{
        yield put(doReqLoginResponse({token: '', message: result.data.message, status:result.data.status}));
    }
  } catch (error:any) {
    yield put(doReqLoginResponse({ message: error.message, status: 400 }));
  }
}