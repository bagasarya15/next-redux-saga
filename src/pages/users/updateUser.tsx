import React, { useState, useEffect } from 'react';
import apiMethod from '../api/apiMethod';
import { useForm } from 'react-hook-form';
import Alert from '../alert';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { doAdd } from '../redux/action/actionReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { doUpdate } from '../redux/action/actionReducer';

const UpdateUser = (props: any) => {
  type FormValue = {
    id: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    role_id: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const navigate = useRouter();
  const { id, username, role_id, name, firstname, lastname }: any =
    navigate.query;

  const [showPassword, setShowPassword] = useState(false);
  const [userRole, setUserRole]: any = useState('');

  const dispatch = useDispatch();

  const handleRegistration = (data: any) => {
    dispatch(doUpdate(data));
    navigate.push('/users');
  };

  const registerOptions = {
    id: { required: 'id is required' },
    username: { required: 'username is required' },
    password: {
      required: 'password is required',
      minLength: {
        value: 5,
        message: 'password must have at least 8 characters',
      },
    },
    firstname: { required: 'first name is required' },
    lastname: { required: 'last name is required' },
    role_id: { required: 'role required' },
  };

  useEffect(() => {
    const getData = async () => {
      const resRole = await apiMethod.GetRoles();
      setUserRole(resRole.data.result);
    };
    getData();
  });

  return (
    <div>
      <p className="text-gray-700 text-2xl mt-2 mb-5 font-bold uppercase">
        Update Users
      </p>
      <div className="border-t-1 border border-black-900"></div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="max-w-xl bg-white py-6 px-3 m-auto w-full">
          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
            <div className="col-span-1">
              <input
                type="hidden"
                // name="username"
                placeholder="Username"
                autoComplete="off"
                {...register('id', registerOptions.id)}
                defaultValue={id}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
              />
              <input
                // name="username"
                placeholder="Username"
                autoComplete="off"
                {...register('username', registerOptions.username)}
                defaultValue={username}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
              />
              <span className="text-sm text-rose-600">
                {errors?.username && errors.username.message}
              </span>
            </div>
            <div className="col-span-1 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="pass-input"
                // name="password"
                placeholder="Password"
                {...register('password', registerOptions.password)}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-800 absolute top-1/2 right-2 transform -translate-y-1/2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <span className="text-sm text-rose-600">
                {errors?.password && errors.password.message}
              </span>
            </div>
            <div className="col-span-1">
              <input
                type="text"
                // name="firstname"
                placeholder="Firstname"
                autoComplete="off"
                {...register('firstname', registerOptions.firstname)}
                defaultValue={firstname}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
              />
              <span className="text-sm text-rose-600">
                {errors?.firstname && errors.firstname.message}
              </span>
            </div>
            <div className="col-span-1">
              <input
                type="text"
                // name="lastname"
                placeholder="Lastname"
                autoComplete="off"
                {...register('lastname', registerOptions.lastname)}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
                defaultValue={lastname}
              />
              <span className="text-sm text-rose-600">
                {errors?.lastname && errors.lastname.message}
              </span>
            </div>
            <div className="col-span-1">
              <select
                className="bg-gray-50 border border-gray-300 w-full py-2 px-2 text-gray-800 rounded-lg"
                {...register('role_id', registerOptions.role_id)}
              >
                <option value="">Choose role</option>
                {Array.isArray(userRole) &&
                  userRole.map(ur => (
                    <option key={ur.id} value={ur.id}>
                      {ur.name}
                    </option>
                  ))}
              </select>
              <span className="text-sm text-rose-600">
                {errors?.role_id && errors.role_id.message}
              </span>
            </div>
          </div>

          <div className="border-t-1 border border-black-900 mt-5"></div>

          <div className="flex-row space-x-4 mt-4 text-right">
            <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              Submit
            </button>

            <button
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => navigate.push('/users')}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
