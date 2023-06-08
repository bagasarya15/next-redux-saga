import { call, put } from 'redux-saga/effects';
import {
  doAddCategoryResponse,
  doDeleteCategoryResponse,
  doGetCategoryResponse,
  doUpdateCategoryResponse,
} from '../action/actionReducer';
import apiMethod from '@/pages/api/apiMethod';

export function* handleGetAllCategory(): any {
  try {
    const result = yield call(apiMethod.GetAllCategory);
    yield put(doGetCategoryResponse(result.data));
  } catch (error: any) {
    yield put(doGetCategoryResponse({ message: error.message, status: 400 }));
  }
}

export function* handleAddCategory(action: any): any {
  try {
    const result = yield call(apiMethod.PostCategory, action.payload);
    yield put(doAddCategoryResponse(result.data));
  } catch (error: any) {
    yield put(doAddCategoryResponse({ message: error.message, status: 400 }));
  }
}

export function* handleUpdateCategory(action: any): any {
  try {
    const result = yield call(apiMethod.UpdateCategory, action.payload);
    yield put(doUpdateCategoryResponse(result.data));
  } catch (error: any) {
    yield put(
      doUpdateCategoryResponse({ message: error.message, status: 400 })
    );
  }
}

export function* handleDeleteCategory(action: any): any {
  try {
    const result = yield call(apiMethod.DeleteCategory, action.payload);
    yield put(doDeleteCategoryResponse(result.data));
  } catch (error: any) {
    yield put(
      doDeleteCategoryResponse({ message: error.message, status: 400 })
    );
  }
}
