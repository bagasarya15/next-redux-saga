import { takeEvery, all } from 'redux-saga/effects';
import ActionTypes from '../action/actionType';
import {
  handleGetAllUser,
  handleAddUser,
  handleDelUser,
  handleUpdateUser,
} from './userSaga';
import {
  handleGetAllProduct,
  handleAddProduct,
  handleDeleteProduct,
  handleUpdateProduct,
} from './productSaga';
import {
  handleAddCategory,
  handleDeleteCategory,
  handleGetAllCategory,
  handleUpdateCategory,
} from './categorySaga';
import { handleLogin } from './loginSaga';

function* watchAll() {
  yield all([
    takeEvery(ActionTypes.REQ_GET_LOGIN, handleLogin),

    takeEvery(ActionTypes.REQ_GET_USERS, handleGetAllUser),
    takeEvery(ActionTypes.ADD_USER, handleAddUser),
    takeEvery(ActionTypes.UPDATE_USER, handleUpdateUser),
    takeEvery(ActionTypes.DEL_USER, handleDelUser),

    takeEvery(ActionTypes.REQ_GET_PRODUCT, handleGetAllProduct),
    takeEvery(ActionTypes.ADD_PRODUCT, handleAddProduct),
    takeEvery(ActionTypes.UPDATE_PRODUCT, handleUpdateProduct),
    takeEvery(ActionTypes.DEL_PRODUCT, handleDeleteProduct),

    takeEvery(ActionTypes.REQ_GET_CATEGORY, handleGetAllCategory),
    takeEvery(ActionTypes.ADD_CATEGORY, handleAddCategory),
    takeEvery(ActionTypes.UPDATE_CATEGORY, handleUpdateCategory),
    takeEvery(ActionTypes.DEL_CATEGORY, handleDeleteCategory),
  ]);
}

export default watchAll;
