import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { doUpdateCategory } from '../redux/action/actionReducer';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

const UpdateCategory = (props:any) => {
  type FormValue = {
    id:string;
    name: string;
    description: string;
  } 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const navigate = useRouter();
  const dispatch = useDispatch();

  const {id, name, description}:any = navigate.query

  const handleRegistration = (data:any) => {
      dispatch(doUpdateCategory(data));
      navigate.push('/category');
  };

  const registerOptions = {
    id: {required: 'id is required'},
    name: { required: 'name is required' },
    description: { required: 'description is required' },
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="max-w-xl bg-white py-6 px-3 m-auto w-full">
          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
            <div className="col-span-1">
            <input
                // name="username"
                type='hidden'
                {...register('id', registerOptions.id)}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
                defaultValue={id}
              />
              <input
                // name="username"
                placeholder="Name Category"
                autoComplete="off"
                {...register('name', registerOptions.name)}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
                defaultValue={name}
              />
              <span className="text-sm text-rose-600">
                {errors?.name && errors.name.message}
              </span>
            </div>
            <div className="col-span-1">
              <input
                type="text"
                // name="firstname"
                placeholder="Description"
                autoComplete="off"
                {...register('description', registerOptions.description)}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
                defaultValue={description}
              />
              <span className="text-sm text-rose-600">
                {errors?.description && errors.description.message}
              </span>
            </div>
          </div>

          <div className="border-t-1 border border-black-900 mt-5"></div>

          <div className="flex-row space-x-4 mt-4 text-right">
            <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              Submit
            </button>

            <Link href='/category'
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              // onClick={() => navigate.push('/category')}
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCategory;
