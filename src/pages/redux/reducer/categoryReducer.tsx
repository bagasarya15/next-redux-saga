import React from 'react';
import ActionTypes from '../action/actionType';

const initialState = {
  category: [],
  status: 0,
  message: '',
  refresh: '',
};

function categoryReducers(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_CATEGORY_RESPONSE:
      return { state, category: payload.result, refresh: true };
    case ActionTypes.ADD_CATEGORY_RESPONSE:
      return {
        state,
        category: payload,
        status: payload.status,
        message: payload.message,
        refresh: false,
      };
    case ActionTypes.UPDATE_CATEGORY_RESPONSE:
      return {
        state,
        category: payload,
        status: payload.status,
        message: payload.message,
        refresh: false,
      };
    case ActionTypes.DEL_CATEGORY_RESPONSE:
      return {
        state,
        category: payload,
        status: payload.status,
        message: payload.message,
        refresh: false,
      };
    default:
      return state;
  }
}

export default categoryReducers;
