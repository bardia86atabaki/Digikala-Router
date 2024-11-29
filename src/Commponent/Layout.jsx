import React from 'react';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Bloga from '../Pages/Bloga';

function Layout() {
  const location = useLocation();

  // تعیین کنید که آیا باید Bloga را نمایش دهیم یا خیر
  const showBloga = location.pathname !== '/' && !location.pathname.startsWith('/blogs');

  return (
    <>
      <Navbar />
      <div className="flex">
        {showBloga && (
          <div className="w-1/4">
            <Bloga /> {/* باکس Bloga فقط در صفحات خاص نمایش داده می‌شود */}
          </div>
        )}
        <div className={`w-${showBloga ? '3/4' : 'full'} p-6`}>
          <Outlet /> {/* محتوای دیگر در اینجا نمایش داده می‌شود */}
        </div>
      </div>
    </>
  );
}

export default Layout;