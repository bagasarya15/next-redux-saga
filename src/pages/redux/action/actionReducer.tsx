import ActionTypes from './actionType';

//Action Login
export const doReqLogin = (payload:any) => {
  return {
    type: ActionTypes.REQ_GET_LOGIN,
    payload
  }
}

export const doReqLoginResponse = (payload:any) => {
  return{
    type: ActionTypes.GET_LOGIN_RESPONSE,
    payload
  }
}
//End Action Login

//Action User
export const doRequestGetUser = () => {
  return {
    type: ActionTypes.REQ_GET_USERS,
  };
};

export const doGetUserResponse = (payload:any) => {
  return {
    type: ActionTypes.GET_USERS_RESPONSE,
    payload,
  };
};

export const doAdd = (payload:any) => {
  return {
    type: ActionTypes.ADD_USER,
    payload,
  };
};

export const doAddResponse = (payload:any) => {
  return {
    type: ActionTypes.ADD_USER_RESPONSE,
    payload,
  };
};

export const doUpdate = (payload:any) => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload,
  };
};

export const doUpdateResponse = (payload:any) => {
  return {
    type: ActionTypes.UPDATE_USER_RESPONSE,
    payload,
  };
};

export const doDelete = (payload:any) => {
  return {
    type: ActionTypes.DEL_USER,
    payload,
  };
};

export const doDeleteResponse = (payload:any) => {
  return {
    type: ActionTypes.DEL_USER_RESPONSE,
    payload,
  };
};
//End User Action

//Start Action Category
export const doRequestGetCategory = () => {
  return {
    type: ActionTypes.REQ_GET_CATEGORY,
  };
};

export const doGetCategoryResponse = (payload:any) => {
  return {
    type: ActionTypes.GET_CATEGORY_RESPONSE,
    payload,
  };
};;

export const doAddCategory = (payload:any) => {
  return {
    type: ActionTypes.ADD_CATEGORY,
    payload,
  };
};

export const doAddCategoryResponse = (payload:any) => {
  return {
    type: ActionTypes.ADD_CATEGORY_RESPONSE,
    payload,
  };
};

export const doUpdateCategory = (payload:any) => {
  return {
    type: ActionTypes.UPDATE_CATEGORY,
    payload,
  };
};

export const doUpdateCategoryResponse = (payload:any) => {
  return {
    type: ActionTypes.UPDATE_CATEGORY_RESPONSE,
    payload,
  };
};

export const doDeleteCategory = (payload:any) => {
  return {
    type: ActionTypes.DEL_CATEGORY,
    payload,
  };
};

export const doDeleteCategoryResponse = (payload:any) => {
  return {
    type: ActionTypes.DEL_CATEGORY_RESPONSE,
    payload,
  };
};
//End Action Category

//Start Action Product
export const doRequestGetProduct = () => {
  return {
    type: ActionTypes.REQ_GET_PRODUCT,
  };
};

export const doGetProductResponse = (payload:any) => {
  return {
    type: ActionTypes.GET_PRODUCT_RESPONSE,
    payload,
  };
};;

export const doAddProduct = (payload:any) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload,
  };
};

export const doAddProductResponse = (payload:any) => {
  return {
    type: ActionTypes.ADD_PRODUCT_RESPONSE,
    payload,
  };
}
;
export const doUpdateProduct = (payload:any) => {
  return {
    type: ActionTypes.UPDATE_PRODUCT,
    payload,
  };
};

export const doUpdateProductResponse = (payload:any) => {
  return {
    type: ActionTypes.UPDATE_PRODUCT_RESPONSE,
    payload,
  };
};

export const doDeleteProduct = (payload:any) => {
  return {
    type: ActionTypes.DEL_PRODUCT,
    payload,
  };
};

export const doDeleteProductResponse = (payload:any) => {
  return {
    type: ActionTypes.DEL_PRODUCT_RESPONSE,
    payload,
  };
};
//End Action Product