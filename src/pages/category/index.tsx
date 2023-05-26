import Content from '../content';
import { useRouter } from 'next/router';
import { Menu, Transition } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { doDeleteCategory, doRequestGetCategory} from '../redux/action/actionReducer';
import React, { useEffect, Fragment, useState } from 'react';
import { BsThreeDotsVertical, BsPencil, BsTrash } from 'react-icons/bs';
import Alert from '../alert';
import Swal from 'sweetalert2';
import Link from 'next/link';
import Paginate from '../paginate';

const Category = (props:any) => {
  
  const column = [
    { name: '#No' },
    { name: 'Jenis Kategori' },
    { name: 'Deskripsi Kategori' },
  ];
  
  const router = useRouter();
  const { category, message, status, refresh } = useSelector((state:any) => state.categoryReducers);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const totalPages = Math.ceil(category?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // const currentItems = category?.slice(startIndex, endIndex); // Menggunakan "?." untuk menghindari kesalahan jika category null atau undefinedconst currentItems = Array.isArray(category) ? category.slice(startIndex, endIndex) : [];
  const currentItems = Array.isArray(category) ? category.slice(startIndex, endIndex) : [];


  const handlePageChange = (page:any) => {
    setCurrentPage(page);
  };
  
  const handleDelete = async (id:any) => {
    try {
      const result = await Swal.fire({
        title: 'Delete Confirm?',
        text: "Data yang dihapus tidak dapat dikembalikan!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
  
      if (result.isConfirmed) {
        dispatch(doDeleteCategory(id));
      } else {
        Swal.fire(
          'Cancelled',
          'Your data is safe.',
          'info'
        );
      }
      dispatch(doRequestGetCategory());
    } catch (error) {
      console.error('Error deleting data:', error);
      Swal.fire(
        'Error!',
        'Failed to delete data. Please try again.',
        'error'
      );
    }
  };

  useEffect(() => {
    
    if (message) {
      setTimeout(() => {
        if (status === 200) {
          Alert.AlertSucces(message);
        } else {
          Alert.AlertError(message);
        }
      }, 500);
    }
    
    dispatch(doRequestGetCategory());
  }, [refresh]);

  return (
    <div>
      <ToastContainer />
      <Content title="category" path="Category">
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="border-t border-gray-200">
              {(column || []).map((col) => (
                <th className="pr-6 py-2 text-left border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span className="lg:pl-2">{col.name}</span>
                </th>
              ))}
                <th className="pr-6 py-2 text-left border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
          {(currentItems || []).map((dt: any, index: any) => (
              <tr key={dt.id}>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {index + 1}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {dt.name}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {dt.description}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900">
                  <div className="w-full text-right">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          Options
                          <BsThreeDotsVertical
                            className="ml-2 -mr-1 h-5 w-5 text-gray-700 hover:text-gray-400 sm:flex"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-7 mt-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href = {{
                                    pathname: '/category/updateCategory',
                                    query: {
                                      id: dt.id,
                                      name: dt.name,
                                      // category_id : dt.category.id,
                                      description: dt.description
                                    },
                                  }}
                                  // onClick={() =>
                                  //   router.push('/upCategory', {
                                  //     state: { UsersData: dt },
                                  //   })
                                  // }
                                  className={`${
                                    active
                                      ? 'bg-blue-100 text-blue-900'
                                      : 'text-blue-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <BsPencil
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsPencil
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Edit
                                </Link>
                              )}
                            </Menu.Item>
                          </div>

                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  // onClick={() => {
                                  //   setUserById(dt);
                                  //   setIsDelete(true);
                                  // }}
                                  onClick={()=>{
                                    handleDelete(dt.id)
                                  }}
                                  className={`${
                                    active
                                      ? 'bg-blue-100 text-blue-900'
                                      : 'text-blue-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <BsTrash
                                      className="mr-2 h-5 w-5 text-black-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsTrash
                                      className="mr-2 h-5 w-5 text-black-400"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Delete
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
      <Paginate totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  );
};

export default Category;
