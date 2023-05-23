import React from 'react';
import ActionTypes from '../action/actionType';

const initialState = {
  products: [],
  status:  0,
  message: '',
  refresh: '',
};

function productReducers(state = initialState, action:any) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_PRODUCT_RESPONSE:
      return {
        state,
        products: payload.result,
        refresh: true,
      };
    case ActionTypes.ADD_PRODUCT_RESPONSE:
      return { state, message: payload.message, status: payload.status, refresh: false };
    case ActionTypes.UPDATE_PRODUCT_RESPONSE:
      return { state, message: payload.message, status: payload.status, refresh: false };
    case ActionTypes.DEL_PRODUCT_RESPONSE:
      return { state, message: payload.message, status: payload.status, refresh: false };
    default:
      return state;
  }
}

export default productReducers;
