import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Orders() {


  const isActive = (path) => location.pathname.includes(path) ? 'text-red-500 border-b-4 border-red-500' : 'text-gray-700';

  return (
    <div className=" flex flex-col items-center w-[400px] bg-gray-50 p-4">

       
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h3 className="text-right text-xl font-bold mb-4">لیست سفارش‌های شما</h3>
          <div className="flex justify-between gap-10 w-[300px] ml-20 mb-4">
            <Link to="current" className={`flex-1 text-center py-2 ${isActive('/orders/current')}`}>
              جاری
            </Link>
            <Link to="delivered" className={`flex-1 text-center py-2 ${isActive('/orders/delivered')}`}>
              تحویل 
            </Link>
            <Link to="returned" className={`flex-1 text-center py-2 ${isActive('/orders/returned')}`}>
              مرجوع 
            </Link>
            <Link to="cancelled" className={`flex-1 text-center py-2 ${isActive('/orders/cancelled')}`}>
              لغو 
            </Link>
          </div>
          <Outlet />
        </div>
      </div>

  );
}

export default Orders;
