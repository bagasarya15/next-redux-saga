import ActionTypes from '../action/actionType';

const initialState = {
  user: [],
  message: '',
  status: 0,
  refresh: '',
};

function userReducers(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_USERS_RESPONSE:
      return {
        state,
        user: payload,
        refresh: true,
      };
    case ActionTypes.ADD_USER_RESPONSE:
      return {
        state,
        message: payload.message,
        status: payload.status,
        refresh: false,
      };
    case ActionTypes.UPDATE_USER_RESPONSE:
      return {
        state,
        message: payload.message,
        status: payload.status,
        refresh: false,
      };
    case ActionTypes.DEL_USER_RESPONSE:
      return {
        state,
        message: payload.message,
        status: payload.status,
        refresh: false,
      };
    default:
      return state;
  }
}

export default userReducers;
