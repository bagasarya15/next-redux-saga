import { call, put } from 'redux-saga/effects';
import { doReqLoginResponse } from '../action/actionReducer';
import apiMethod from '@/pages/api/apiMethod';
import Cookies from 'js-cookie';

export function* handleLogin(action:any):any {
  try {
    const result = yield call(apiMethod.LoginAuth, action.payload);
    if(result.data.token){
      // localStorage.setItem('TokenNext', result.data.token)
      // yield put(doReqLoginResponse({token: result.data.token, message: result.data.message, status:result.data.status}));

        Cookies.set('access_token', result.data.token)
        localStorage.setItem('userData', JSON.stringify({
          id: result.data.result.id,
          username: result.data.result.username,
          firstname: result.data.result.customer.firstname,
          lastname: result.data.result.customer.lastname,
          role_id: result.data.result.role.id,
          name: result.data.result.role.name
        }))
        
        yield put(doReqLoginResponse(result.data));
    }else{
        yield put(doReqLoginResponse({token: '', message: result.data.message, status:result.data.status}));
    }
  } catch (error:any) {
    yield put(doReqLoginResponse({ message: error.message, status: 400 }));
  }
}