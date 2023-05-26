import { useState, useEffect, Fragment } from 'react';
import SideBar from './sidebar';
import TopBar from './topbar';
import { Outlet } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

export default function Layout({ children }:any) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  const router = useRouter();

  function handleResize() {
    if (window.innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    try {
      const token:any = Cookies.get('access_token')

      if(!token){
        router.push('/404')
      }

      let decoded:any = jwt_decode(token)
      if (decoded.exp * 1000 - Date.now() <= 0) {
        setIsExpired(true)
        localStorage.removeItem("userData");
        Cookies.remove('access_token')
        alert('token habis')
        router.push('/login')
      }
      
    } catch (error) {
      localStorage.removeItem("userData");
      // router.push('/login')
    }

    if (typeof window != undefined) {
      window.addEventListener('resize', handleResize);
      // if(!localStorage.getItem('TokenNext')){
      //   navigate.push('/login')
      // }
    }


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar />
      </Transition>
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? 'pl-56' : ''
        }`}
      >
        <div className="px-4 md:px-16">{children}</div>
      </main>
    </>
  );
}
