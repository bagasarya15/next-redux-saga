import { call, put } from 'redux-saga/effects';
// import apiMethod from '../../api/apiMethod';
import {
  doAddResponse,
  doDeleteResponse,
  doGetUserResponse,
  doUpdateResponse,
} from '../action/actionReducer';
import apiMethod from '@/pages/api/apiMethod';

function* handleGetAllUser(): any {
  try {
    const result = yield call(apiMethod.findByPaginate);
    yield put(doGetUserResponse(result.data.result[0]));
  } catch (error: any) {
    yield put(doGetUserResponse({ message: error.message, status: 400 }));
  }
}

function* handleAddUser(action: any): any {
  try {
    const result = yield call(apiMethod.create, action.payload);
    yield put(doAddResponse(result.data));
  } catch (error: any) {
    yield put(doAddResponse({ message: error.message, status: 400 }));
  }
}

function* handleUpdateUser(action: any): any {
  try {
    const result = yield call(apiMethod.updateUserCustomer, action.payload);
    yield put(doUpdateResponse(result.data));
  } catch (error: any) {
    yield put(doUpdateResponse({ message: error.message, status: 400 }));
  }
}

function* handleDelUser(action: any): any {
  try {
    const result = yield call(apiMethod.deleteUser, action.payload);
    yield put(doDeleteResponse(result.data));
  } catch (error: any) {
    yield put(doDeleteResponse({ message: error.message, status: 400 }));
  }
}

export { handleGetAllUser, handleAddUser, handleUpdateUser, handleDelUser };
