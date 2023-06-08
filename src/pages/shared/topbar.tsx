import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { Menu, Transition, Popover } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const TopBar = ({ showNav, setShowNav }: any) => {
  const [username, setUserName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');

  const navigate = useRouter();
  const [token, setToken] = useState('');

  const logoutAuth = async (id: any) => {
    try {
      const result = await Swal.fire({
        title: 'Logout Confirm',
        text: 'Anda ingin logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      });

      if (result.isConfirmed) {
        // localStorage.removeItem('TokenNext');
        Cookies.remove('access_token');
        localStorage.removeItem('userData');
        navigate.push('/login');
      } else {
        Swal.fire('Cancelled');
      }
    } catch (error) {
      console.error('Error :', error);
      Swal.fire('Error!', 'Failed to logout. Please try again.', 'error');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('userData');
    if (token) {
      const userData = JSON.parse(token);
      setUserName(userData.username);
      setFirstName(userData.firstname);
      setLastName(userData.lastname);
    }
  }, []);

  // useEffect(() => {
  //   setToken(localStorage.getItem('TokenNext') || '');
  // },[])

  return (
    <div
      className={`z-40 bg-white fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? 'pl-56' : ''
      }`}
    >
      <div className="pl-4 md:pl-16">
        <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Popover className="relative">
          <Transition
            // as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          ></Transition>
        </Popover>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <picture>
                <img
                  src="./itachi.jpg"
                  className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
                  alt="profile picture"
                />
              </picture>
              <span className="hidden md:block font-medium text-gray-700">
                {firstname} {lastname}
              </span>
              <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700" />
            </Menu.Button>
          </div>
          <Transition
            // as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <button
                    // href="/login"
                    onClick={logoutAuth}
                    className="flex hover:bg-blue-600 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center w-full"
                  >
                    <ArrowLeftOnRectangleIcon className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default TopBar;
