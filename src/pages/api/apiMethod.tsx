import axios from '../config/endpoint';
import Cookies from 'js-cookie';

axios.interceptors.request.use((config:any) => {
  // const token = localStorage.getItem('access_token')  
  try {
    const token = Cookies.get('access_token')
    config.headers['Authorization'] = token;
    return config;
  } catch (error:any) {
    console.log(error.message)
  }
});

const findAll = () => {
  return axios.get('/users');
};

const create = (data:any) => {
  return axios.post('/users', data);
};

const GetById = async (id:any) => {
  return axios.get(`/users/${id}`);
};

// const updateUserCustomer = async (data:any, id:any) => {
//   return axios.patch(`/users/${id}`, data);
// };

const updateUserCustomer = (data:any) => {
  console.log('isCheck', data)
  return axios.patch(`/users/${data.id}`, data);
};

const deleteUser = async (id:any) => {
  return axios.delete(`/users/${id}`,id);
};

const GetAllCategory = () => {
  return axios.get('/prod-cat-dto');
};

const PostCategory = (data:any) => {
  return axios.post('/prod-cat-dto', data)
}

const UpdateCategory = (data:any) => {
  return axios.patch(`/prod-cat-dto/${data.id}`, data);
};

const DeleteCategory = async (id:any) => {
  return axios.delete(`/prod-cat-dto/${id}`, id);
};

const GetRoles = () => {
  return axios.get('/roles');
};

const GetAllProduct = () => {
  return axios.get('/product');
};

const PostProduct = (data:any) => {
  return axios.post('/product', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const UpdateProduct = (data:any) => {
  return axios.patch(`/product/${data.get('id')}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const DeleteProduct = async (id:any) => {
  return axios.delete(`/product/${id}`, id);
};

const LoginAuth = (data:any) => {
  return axios.post('/auth/login', data)
}

const findByPaginate = () => {
  return axios.get('/users/paginate')
}
export default {
  findAll,
  findByPaginate,
  create,
  GetById,
  updateUserCustomer,
  deleteUser,
  GetAllCategory,
  PostCategory,
  UpdateCategory,
  DeleteCategory,
  GetRoles,
  GetAllProduct,
  PostProduct,
  UpdateProduct,
  DeleteProduct,
  LoginAuth
};
