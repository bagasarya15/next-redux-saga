import Alert from '../alert';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  doAddProduct,
  doRequestGetCategory,
} from '../redux/action/actionReducer';
import { useRouter } from 'next/router';

const CreateProduct = (props: any) => {
  type FormValue = {
    name: string;
    description: string;
    category_id: string;
    price: string;
    image: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  let { category, refresh } = useSelector(
    (state: any) => state.categoryReducers
  );

  const dispatch = useDispatch();
  const navigate = useRouter();

  const handleRegistration = async (data: any) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('category_id', data.category_id);
    formData.append('price', data.price);
    formData.append('image', data.image[0]);
    dispatch(doAddProduct(formData)); //cara 1
    navigate.push('/product');
    // const result = await apiMethod.PostProduct(formData); //cara 2
  };

  useEffect(() => {
    dispatch(doRequestGetCategory());
  }, [refresh]);

  const ValidationForm = {
    name: { required: 'name product is required' },
    description: { required: 'description product is required' },
    category_id: { required: 'category is required' },
    price: { required: 'price is required' },
    image: { required: 'image is required' },
  };

  return (
    <div>
      <p className="text-gray-700 text-2xl mt-2 mb-5 font-bold uppercase">
        Create Product
      </p>
      <div className="border-t-1 border border-black-900"></div>

      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="max-w-xl bg-white py-6 px-3 m-auto w-full">
          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
            <div className="col-span-1">
              <input
                // name="name"
                placeholder="Nama Produk"
                autoComplete="off"
                {...register('name', ValidationForm.name)}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
              />
              <span className="text-sm text-rose-600">
                {errors?.name && errors.name.message}
              </span>
            </div>
            <div className="col-span-1">
              <textarea
                // name="description"
                placeholder="Description"
                autoComplete="off"
                {...register('description', ValidationForm.description)}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
              />
              <span className="text-sm text-rose-600">
                {errors?.description && errors.description.message}
              </span>
            </div>
            <div className="col-span-1">
              <select
                className="bg-gray-50 border border-gray-300 w-full py-2 px-2 text-gray-800 rounded-lg"
                // name="category_id"
                {...register('category_id', ValidationForm.category_id)}
              >
                <option value="">Choose a category</option>
                {category.map((ct: any) => (
                  <option key={ct.id} value={ct.id}>
                    {ct.name}
                  </option>
                ))}
              </select>
              <span className="text-sm text-rose-600">
                {errors?.category_id && errors.category_id.message}
              </span>
            </div>
            <div className="col-span-1">
              <input
                // name="price"
                placeholder="Price"
                autoComplete="off"
                {...register('price', ValidationForm.price)}
                className="border w-full rounded-lg text-gray-800 py-2 px-2"
              />
              <span className="text-sm text-rose-600">
                {errors?.price && errors.price.message}
              </span>
            </div>
            <div className="col-span-1">
              <label className="block">
                <span className="sr-only">Choose product photo</span>
                <input
                  type="file"
                  //   name="image"
                  className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-900
                    hover:file:bg-blue-100 mt-3"
                  {...register('image', ValidationForm.image)}
                />
                <span className="text-sm text-rose-600">
                  {errors?.image && errors.image.message}
                </span>
              </label>
            </div>
          </div>

          <div className="border-t-1 border border-black-900 mt-5"></div>

          <div className="flex-row space-x-4 mt-4 text-right">
            <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              Submit
            </button>

            <button
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => navigate.push('/product')}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
