import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaUsers } from 'react-icons/fa';
import { forwardRef, LegacyRef, useEffect, useState } from 'react';
import { MdDashboard, MdGroup, MdShopTwo, MdCategory } from 'react-icons/md';

const SideBar = forwardRef(({}, ref: LegacyRef<HTMLDivElement>) => {
  const route = useRouter();
  const [role_id, setRoleId]:any = useState('');

  useEffect(() => {
    const token = localStorage.getItem('userData');
    if (token) {
      const userData = JSON.parse(token);
      setRoleId(userData.role_id);
    }
  });

  const listMenu = [
    { to: '/', path: '/', icon: <MdDashboard />, name: 'Home' },
    role_id !== 1 ? null : { to: '/users', path: '/users', icon: <MdGroup />, name: 'User' },
    { to: '/category', path: '/category', icon: <MdCategory />, name: 'Category' },
    { to: '/product', path: '/product', icon: <MdShopTwo />, name: 'Product' },
    { to: 'customer', path: '/customer', icon: <FaUsers />, name: 'Customer' },
  ];

  return (
    <div ref={ref} className="z-50 fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <img className="w-32 h-auto" src={'./sidebar-logo.png'} alt="company logo" />
      </div>

      <div className="flex flex-col">
        {(listMenu || []).map((mn:any) =>
          mn ? (
            <Link href={`${mn.to}`} key={mn.path}>
              <div
                className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                  route.pathname == mn.path
                    ? 'bg-blue-100 text-blue-500'
                    : 'text-gray-400 hover:bg-blue-100 hover:text-blue-500'
                }`}
              >
                <div className="mr-2">{mn.icon}</div>
                <div>
                  <p>{mn.name}</p>
                </div>
              </div>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
});

SideBar.displayName = 'SideBar';

export default SideBar;
