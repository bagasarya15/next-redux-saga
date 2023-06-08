import { call, put } from 'redux-saga/effects';
import {
  doAddProductResponse,
  doDeleteProductResponse,
  doGetProductResponse,
  doUpdateProductResponse,
} from '../action/actionReducer';
import apiMethod from '@/pages/api/apiMethod';

export function* handleGetAllProduct(): any {
  try {
    const result = yield call(apiMethod.GetAllProduct);
    yield put(doGetProductResponse(result.data));
  } catch (error: any) {
    yield put(doGetProductResponse({ message: error.message, status: 400 }));
  }
}

export function* handleAddProduct(action: any): any {
  try {
    const result = yield call(apiMethod.PostProduct, action.payload);
    yield put(doAddProductResponse(result.data));
  } catch (error: any) {
    yield put(doAddProductResponse({ message: error.message, status: 400 }));
  }
}

export function* handleUpdateProduct(action: any): any {
  try {
    const result = yield call(apiMethod.UpdateProduct, action.payload);
    yield put(doUpdateProductResponse(result.data));
  } catch (error: any) {
    yield put(doUpdateProductResponse({ message: error.message, status: 400 }));
  }
}

export function* handleDeleteProduct(action: any): any {
  try {
    const result = yield call(apiMethod.DeleteProduct, action.payload);
    yield put(doDeleteProductResponse(result.data));
  } catch (error: any) {
    yield put(doDeleteProductResponse({ message: error.message, status: 400 }));
  }
}
